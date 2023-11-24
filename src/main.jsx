import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/Routers'
import AuthProvider from './firebase/AuthProvider';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
        <RouterProvider router={routers}/>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
