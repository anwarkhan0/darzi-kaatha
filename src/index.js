import './template/index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import homePage from './views/homePage';
import navbar from './views/navbar/navbar';
import registerView from './views/forms/register';
import profileView from './views/cutomers/profile';
import editProfileView from './views/cutomers/editProfile';
import AddNewCustomerView from './views/cutomers/addNew';
import loginView from './views/forms/login';
import customersList from './views/cutomers/customerList';
import { Customers } from './models/Customers';
import {insertLoader, removeLoader} from './views/utils/loader';
import { Suits } from './models/Suits';
import insertElement from './views/utils/insertElement';

const state = {};


//loading header
navbar();

//Loading main content
function load(content) {
    switch (content) {
        case 'home':
            homePageController();
            break;
        case 'profile':
            profileControl();
            break;
        /* case 'editProfile':
            editProfileView();
            break; */
        case 'addnew':
            AddingCustomerControl();
            break;
        case 'register':
            // registerView();
            // formEvents();
            // passwordAuthentication();
            break;
        case 'paid':
            customersList('paid', state.paidCustomers);
            break;
        case 'pendingPayment':
            customersList('pending', state.pendingPayCustomers);
            break;
        case 'CustomerList':
            //load view
            customersList('listAll', state.customers);
            //add events to all the rendered customers
            state.customers.map( (el, i) => {
                document.querySelector('#button' + i).addEventListener('click', ()=>{
                    state.searchTerm = document.getElementById(i).value;
                    location.hash = '#profile';
                    profileControl();
                })
            })
            break;
        case 'delete':
            alert('sorry not built yet!');
            break;
        default:
            // loginView();
            // formEvents();
            break;
    }
}

//Pagination
window.addEventListener('hashchange', function() {
    document.querySelector('.container').innerHTML = "";
    
    let page = location.hash;
    page = page.replace('#', '');
    load(page)
  }, false);
  

//load data from database
async function fetchData(page){
    insertLoader();
    state.data = new Customers();
    await state.data.getCustomers();
    state.suits = new Suits();
    await state.suits.getSuits();
    removeLoader();
    load(page)
}

fetchData('home');


//Home page controller
function homePageController(){
    
    //save all customers in its own array
    state.customers = [];
    for(let key in state.data.result){
        let customer = state.data.result[key];
        customer.id = key;
        state.customers.push(customer)
    }

    state.allSuits = [];
    for(let key in state.suits.result){
        state.allSuits.push(state.suits.result[key])
    }
    
    
    //find customer types
    //find customer who have not paid
    state.paidCustomers = [];
    //find customer who have paid some amount
    state.pendingPayCustomers = [];

    let small = 0, medium = 0, large = 0;

    state.customers.map( el => {

        if (el.type === 'Small') {
            small++
        }else if(el.type === 'Medium'){
            medium++
        } else{
            large++
        }
    })

    state.allSuits.map( el => {
        let name;
        state.customers.map( customer => {
            if(customer.id === el.customerId){
                name = customer.name
            }
        })

        if (el.paid < el.totalCost) {
            state.pendingPayCustomers.push({name: name, ...el})
        } else{
            state.paidCustomers.push({name: name, ...el})
        }
    })
    
    
    

    let working = 0, waiting = 0, totalSuits = 0;
    state.allSuits.map( el => {
        working = working + Number(el.working);
        waiting = waiting + Number(el.waiting);
        totalSuits = Number(el.totalSuits) + totalSuits;
    })

    let completed = totalSuits - (working + waiting) > 0 ? totalSuits - (working + waiting) : 0;
    
    
    const customersStats = {
        totalCustomers: state.customers.length,
        totalSuits: totalSuits,
        paymentPending: state.pendingPayCustomers.length,
        paymentDone: state.paidCustomers.length,
        small: small,
        medium: medium,
        large: large,
        working: working,
        waiting: waiting,
        completed: completed
    }
    // console.log(customersStats);
    
    homePage(customersStats);

    //search button handler
    document.querySelector('#searchBtn').addEventListener('click', ()=>{
        state.searchTerm = document.getElementById('searchVal').value;
        location.hash = '#profile';
    })
}

