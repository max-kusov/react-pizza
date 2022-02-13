import { combineReducers } from 'redux'
import filtersRedusers from './filters'
import pizzasRedusers from './pizzas'

const rootReducer = combineReducers({
  filters: filtersRedusers,
  pizzas: pizzasRedusers
})

export default rootReducer
