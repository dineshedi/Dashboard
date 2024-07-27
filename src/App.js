import React from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import {Routes,Route} from "react-router-dom"
import Products from './Component/Products';
import DashBoard from "./Component/DashBoard"


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<DashBoard/>} />
        <Route path='/product' element={<Products/>} />
      </Route>
      
    </Routes>
  )
}

export default App;
