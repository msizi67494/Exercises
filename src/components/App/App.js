import React, { Component, Fragment } from 'react';
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
  getExercisiesByMuscles(){
      //destructering an array of objects //object entries is the es8 function 
      return Object.entries( this.state.exercises.reduce((exercises, exercise)=>{
        const {muscles} = exercise
        // 
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
        return exercises
      }, {})
    )
  }
  render() {
    const exercises = this.getExercisiesByMuscles()
    return (
      <Fragment>
        <Header />

        <BodyContent exercises={exercises} />

        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
}

export default App;
 