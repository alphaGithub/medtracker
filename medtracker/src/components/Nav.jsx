import react from 'react';

function Nav(){
    return (<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Medtracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
    </ul>
        <ul class="navbar-nav">
        <li class="nav-item">
        <button type="button" class="btn btn-success">Login</button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-success">SignUp</button>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>);
}

export default Nav;