import axios from 'axios';
import {insertLoader, removeLoader} from '../views/utils/loader';

export class Customers{

    addNewCustomer(data){
        axios.post('https://darzi-65211.firebaseio.com/customers.json', data)
        .then((res)=>{
            alert("customer Added")
        })
        .catch( err => {
            alert('Operation Not Completed! Please Try Again')
        });
    }

    async getCustomers(){
        let req = await axios.get('https://darzi-65211.firebaseio.com/customers.json');
        this.result = req.data;
    }

    updateCustomer(id, customer){
        
        axios.patch('https://darzi-65211.firebaseio.com/customers/' + id + '/.json', {
            ...customer
        })
        .then(response => {
            alert('Changes Saved');
        })
        .catch(err => {
            alert('Operation Not Completed! Please Try Again')
            console.log(err);
        });

    }

    deleteCustomer(id){
        
        axios.delete('https://darzi-65211.firebaseio.com/customers/' + id + '.json')
        .then(response => {
            alert('Customer Deleted Successfully')
        })
        .catch(err => {
            alert('Operation Not Completed! Please Try Again')
            console.log(err);
        });

    }

  /*   async login(eml, pass){
        let req = await axios.get('https://darzi-65211.firebaseio.com/users.json');
        const result = req.data;
        for(let key in result){
            
            if(result[key].email === eml && result[key].password === pass){
                this.auth = true;
                
            } else{
                this.auth = false;
            }
            
        }
        
    } */
}