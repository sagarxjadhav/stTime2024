import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
// import Homepage from "./Homepage";
// import SignIn from "./SignIn";
import App from "./App";
import Timetable from "./Timetable";
import About from "./About";
import Contact from "./Contact";


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,

//     children: [
//           {path: "table",
//             element: <Timetable/>
//           },
//           {path: "signIn",
//             element: <SignIn/>
//           }
//         ]
//   }
// ]);

const router = createBrowserRouter([
  {
        path: '/',
        element: <App/>,
  },

  {
    path: 'table',
    element: <Timetable/>,
  },

  {
    path: 'about',
    element: <About/>,
  },

  {
    path:'contact',
    element: <Contact/>
  }



  

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>


);
