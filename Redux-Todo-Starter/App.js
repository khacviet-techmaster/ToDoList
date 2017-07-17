import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import AddView from './components/AddView';
import CounterContainer from './containers/CounterContainer.js';
import TaskFlatListContainer from './containers/TaskFlatListContainer.js';
import AddViewContainer from './containers/AddViewContainer.js';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

// state
let appState = {
  data : [
          { title: 'Go to the office', isFinished: true },
          { title: 'Prepare tasks for today', isFinished: false },
          { title: 'Team meeting', isFinished: false },
          { title: 'Commit tasks changed', isFinished: false },
        ]
}

// reducer

const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data
  switch(action.type) {
    case 'ADD':
      const newTask = { title: action.taskName, isFinished: false}
      return { ...state, data:[ ...state.data, newTask]}

    case 'FINISH':
      newTaskList[action.atIndex].isFinished = true;
      return { ...state, data: newTaskList};

    case 'DELETE':
      newTaskList = newTaskList.filter(( item, i) => i !== action.atIndex);
                    
      return { ...state, data: newTaskList};
    }

  return state;
}

const numberReducer = (state = { number: 1}, action) => {

    switch(action.type) {
      case 'ADD_NUMBER':
        return { number: state.number + 1 }

      case 'SUB_NUMBER':
        return { number: state.number - 1 }
    }

    return state;
}

// store

const store = createStore(
  combineReducers({
    number: numberReducer,
    taskList: taskListReducer,
  })
);





export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  onAddNewTask = (taskName) => {
    const newTask = { title: taskName, isFinished: false }
    const newTaskList = [ ...this.state.data, newTask ]

    this.setState({ data: newTaskList });
  }

  // onFinishedItem = (index) => {
  //   let newTaskList = this.state.data;
  //   newTaskList[index].isFinished = true; 
  //   this.setState({ data: newTaskList });
  // }

  // onDeleteItem = (index) => {
  //   let newTaskList = this.state.data.filter( (item, i) => i != index );
  //   this.setState({ data: newTaskList });
  // }

  render() {
    return (
      <Provider store= {store} >
      <View style={ styles.container }>
        <AddViewContainer />
        <CounterContainer />
        <TaskFlatListContainer/>
      </View>     
      </Provider> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});