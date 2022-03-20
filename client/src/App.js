import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import DisplayOne from "./components/DisplayOne";
import EditOne from "./components/EditOne";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<DisplayOne />} path="/display/products/:id" />
          <Route element={<EditOne />} path="/edit/products/:id" />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
