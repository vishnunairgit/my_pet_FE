import React from "react";
import { Navigate, Outlet, } from "react-router-dom";

// export function UserAuth () {
//   const token = localStorage.getItem("token");
//   return (
//     token ? <Outlet /> : <Navigate to="/" />
//     )
// }
export function UserAuth() {
    const token = localStorage.getItem("token");
    // Check if token exists and is not expired
    return token ? <Outlet /> : <Navigate to="/" />;
  }
  

// export function AdminAuth() {
//     const token = localStorage.getItem('token');
//     const user=JSON.parse(localStorage.getItem('user'))
//     return (
//       (token &&  user.role === 1) ? <Outlet/> : <Navigate to="/" />
//       )
//   }

export function AdminAuth() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    // Check if token exists, user exists, and user role is admin
    return (token && user && user.role === 1) ? <Outlet /> : <Navigate to="/" />;
  }

  export function LoginAuth() {
    const token = localStorage.getItem('token');
    // const user=JSON.parse(localStorage.getItem('user'))
    return (
      token ? <Navigate to ='/home'/>:<Outlet /> 
      )
  }


// export function LoginAuth() {
//     const token = localStorage.getItem('token');
//     // Redirect to home if token exists, otherwise allow access
//     return token ? <Navigate to="/home" /> : <Outlet />;
//   }