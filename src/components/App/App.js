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
    category: 'arms'
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
      category
    })
  }
  render() {
    const exercises = this.getExercisiesByMuscles(), 
    {category} = this.state
    return (
      <Fragment>
        <Header />

        <BodyContent 
        category={category}
        exercises={exercises} />

        <Footer 
       category={category}
        muscles={muscles}
        onSelect={this.handleChangeCategorySelected} />
      </Fragment>
    );
  }
}

export default App;
 