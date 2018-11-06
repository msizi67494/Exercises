import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import BodyContent from '../BodyContent';
import {muscles, exercises} from '../store.js';

// muscles are going to be static and exercises
// are going to be changing so we have to create a state for them
class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
  }

  // method to return exercies
  getExercisiesByMuscles(){
      //destructering an array of objects //object entries is the es8 function its returns a key and value
      return Object.entries( this.state.exercises.reduce((exercises, exercise)=>{
         const {muscles} = exercise //  destructuring exercise / retrieving muscle from exercise object
        // 
        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
        return exercises
      }, {})
    )
  }
  // handle the change in footer category
  handleChangeCategorySelected = category => {
    this.setState({
      category,
      
    })
  }
  handleExerciseSelected = id =>{
    this.setState(({exercises}) => ({
      exercise: exercises.find((ex => ex.id === id)) 
    }));
  }

  render() {
    const exercises = this.getExercisiesByMuscles(), 
    {category, exercise} = this.state
    return (
      <Fragment>
        <Header muscles={muscles} />

        <BodyContent 
        exercise={exercise}
        category={category}
        exercises={exercises}
        onSelect={this.handleExerciseSelected}
         />

        <Footer 
       category={category}
        muscles={muscles}
        onSelect={this.handleChangeCategorySelected} />
      </Fragment>
    );
  }
}

export default App;
 