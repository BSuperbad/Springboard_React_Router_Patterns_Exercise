import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import DogList from './DogList';
import dogsData from './data/dogs';
import DogDetails from './DogDetails';
import NotFound from './NotFound';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={dogsData}/>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogsData}/>}/>
          <Route path="/dogs/:name" element={<DogDetails dogs={dogsData}/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
