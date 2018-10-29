import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import BodyContent from '../BodyContent';
import {muscles, exercises} from '../store.js'

class App extends Component {
  state = {
    exercises
  }

  // method to return exercies
  getExercisies(){
    return this.state.exercises
  }
  render() {
    console.log(this.getExercisies())
    return (
      <div className="App">
        <Header />
        <BodyContent />
        <Footer muscles={muscles}/>
      </div>
    );
  }
}

export default App;
