import React, { Component } from 'react';
import './App.css';

import TopNav from './components/layout/TopNav'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import StudentDashboard from './components/students/StudentDashboard'
import StaffDashboard from './components/staff/StaffDashboard'

import AddSchool from './components/schools/AddSchool'
import AddProject from './components/projects/AddProject'
import AddCollection from './components/collections/AddCollection'
import AddFeedback from './components/feedback/AddFeedback'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <TopNav />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/student/dashboard" component={StudentDashboard}/>
            <Route exact path="/staff/dashboard" component={StaffDashboard}/>

            <Route exact path="/school/add" component={AddSchool}/>

            <Route exact path="/collection/add" component={AddCollection}/>

            <Route exact path="/project/add" component={AddProject}/>

            <Route exact path="/project/:id" component={AddFeedback}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(todoActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
