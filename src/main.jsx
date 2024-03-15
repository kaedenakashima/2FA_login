import React, {StrictMode} from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import {createTheme, ThemeProvider} from '@mui/material/styles'
import App, {router} from './App'
import "./index.css"

import { BrowserRouter, RouterProvider } from "react-router-dom"
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
const theme = createTheme({
  palette: {
    primary:{main:'#3a34d2'}
  }
})
//ReactDOM.createRoot(document.getElementById("root"))
//.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)