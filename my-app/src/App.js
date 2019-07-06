import React from 'react';

import './App.css';
import OpenAccount from './OpenAccount'
import CheckBalance from './CheckBalance'
import Withdraw from './Withdraw'
import CheckBanksBalance from './CheckBanksBalance'

function App() {
  return (
    <div className="App">
      <OpenAccount/>
      <br/>
      <CheckBalance/>
      <br/>
      <Withdraw/>
      <br/>
      <CheckBanksBalance/>

    </div>
  );
}

export default App;
