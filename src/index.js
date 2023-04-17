import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'

import './api/server'

console.log('Initial State: ', store.getState())

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )


// unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
