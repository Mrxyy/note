import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})
console.log(todoApp)
// 将两个 reducer 合并成一个 并以模块方式展现 store {}
export default todoApp