import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import SearchPage from './Pages/SearchPage';
import Event from './Pages/Event';
import Events from './Pages/Events';
import Newsletter from './component/Newsletter';
import LoginTest from './Pages/LoginTest';
import RegisterTest from './Pages/RegisterTest';
import SignUp2 from './Pages/SignUp2';

function App() {
  return (
<Router>
    <div className="App">
  
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/signup' element={< SignUp/>}></Route>
    <Route exact path='/signup2' element={< SignUp2/>}></Route>
    <Route exact path='/signin' element={< SignIn/>}></Route>
    <Route exact path='/search' element={< SearchPage />}></Route>
    <Route exact path='/newsletter' element={< Newsletter />}></Route>
    <Route exact path='/events' element={< Events />}></Route>
    <Route exact path= "/event/:id" element={< Event />}></Route>
    <Route exact path= "logintest" element={< LoginTest />}></Route>
    <Route exact path= "registertest" element={< RegisterTest />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
