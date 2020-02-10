import React, { Component } from 'react';

import './App.css';
import {Route,Switch} from 'react-router-dom'
import CardInside from './components/cardinside';
import MainScreen from './components/mainscreen';
import Favorites from './components/favorites';


class App extends Component{
  
  render(){
    return(
      <div>
        <Switch>
          <Route path="/" exact component={MainScreen}></Route>
          <Route path='/card/:id' component={CardInside}></Route>
          <Route path='/favorites' component={Favorites}></Route>
        </Switch>      
      </div>
    )
  }
}


export default App;