//Profile controller
function profileControl(){

    let customer;
    //look for the search term in existing custoemrs
    state.customers.map( el => {
        if (state.searchTerm.search(el.name) !== -1 ) {
            customer = el;
        }
    })
    
    //if customer found
    if(customer){
        if(state.suits.result !== null){
        for (let key in state.suits.result) {
            if(customer.id === state.suits.result[key].customerId){
                customer.suits = {
                    waiting: state.suits.result[key].waiting,
                    totalSuits: state.suits.result[key].totalSuits,
                    totalCost: state.suits.result[key].totalCost,
                    paid: state.suits.result[key].paid,
                    unpaid: (state.suits.result[key].totalCost - state.suits.result[key].paid),
                    working: state.suits.result[key].working,
                    completed: (state.suits.result[key].totalSuits - (state.suits.result[key].waiting + state.suits.result[key].working)) > 0 ? (state.suits.result[key].totalSuits - (state.suits.result[key].waiting + state.suits.result[key].working)) : 0
                };
                break;
            } else{
                customer.suits = {
                    waiting: 0,
                    totalSuits: 0,
                    totalCost: 0,
                    paid: 0,
                    unpaid: 0,
                    working: 0,
                    completed: 0
                }
            } 
        }
    } else{
        customer.suits = {
            waiting: 0,
            totalSuits: 0,
            totalCost: 0,
            paid: 0,
            unpaid: 0,
            working: 0,
            completed: 0
        }
    }
        profileView(customer);

        /* ********************************* Profile Events *********************************** */
        //Loading edit profile
        document.getElementById('editProfile').addEventListener('click', ()=>{
            editProfileView(customer);
            document.getElementById('editForm').addEventListener('submit', (e)=>{
                e.preventDefault();
                let editedCustomer = {
                    name: document.getElementById('name').value,
                    type: document.getElementById('type').value,
                    contactNumber: document.getElementById('contact-number').value,
                    bodyMeasurements: {
                        bodyLength: document.getElementById('body-length').value,
                        bottomWidth: document.getElementById('bottom-width').value,
                        chestWidth: document.getElementById('chest-width').value,
                        shoulderWidth: document.getElementById('shoulder-width').value,
                        sleeveWidth: document.getElementById('sleeve-width').value,
                        waisteWidth: document.getElementById('waiste-width').value
                    }
                }
                const dbReq  = new Customers();
                dbReq.updateCustomer(customer.id, editedCustomer);
                fetchData('home');
                
            })
        })
        
        
        //deleting customer
        document.getElementById('delete').addEventListener('click', ()=>{
            const dbCustReq  = new Customers();
            const dbSuitReq = new Suits();
            if(confirm('Are You Sure To Delete This Customer?')) {
                let suitID;
                for( let key in state.suits.result){
                    if (customer.id === state.suits.result[key].customerId) {
                        suitID = key;
                        console.log(key);
                        
                    }
                }
                dbSuitReq.deleteSuit(suitID);
                dbCustReq.deleteCustomer(customer.id);
                fetchData('home');
            }
        })

        //Adding suits
        document.getElementById('add-suits').addEventListener('click', ()=>{
            const dbReq  = new Suits();
            let id = document.getElementById('customer-id').value;
            let cost = document.getElementById('suits-cost').value;
            let amount = document.getElementById('suits-amount').value;
            
            
            let flag = true;
            for(let key in state.suits.result){
                
                //if found then update the object or create new object
                if(state.suits.result[key].customerId === id){
                    let updatedAmount = Number(state.suits.result[key].totalSuits) + Number(amount);
                    let updatedCost  =  Number(state.suits.result[key].totalCost) + Number(cost);
                    let updatedWaiting = Number(state.suits.result[key].waiting) + Number(amount);
                    const data = {
                        totalSuits: updatedAmount,
                        totalCost: updatedCost,
                        waiting: updatedWaiting
                    }
                    flag = false;
                    dbReq.updateSuit(key, data);
                    fetchData('home');
                    break;
        
                }
            }
            
            if (flag === true) {
                const data = {
                    customerId: id,
                    totalSuits: amount,
                    totalCost: cost,
                    waiting: amount,
                    working: 0,
                    paid: 0
                }
                dbReq.addNewSuits(data);
                fetchData('home');
            }

        })

        //Changing work progress
        document.getElementById('work-progress').addEventListener('click', ()=>{
            let id = document.getElementById('customer-id').value;
            let currWorking = Number(document.getElementById('work').value);
            const dbReq = new Suits();
            
            //find the match for customer
            for(let key in state.suits.result){
                
                //if suit for the customer found
                if(state.suits.result[key].customerId === id){
                    let waitingVal = Number(state.suits.result[key].waiting);
                    let prevWork = Number(state.suits.result[key].working);
                    console.log(currWorking + ' ' + prevWork);
                    
                    if (currWorking > prevWork) {
                        let diffBtwnWork = currWorking - prevWork;
                        let newWaitingVal = waitingVal - diffBtwnWork;
                        const data = {
                            waiting: newWaitingVal,
                            working: currWorking
                        }
                        dbReq.updateSuit(key, data);
                        fetchData('home');
                        break;
                    }else if (currWorking < prevWork) {
                        dbReq.updateSuit(key, {working: currWorking})
                        fetchData('home');
                    }
                }
                
            }

        })

        //payment progress
        document.getElementById('payment-progress').addEventListener('click', ()=>{
            let id = document.getElementById('customer-id').value;
            let currPayment = Number(document.getElementById('paid').value);
            const dbReq = new Suits();
            
            //find the match for customer
            for(let key in state.suits.result){
                
                //if suit for the customer found
                if(state.suits.result[key].customerId === id){
                    let prevPayment = Number(state.suits.result[key].paid);
                    
                    if (currPayment > prevPayment) {
                        dbReq.updateSuit(key, {paid: currPayment + prevPayment});
                        fetchData('home');
                        break;
                    } else{
                        console.log('somethign went wrong');
                        
                    }
                }
                
            }

        })

    } else{
        alert('this customer does not exist')
        location.hash = '#home'
    }

}

