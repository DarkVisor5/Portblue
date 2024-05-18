import React from 'react';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
