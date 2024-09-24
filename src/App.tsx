import Home from'./components/Home.tsx';
import Flower from './components/Flower.tsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/flower/:flower" element={<Flower />} />
    </Routes>
  );
}

export default App;
