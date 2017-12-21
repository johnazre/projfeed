import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';

import { getCollections } from './actions/collections'
import { getFeedbacks } from './actions/feedbacks'
import { getProjects } from './actions/projects'
import { getSchools } from './actions/schools'

const StoreInstance = Store();

StoreInstance.dispatch(getCollections())
StoreInstance.dispatch(getFeedbacks())
StoreInstance.dispatch(getProjects())
StoreInstance.dispatch(getSchools())

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
