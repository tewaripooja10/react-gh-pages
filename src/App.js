import React from 'react';
import logo from './img/iaioclogo.png';
import './App.css';
import './css/bootstrap.css';
function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logo} width="auto" height="30" alt="" loading="lazy"></img>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
             {/*} <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>*/}
            </ul>
          </div>
        </nav>
        <a class="navbar-brand" href="#">
            <img src={logo} width="auto" height="500" alt="" loading="lazy"></img>
          </a>
        <p>
          Welcome!
        </p>
    </div>
  );
}

export default App;