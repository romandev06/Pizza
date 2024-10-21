import React from 'react'

import { createRoot } from 'react-dom/client'
import App from './App'
import './scss/App.css'

import { BrowserRouter as Router } from "react-router-dom"

import { store } from './redux/store'
import { Provider } from 'react-redux'

const rootElem = document.getElementById('root')

if (rootElem) {
    createRoot(rootElem).render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.StrictMode>
    )
}
