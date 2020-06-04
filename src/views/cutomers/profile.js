import Elements from '../utils/elements';
import insertElement from '../utils/insertElement';

const profileView = (customer)=>{
    const profile = `<div class="row">
<div class="col-lg-8 offset-lg-2">
<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4 text-capitalize">${customer.name}</h3>
    <div id="personInfo">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                <span class="font-weight-bolder">TOTAL SUITS: ${customer.suits.totalSuits}</span><span class="badge badge-success badge-pill">completed ${customer.suits.completed}</span><span class="badge badge-info badge-pill">working ${customer.suits.working}</span><span class="badge badge-warning badge-pill">waiting ${customer.suits.waiting}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                Contact Number: ${customer.contactNumber}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                Total Cost: ${customer.suits.totalCost}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                Paid: ${customer.suits.paid}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                Unpaid: ${customer.suits.unpaid}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                <!-- Button to Open the Modal -->
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#suitsModal">Add New Suits</button>
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#workModal">Edit Work Details</button>
                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#paymentModal">Payment Details</button>
            </li>
            
                <!-- Modal for suits changes -->
                <div class="modal fade text-dark" id="suitsModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Suit</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Amount: <input type="number" id="suits-amount" />
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Enter Cost: <input type="number" id="suits-cost" />
                            </li>
                            <input type="hidden" value="${customer.id}" id="customer-id"/>
                        </ul>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="add-suits">Save</button>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Modal for Work progress -->
                <div class="modal fade text-dark" id="workModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Work Progress</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Waiting: ${customer.suits.waiting}
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Working: <input type="number" id="work" value="${customer.suits.working}"/>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Completed Suits: ${customer.suits.completed}
                            </li>
                        </ul>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <input type="hidden" value="${customer.id}" id="customer-id"/>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="work-progress">Save</button>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Modal for Payment progress -->
                <div class="modal fade text-dark" id="paymentModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Payment Progress</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Total Cost: ${customer.suits.totalCost}
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                paid: <input type="number" id="paid" value="${customer.suits.paid}"/>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark"> 
                                Unpaid: ${customer.suits.unpaid}
                            </li>
                        </ul>
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <input type="hidden" value="${customer.id}" id="customer-id"/>
                        <button type="button" class="btn btn-success" data-dismiss="modal" id="payment-progress">Save</button>
                    </div>
                    </div>
                </div>
                </div>


            
            
        </ul>
    </div>
    <table class="table table-dark table-hover table-striped">
    <thead>
    <tr>
        <th colspan="2" style="text-align: center">Body Measurments</th>
    </tr>
    </thead>
    <tbody>
    <tr class="table-dark text-dark font-weight-bolder">
        <td>Customer Type</td>
        <td>${customer.type}</td>
    </tr>
    <tr>
        <td>Body Length</td>
        <td>${customer.bodyMeasurements.bodyLength}</td>
    </tr>
    <tr>
        <td>Chest width</td>
        <td>${customer.bodyMeasurements.chestWidth}</td>
    </tr>
    <tr>
        <td>Shoulder width</td>
        <td>${customer.bodyMeasurements.shoulderWidth}</td>
    </tr>
    <tr>
        <td>waiste width</td>
        <td>${customer.bodyMeasurements.waisteWidth}</td>
    </tr>
    <tr>
        <td>bottom width</td>
        <td>${customer.bodyMeasurements.bottomWidth}</td>
    </tr>
    <tr>
        <td>Sleeve width</td>
        <td>${customer.bodyMeasurements.sleeveWidth}</td>
    </tr>
    </tbody>
</table>
<button  class="btn btn-info btn-large rounded-circle btn-block" id="editProfile">Edit Profile<span><i class="fas fa-pen-alt"></i></span></button>
<button  class="btn btn-danger btn-large rounded-circle btn-block" id="delete">Delete Customer<span><i class="fa fa-trash"></i></span></button>
</div>
</div>`;

    insertElement("afterbegin", Elements.container, profile);
}

export default profileView;
