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
import StaffProjectDetails from './components/staff/ProjectDetails'
import StudentProjectDetails from './components/students/ProjectDetails'
import AddCollection from './components/collections/AddCollection'
import CollectionDetails from './components/collections/CollectionDetails'

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

            {/* Student routes*/}
            <Route exact path="/students/dashboard" component={StudentDashboard}/>
            <Route exact path="/students/projects/add" component={AddProject}/>
            <Route exact path="/students/projects/:id" component={StudentProjectDetails}/>

            {/* Staff routes*/}
            <Route exact path="/staff/dashboard" component={StaffDashboard}/>
            <Route exact path="/school/add" component={AddSchool}/>
            <Route exact path="/collections/add" component={AddCollection}/>
            <Route exact path="/collections/:id" component={CollectionDetails}/>
            <Route exact path="/collections/:coll_id/projects/:proj_id" component={StaffProjectDetails}/>




          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
