import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <Router>
     <Routes>
     <Route path="/loginapp" element={ <Login setIsLoggedIn={setIsLoggedIn} /> } />
     
      </Routes>

 

    </Router>
   
  );
}

export default App;