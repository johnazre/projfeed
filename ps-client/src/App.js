// @flow
import React, { Component } from 'react'
import './App.css'

import TopNav from './components/layout/TopNav'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import StudentDashboard from './components/students/StudentDashboard'
import StaffDashboard from './components/staff/StaffDashboard'

import CheckAuth from './components/auth/CheckAuth'

import AddSchool from './components/schools/AddSchool'
import AddProject from './components/projects/AddProject'
import StaffProjectDetails from './components/staff/ProjectDetails'
import StudentProjectDetails from './components/students/ProjectDetails'
import AddCollection from './components/collections/AddCollection'
import CollectionDetails from './components/collections/CollectionDetails'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export class App extends Component<null, null> {
	render() {
		return (
			<Router>
				<div>
					<TopNav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/logout" component={() => <Redirect to="/login" />} />

						{/* Student routes*/}
						<Route
							exact
							path="/students/dashboard"
							component={CheckAuth(StudentDashboard)}
						/>
						<Route
							exact
							path="/students/projects/add"
							component={CheckAuth(AddProject)}
						/>
						<Route
							exact
							path="/students/projects/:id"
							component={CheckAuth(StudentProjectDetails)}
						/>

						{/* Staff routes*/}
						<Route
							exact
							path="/staff/dashboard"
							component={CheckAuth(StaffDashboard)}
						/>
						<Route
              exact
              path="/school/add"
              component={CheckAuth(AddSchool)}
            />
						<Route
							exact
							path="/collections/add"
							component={CheckAuth(AddCollection)}
						/>
						<Route
							exact
							path="/collections/:id"
							component={CheckAuth(CollectionDetails)}
						/>
						<Route
							exact
							path="/collections/:coll_id/projects/:proj_id"
							component={CheckAuth(StaffProjectDetails)}
						/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
