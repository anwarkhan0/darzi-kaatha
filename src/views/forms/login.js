import Elements from '../utils/elements';
const loginForm = `<div class="row"><div class="col-lg-4 offset-lg-4"><h3 class="bg-dark text-center font-weight-bolder rounded-circle mt-4">Welcome Sir</h3><div class="card"><div class="card-body bg-secondary"><form action="#" class="userForm" id="loginForm">
<div class="form-group">
  <label for="uname">Username:</label>
  <input type="text" class="form-control" id="email" placeholder="Enter Your Email" name="uname" required>
  <div class="valid-feedback">Valid.</div>
  <div class="invalid-feedback">Please fill out this field.</div>
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="password" placeholder="Enter password" name="pswd" required>
  <div class="valid-feedback">Valid.</div>
  <div class="invalid-feedback">Please fill out this field.</div>
</div>

<button type="submit" class="btn btn-dark btn-lg btn-block">Login</button> OR <a href="#register" id="register" style="color:white; font-weight: bold">Register</a>
</form></div></div></div></div>`;

const loginView = ()=>{
    const container = document.querySelector(Elements.container);
    container.insertAdjacentHTML("afterbegin", loginForm);
}

export default loginView;