
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import SearchPage from './Pages/SearchPage';
import AllEventsCards from './Pages/AllEventsCards';
import Event from './Pages/Event';



function App() {
  return (
<Router>
    <div className="App">
  
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/signup' element={< SignUp/>}></Route>
    <Route exact path='/signin' element={< SignIn/>}></Route>
    <Route exact path='/search' element={< SearchPage />}></Route>
    <Route exact path='/allevents' element={< AllEventsCards />}></Route>
    <Route exact path='/event' element={< Event />}></Route>

    </Routes>
    </div>
    </Router>
  );
}

export default App;
