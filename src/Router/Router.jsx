import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Home';
import UseCallBackComp from '../Pages/useCallBack';

export default function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useCallback" element={<UseCallBackComp />} />
      </Routes>
    </Router>
  );
}
