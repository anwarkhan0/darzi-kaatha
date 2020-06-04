import Elements from '../utils/elements';
import insertElement from '../utils/insertElement';
const addNewForm = `<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">Add Your New Customer Details</h3><div class="card mt-4" ><div class="card-body bg-dark">
<form action="#" class="addNew">
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" placeholder="Enter Person Name" id="name" required>
</div>

<div class="form-group">
  <label for="type">Customer Type:</label>
  <select class="form-control" id="type">
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
  </select>
</div>

<div class="form-group">
  <label for="number">Contact Number</label>
  <input type="tel" class="form-control" placeholder="Enter Person Contact Number" id="contactNum" required>
</div>

<h3>Body Measurments</h3>
<div class="form-group">
  <label for="body-length">Body Length</label>
  <input type="number" class="form-control" placeholder="Body Length" id="body-length" required>
</div>

<div class="form-group">
  <label for="chest-width">Chest Width</label>
  <input type="number" class="form-control" placeholder="Chest Width" id="chest-width" required>
</div>

<div class="form-group">
  <label for="shoulder-width">Shoulder Width</label>
  <input type="number" class="form-control" placeholder="Shoulder Width" id="shoulder-width" required>
</div>

<div class="form-group">
  <label for="waist-width">Waist Width</label>
  <input type="number" class="form-control" placeholder="Waiste Width" id="waiste-width" required>
</div>

<div class="form-group">
  <label for="bottom-width">Bottom Width</label>
  <input type="number" class="form-control" placeholder="Bottom Width" id="bottom-width" required>
</div>

<div class="form-group">
  <label for="sleeve-width">Sleeve Width</label>
  <input type="number" class="form-control" placeholder="Sleeve Width" id="sleeve-width" required>
</div>
<button type="submit" class="btn btn-primary btn-lg btn-block rounded-circle">Add</button>
</form></div></div>`;

const addNew = ()=>{
    insertElement("afterbegin", Elements.container, addNewForm);
}

export default addNew;