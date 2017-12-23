import auth from './auth'
import collections from './collections'
import feedbacks from './feedbacks'
import projects from './projects'
import schools from './schools'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
    auth,
    collections,
    feedbacks,
    projects,
    schools,
    form: formReducer
})
export default rootReducer
