import Elements from '../utils/elements';
import insertElement from '../utils/insertElement';


const customersList = (part, data)=>{
  
  let Allcustomers = `<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">All Customers</h3><ul class="list-group">`;
  data.map( (e, i) => {
    Allcustomers = Allcustomers + `
      <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-capitalize">
        <input type="hidden" value="${e.name}" id="${i}"/>
        ${e.name} <button class="btn text-light" id=${ 'button' + i}>Click to View Profile</button>
      </li>
    `;
  });
  Allcustomers = Allcustomers + '</ul>';
  
let pendingPayment = `<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">Pending Customers</h3>
<table class="table table-dark table-striped mt-4">
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="2">Details</th>
    </tr>
  </thead>
  <tbody>`;
    data.map( el => {
      
      pendingPayment = pendingPayment + `<tr>
      <td class="text-capitalize">${el.name}</td>
      <td>Payment: <span class="badge badge-pill badge-info">${el.paid}RS</span></td>
      <td>Remaining: <span class="badge badge-pill badge-info">${Number(el.totalCost) - Number(el.paid)}RS</span></td>
    </tr>`;
    });
  pendingPayment = pendingPayment + `</tbody></table>`;

let paidCustomers = `<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">Paid Customers</h3>
<ul class="list-group">`;
    data.map(el =>{
      paidCustomers = paidCustomers + `<li class="list-group-item d-flex justify-content-between align-items-center bg-dark">
      ${el.name}<span class="badge badge-pill badge-info">${el.paid}RS</span></li>`;
    })
paidCustomers = paidCustomers + `</ul>`;

pendingPayment = pendingPayment + '</ul>';

  if (part === 'listAll') {
    insertElement("afterbegin", Elements.container, Allcustomers);
  }else if(part === 'pending'){
    insertElement("afterbegin", Elements.container, pendingPayment);
  }else{
    insertElement("afterbegin", Elements.container, paidCustomers);
  }
    
}

export default customersList;