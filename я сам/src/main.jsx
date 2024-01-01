import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import React from 'react'


import './index.css'
import { router } from './router/router.jsx'
import { persister, store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persister}>
          <RouterProvider router={router}/>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
)
