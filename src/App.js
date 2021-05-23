import React, { useEffect, useState } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [location, setLocation] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [publicRepos, setPublicRepos] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/JulianoVendramini')
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const setData = ({name, avatar_url, location, followers, following, public_repos}) => {
    setName(name);
    setAvatar(avatar_url);
    setLocation(location);
    setFollowers(followers);
    setFollowing(following);
    setPublicRepos(public_repos);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message){
        setError(data.message)
      }else{
        setData(data);
        setError(null);
      }
    })
  };


  return (
    <div className="app">

      <nav className="navbar">
        <a href="/"><span>Dev Search</span></a>
        <div className="navbar-search">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input placeholder='GitHub User' name='git user' onChange={handleSearch}/>
              <Form.Button content='Search'/>
            </Form.Group>
          </Form>
        </div>
      </nav>
      {error ? (<div className="error-page"><h1>{error}</h1></div>) : (
        <div className="container">
        <div className="container-card">
          <div className="container-card-img">
            <img src={avatar} />
          </div>

          <div className="container-card-all">
          <div className="container-card-intro">
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
          <div className="container-card-infos">
            <div className="container-card-infos-repos">
              <p>{publicRepos}  repos</p>
            </div>
            <div className="container-card-infos-followers">
              <p>{followers}  followers</p>
            </div>
            <div className="container-card-infos-following">
              <p>{following}   following</p>
            </div>
          </div>
        </div>
          </div>
      </div>
      )}
     
      <div className="footer">
        <footer>Feito por Juliano Vendramini</footer>
      </div>

    </div>
  );
}

export default App;
