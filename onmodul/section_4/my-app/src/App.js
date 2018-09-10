import React, { Component } from 'react';
import ImageSaya from './components/ImageSaya';
import Axios from 'axios';
import './App.css';

const tonalSays = async (name) => {
  let said = await Axios.get(`http://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`);
  return said;
}

class App extends Component {
  getNums(num){
    let nums = [];

    for (let i = 0; i<num; i++){
      nums.push(Math.floor(Math.random()*1000));
    }

    return nums;
  }
  mapNum() {
    return this.getNums(5).map((num, index) => {
      return (
        <ImageSaya key={index} angka={num} />
      )
    })
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <h1><b>QTemu</b></h1>
            </a>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

            <a className="navbar-item">
              Create Meetup
            </a>
            <a className="navbar-item">
              Experience
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="button is-link">Logout</a>
            </div>
          </div>
        </nav>
        
        <div className="container">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Primary title
                </h1>
                <h2 className="subtitle">
                  Primary subtitle
                </h2>
              </div>
            </div>
          </section>
          <section>
            {
              this.mapNum()
            }
          </section>
        </div>
        
      </div>
    );
  }
}

export default App;
