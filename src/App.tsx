import {Component} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import UserLogin from "./components/UserLogin";
import Signup from "./components/Signup";
import LetsChat from "./components/LetsChat"

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";



const App = () => (
 <Routes>
      <Route path="/userlogin" element={<UserLogin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/letschat" element={<LetsChat/>} />
   
      
      
    </Routes>
  
);

export default App;