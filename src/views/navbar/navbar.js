
const navbar = `
<nav class="navbar navbar-expand-sm bg-light justify-content-center">
  <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link text-light font-weight-bold" style="font-size: 2rem;" href="#home" id="home">Darzi Kaatha</a>
    </li>
  </ul>
</nav>`;

const navbarView = ()=>{
  const container = document.querySelector('.container');
  container.insertAdjacentHTML("beforebegin", navbar);
}

export default navbarView;