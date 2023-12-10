import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import colorsArray from './colorsArray'
import ColorForm from './ColorForm';
import NotFound from './NotFound';

function App() {
  const [colorsA, setColorsA] = useState(colorsArray);
  const addColor = (newColor) => {
    setColorsA((colorsA)=> [...colorsA])
    colorsA.unshift(newColor);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colorsA} />}/>
        <Route path="/colors/:color" element={<ColorDetail colors={colorsArray}/>}/>
        <Route path="/colors/new" element={<ColorForm addColor={addColor} setColorsA={setColorsA}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
