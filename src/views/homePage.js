import Elements from './utils/elements';
import insertElement from './utils/insertElement';

const homePage = (data)=>{
  const searchBlock  = `<div class="row"><div class=" col-md-6 offset-md-3 col-sm-12 offset-sm-none"><div class="search-container">          
  <!-- Another variation with a button -->
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search for Customer" id="searchVal">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button" id="searchBtn">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  </div>
  </div></div>`;

  const stats = `<div class="card-deck font-weight-bolder">
  <div class="card bg-info">
    <div class="card-body text-center">
      <a href="#addnew" style="color: white;text-decoration:none" class="card-text"><i class="fas fa-plus" style="font-size: 50px;"></i></br>Add New Customer</a>
    </div>
  </div>
  <div class="card bg-info">
    <div class="card-body text-center">
      <a href="#CustomerList" style="color: white;text-decoration:none" class="card-text"><i class="fas fa-users" style="font-size: 50px;"></i></br>Total Customers</br>${data.totalCustomers}</a>
    </div>
  </div>

  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text"><i class="fas fa-cut" style="font-size: 50px"></i></br>Suits Ordered</br> ${data.totalSuits}</p>
    </div>
  </div>
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text"><i class="fas fa-wrench" style="font-size: 50px"></i></br>Working</br> ${data.working}</p>
    </div>
  </div>
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text"><i class="fas fa-clock" style="font-size: 50px"></i></br>Waiting</br> ${data.waiting}</p>
    </div>
  </div>
  <div class="card bg-success">
    <div class="card-body text-center">
      <p class="card-text"><i class="fas fa-check-square" style="font-size: 50px"></i></br>Completed</br> ${data.completed}</p>
    </div>
  </div>
  </div>
  `;
  const customerData = `<div class="row"><div class="col-md-4"><div class="card bg-secondary mt-3 font-weight-bolder">
  <div class="card-header text-center">Customer Types</div>
  <div class="card-body"><ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary">
    Large
    <span class="badge badge-info badge-pill">${data.large}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary">
    Medium
    <span class="badge badge-info badge-pill">${data.medium}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary">
    Small
    <span class="badge badge-info badge-pill">${data.small}</span>
  </li>
  </ul></div>
  </div></div>
  <div class="col-md-4">
  <div class="card bg-secondary mt-3 font-weight-bolder">
  <div class="card-header text-center">Payment Details</div>
  <div class="card-body"><ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary">
    <a href="#pendingPayment" id="noPayment" class="text-white">Pending Payment</a>
    <span class="badge badge-info badge-pill">${data.paymentPending}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary">
    <a href="#paid" id="pending" class="text-white">Payment Done</a>
    <span class="badge badge-info badge-pill">${data.paymentDone}</span>
  </li>
  </ul></div>
  </div>
  </div>
  </div>`;
    let element =   searchBlock + stats + customerData;
    insertElement("afterbegin", Elements.container, element);
}

export default homePage;