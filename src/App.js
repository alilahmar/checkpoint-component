import React from 'react';
import logo from './logo.svg';
import './App.css';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import Image from './component/profile/ProfilPhoto';
import "./comp.css";

function App() {
  return (
    <div className="App">
      
       <FullName />
       <Image />
       <Address />
       
      
    </div>
  );
}

export default App;
