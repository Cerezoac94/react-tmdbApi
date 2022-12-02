import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import router from "./router/router"
import GlobalStyled from "./GlobalStyled"
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
