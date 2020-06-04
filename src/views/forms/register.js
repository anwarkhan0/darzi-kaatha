import Elements from '../utils/elements';
import insertElement from '../utils/insertElement';
const registerForm = `<div class="row"><div class="col-lg-4 offset-lg-4"><h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4 p-3">Register To Use Darzi</h3><div class="card"><div class="card-body bg-secondary"><form class="userForm" id="registerForm" action="#">
<div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" placeholder="Enter your Name" id="name" required>
  </div>
<div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email" required>
  </div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="password" placeholder="Enter password" required>
</div>
<div class="form-group">
  <label for="pwd">Re-Type Password:</label>
  <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required>
  <div class="text-danger small bg-dark" id="invalid-password"></div>
</div>

<button type="submit" class="btn btn-dark btn-lg btn-block" disabled>Submit</button>
</form></div></div></div></div>`;


const registerView = ()=>{
  insertElement("afterbegin", Elements.container, registerForm)
}

export default registerView;