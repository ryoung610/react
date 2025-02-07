import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import TestPay from './component/TestPay'          


function App() {
  
  return (

  <div className='homepage'>
    <h1>Hello</h1>
    <TestPay />
    </div>
  )   
}

export default App
