import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderMatches from './TinderMatches';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<TinderMatches />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/chats/:person' element={<ChatScreen />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
