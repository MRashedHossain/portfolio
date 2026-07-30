import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Always open at the top (Hero) on load/refresh instead of restoring
// the previous scroll position.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
window.addEventListener('load', () => {
  // Ignore any leftover #hash so refresh starts clean at the top.
  window.scrollTo(0, 0)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
