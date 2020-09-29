import React from 'react';

import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import SearchPage from './Components/SearchPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
      {/*Home page */}
        <Header/>
        
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/search">
            <SearchPage/>
            </Route>
          </Switch>
        
        

        <Footer/>

        
        {/*Header */}
        {/*Banner */}
          {/*Pick date */}
        {/*Option/Cards */}
        {/*Footer */}


      {/*Search */}
      </Router>
    </div>
  );
}

export default App;
