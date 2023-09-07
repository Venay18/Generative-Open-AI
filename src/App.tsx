import {Component} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/Signup";
import LetsChat from "./components/LetsChat"

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";



const App = () => (
 <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/letschat" element={<LetsChat/>} />
      {/*<ProtectedRoute exact path="/Signup" component={Signup} />
      <ProtectedRoute exact path="/letsChat" component={letsChat} />
      import Signup from "./components/Signup";
import letsChat  from "./components/letsChat";
import NotFound from "./components/NotFound";*/}
      
      
    </Routes>
  
);

export default App;