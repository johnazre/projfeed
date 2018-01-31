import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import Store from './store'
import 'bootswatch/dist/united/bootstrap.min.css'
import './index.css'

import { getCollections } from './actions/collections'
import { getFeedbacks } from './actions/feedbacks'
import { getProjects } from './actions/projects'
import { getSchools } from './actions/schools'
import { isAuthed } from './actions/auth'

const StoreInstance = Store()

StoreInstance.dispatch(getCollections())
StoreInstance.dispatch(getFeedbacks())
StoreInstance.dispatch(getProjects())
StoreInstance.dispatch(getSchools())
StoreInstance.dispatch(isAuthed())

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
