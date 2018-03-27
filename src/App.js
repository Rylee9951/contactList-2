import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from "./Home"
import Contact from "./Contact"

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Switch>
      			<Route exact path="/" component={Home}/>
      			<Route path="/contact/:id" component={Contact} />
      		</Switch>
      	</div>
      </Router>
    )
  }
}

export default App