//Adding New Customer
function AddingCustomerControl(){
    //loading View
    AddNewCustomerView();

    let CustomerControl = new Customers();
    document.querySelector('.addNew').addEventListener('submit', (e)=>{
        e.preventDefault();
        let name = document.getElementById('name').value;
        let type = document.getElementById('type').value;
        let contactNum = document.getElementById('contactNum').value;
        const bodyMeasurements = {
            bodyLength: document.getElementById('body-length').value,
            chestWidth: document.getElementById('chest-width').value,
            shoulderWidth: document.getElementById('shoulder-width').value,
            waisteWidth: document.getElementById('waiste-width').value,
            bottomWidth: document.getElementById('bottom-width').value,
            sleeveWidth: document.getElementById('sleeve-width').value
        }

        const newCustomer = {
            name: name,
            type: type,
            contactNumber: contactNum,
            bodyMeasurements: bodyMeasurements
        }

        CustomerControl.addNewCustomer(newCustomer);
        fetchData('home');
    })
}


/* 
//    Form Controller
function passwordAuthentication(){
    document.querySelector('#confirmPassword').addEventListener("keyup", (e)=>{
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirmPassword');
        let confirmPasswordVal = confirmPassword.value;
        let btn = document.querySelector("button[type='submit']");
        let invalidTxt =  document.getElementById('invalid-password');
        
        if (password === confirmPasswordVal) {
            btn.disabled = false;
            confirmPassword.style.border = "inherit";
            invalidTxt.innerText = "";
        } else{
            confirmPassword.style.border = "1px solid red";
            invalidTxt.innerText = "The password is not matching";
            btn.disabled = true;
        }
      });
}

function formEvents(){
    document.querySelector('.userForm').addEventListener('submit', async (e)=>{
        e.preventDefault();
        const customerAuth = new Customers();
        let id = document.querySelector('.userForm').getAttribute('id');
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        if (id === 'registerForm') {
            let name = document.getElementById('name').value;
            const user = {
                name: name,
                email: email,
                password: password
            }
            Register(user);
        } else{
            await customerAuth.login(email, password);
            if (customerAuth.auth) {
                document.querySelector('.container').innerHTML = "";
                load('home');
            }
        }
        document.querySelector('.userForm').reset();
    })
} */