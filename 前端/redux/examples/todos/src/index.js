import React from 'react'
import { render } from 'react-dom'
import { createStore,bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { setVisibilityFilter } from './actions'

const store = createStore(rootReducer)
console.log(bindActionCreators({value:setVisibilityFilter},store.dispatch));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
