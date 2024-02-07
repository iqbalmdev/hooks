import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Home';
import UseCallBackComp from '../Pages/useCallBack';
import UseRefComp from "../Pages/useRef"
import Session from "../Pages/SessionStorage"
import Cookies from "../Pages/Cookies"
import Circle from "../Pages/circle"
import Hoc from "../Pages/Hoc"
import UseMemo from "../Pages/useMemo"
import Clock from "../Pages/Clock"
export default function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useCallback" element={<UseCallBackComp />} />
        <Route path="/useRef" element={<UseRefComp />} />
        <Route path="/session" element={<Session />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/circle" element={<Circle />} />
        <Route path='hoc' element={<Hoc/>}/>
        <Route path='memo' element={<UseMemo/>}/>
        <Route path='clock' element={<Clock/>}/>
      </Routes>
    </Router>
  );
}
