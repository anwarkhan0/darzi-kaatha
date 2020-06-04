import Elements from '../utils/elements';
import insertElement from '../utils/insertElement';

const editProfileView = (data)=>{
  const editProfile = `<h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">Change Record</h3><div class="card mt-4" ><div class="card-body bg-dark">
<form action="#" id="editForm">
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control"  id="name" value="${data.name}">
</div>

<div class="form-group">
  <label for="type">Customer Type:</label>
  <select class="form-control" id="type">
    <option ${ data.type === 'Small' ? 'selected' : null}>Small</option>
    <option ${ data.type === 'Medium' ? 'selected' : null}>Medium</option>
    <option ${ data.type === 'Large' ? 'selected' : null}>Large</option>
  </select>
</div>

<div class="form-group">
  <label for="number">Contact Number</label>
  <input type="tel" class="form-control"  id="contact-number" value="${data.contactNumber}">
</div>

<h3>Body Measurments</h3>
<div class="form-group">
  <label for="body-length">Body Length</label>
  <input type="number" class="form-control"  id="body-length" value="${data.bodyMeasurements.bodyLength}">
</div>

<div class="form-group">
  <label for="chest-width">Chest Width</label>
  <input type="number" class="form-control"  id="chest-width" value="${data.bodyMeasurements.chestWidth}">
</div>

<div class="form-group">
  <label for="shoulder-width">Shoulder Width</label>
  <input type="number" class="form-control"  id="shoulder-width" value="${data.bodyMeasurements.shoulderWidth}">
</div>

<div class="form-group">
  <label for="waist-width">Waist Width</label>
  <input type="number" class="form-control"  id="waiste-width" value="${data.bodyMeasurements.waisteWidth}">
</div>

<div class="form-group">
  <label for="bottom-width">Bottom Width</label>
  <input type="number" class="form-control"  id="bottom-width" value="${data.bodyMeasurements.bottomWidth}">
</div>

<div class="form-group">
  <label for="sleeve-width">Sleeve Width</label>
  <input type="number" class="form-control"  id="sleeve-width" value="${data.bodyMeasurements.sleeveWidth}">
</div>
<button type="submit" class="btn btn-primary btn-lg btn-block rounded-circle" id="save-changes">Save Changes</button>
<a href="#" type="submit" class="btn btn-danger btn-lg btn-block rounded-circle" id="home">Cancel</a>
</form></div></div>`;
    document.querySelector('.container').innerHTML = '';
    insertElement("afterbegin", Elements.container, editProfile);
}

export default editProfileView;
