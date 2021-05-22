import React, { useEffect } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {

  useEffect(() => {

  }, [])


  return (
    <div className="app">

      <nav className="navbar">
        <span>Dev Search</span>
        <div className="navbar-search">
          <Form >
            <Form.Group>
              <Form.Input placeholder='GitHub User' name='name' />
              <Form.Button content='Search' />
            </Form.Group>
          </Form>
        </div>
      </nav>

      <div className="container">
        <div className="container-card">
          <div className="container-card-img">
            <img src="https://avatars.githubusercontent.com/u/66084938?s=400&u=737e5fdb4f774c73fdf6f6b5d3cdf4d877170945&v=4" />
          </div>

          <div className="container-card-all">
          <div className="container-card-intro">
            <h2>Juliano Vendramini Codognos</h2>
            <p>Buscando exp... bla bla bla</p>
          </div>
          <div className="container-card-infos">
            <div className="container-card-infos-repos">
              <p>7 repositorios</p>
            </div>
            <div className="container-card-infos-followers">
              <span>2 followers</span>
            </div>
            <div className="container-card-infos-following">
              <span>3 following</span>
            </div>
          </div>
        </div>
          </div>
          
      </div>

      <div className="footer">
        <footer>Feito por Juliano Vendramini</footer>
      </div>

    </div>
  );
}

export default App;
