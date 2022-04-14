import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    <Router>
      {!user ? (
       <Login />
      ) : (
        <>
      <Header />
        <div className='app_body'>
          <Sidebar />

          <Routes>
            <Route path='/:roomId' element={<Chat />} >
            </Route>
            <Route path='/' element={<h1>WELCOME</h1>} >
            </Route>
          </Routes>
        </div>
        </>
        )}
    </Router>
    </div>
  );
}

export default App;
