import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/global.scss'
import App from './App'

// 리덕스
import { Provider } from 'react-redux'
import reducer from './reducer'
import { createStoreHook } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// store 생성(reducer,devtools 연결)
const store = createStoreHook(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
