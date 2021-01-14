import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/login/Login';
import RootRoutes from './routers/RootRouting';

function App() {
  return (
    <div className="App">
      <RootRoutes/>
    </div>
  );
}

export default App;
