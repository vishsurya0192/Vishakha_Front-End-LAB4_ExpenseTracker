import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import ShowData from './components/ShowList';

function App() {
  return (
    <div className="App">
     
<Router>
<Routes>
  <Route path='/add' element={<ExpenseTracker onClose ={()=>{}} onTrue ={()=>{}}/>}> </Route>
  <Route path='/home' element={<ShowData/>}> </Route>
</Routes>

</Router>

    </div>
  );
}

export default App;