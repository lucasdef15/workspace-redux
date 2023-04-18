export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  // console.log('dispatching', action)
  // let result = next(action)
  // console.log('next state', storeAPI.getState())
  // return result
  // const originalResult = next(action)
  // // Ignore the original result, return something else
  // return 'Hello!'
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }
  return next(action)
}
