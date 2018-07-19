import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import AppReducer from './src/reducers'
import Home from './src/Home'

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App
