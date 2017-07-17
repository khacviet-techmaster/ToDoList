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

import {connect} from 'react-redux';
import AddView from '../components/AddView.js'

class AddViewContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
const onAddNewTask = this.props.onAddNewTask;

    return (

        <AddView newTaskName= {onAddNewTask} />
    );
  }
}


const styles = StyleSheet.create({

  addView: {
    ...Platform.select({
      ios: {
        height: 94,
        paddingTop: 20,
      },
      android: {
        height: 74,
      }  
    }),
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2
  },

  input : {
    height: 30, 
    padding: 5, 
    borderRadius: 5, 
    borderColor: 'lightgray',
    borderWidth: 1,
    fontSize: 15
  },

  button : {
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3', 
    padding: 7
  },
});

// action

const addTask = (name) => {
  return {
    type: 'ADD',
    taskName: name
  }
}

 export default connect(
   state => {
     return {

     }
   },
   dispatch => {
    return {
      onAddNewTask: (name) => dispatch( addTask(name) )
    }
   }
 ) (AddViewContainer);