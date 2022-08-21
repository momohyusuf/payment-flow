import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './pages/Home';
import SuccessfulPayment from './pages/SuccessfulPayment';

function App() {
  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="successfulPayment" element={<SuccessfulPayment />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
