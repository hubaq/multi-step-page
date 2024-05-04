/* eslint-disable no-unused-vars */
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import SelectPlan from './Pages/SelectPlan/SelectPlan';
import PickAddOns from './Pages/PickAddOns/PickAddOns';
import Summary from './Pages/Summary/Summary';
import Finishing from './Pages/Fininshing/Finishing';
const App = () => {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/select' element={<SelectPlan />} />
          <Route path='/pick' element={<PickAddOns />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/last' element={<Finishing />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
