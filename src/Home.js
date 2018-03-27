import React, { Component } from 'react';
import './home.css';
import data from "./Data.json"
import {Link} from 'react-router-dom'

console.log(data)
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <h2>My Peeps</h2>
          </div>
          <ul>
          {data.map(contact => (
            <li key={contact.id}>
              <div><Link to={`/contact/${contact.id}`}><img src ={contact.picture.thumbnail} /><span> {contact.name.first} {contact.name.last}</span></Link></div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
