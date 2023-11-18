/* main imports */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* provider imports */
import ThemeContextProvider from './store/theme-context'

/* component imports */
import App from './App'

/* other imports */
import './antd.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>,
)
