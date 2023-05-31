import './App.css';
import  ReactDOM  from 'react-dom';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes, Switch} from 'react-router';
import Home from './components/home';
import combine from './components/combine';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={combine} />
      </Switch>
    </Router>
  );
}

export default App;
