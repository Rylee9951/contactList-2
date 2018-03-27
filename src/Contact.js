import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import data from "./Data.json"
import './home.css';
import 'font-awesome/css/font-awesome.min.css';


class Contact extends Component {


  render() {
    return (
      <div>
      	{data.filter(contact => {
      		if(contact.id == this.props.match.params.id){
      			return true
      		}else{
      			return false
      		}
      		}).map(user =>(
      		<div className="wrapper" >
      			<div className="header2"><Link to="/"><p>&lArr;</p></Link><img src={user.picture.large}/></div>
      			<div className="info">
      				<p><i className="fa fa-user"></i>    {user.name.first} {user.name.last}</p>
      				<p><i className="fa fa-envelope"></i>    {user.email}</p>
      				<p><i className="fa fa-phone"></i>    {user.phone}</p>
      				<p><i className="fa fa-map-marker"></i>    {user.location.state}, {user.location.city}</p>
      			</div>
      		</div>
      	))}
      </div>
    )
  }
}

export default Contact