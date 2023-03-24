import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


import env from './env'
import reducers from './reducers/reducers'

if (env === 'production') {
  // axios.defaults.baseURL = 'https://website-server.com/'

} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3001'
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

