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
import TaskFlatList from '../components/TaskFlatList.js'

class TaskFlatListContainer extends Component {

  render() {

    const { data } = this.props.listData
    const {onFinishedItem, onDeleteItem} = this.props

    return(

        <TaskFlatList dataList= {data} {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal : 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2
  }
});

// action

const finishTask = (index) => {
  return {
    type : 'FINISH',
    atIndex: index
  }
}
const deleteTask = (index) => {
  return {
    type: 'DELETE',
    atIndex: index
  }
}

export default connect( 
  state => {
    return {
      listData: state.taskList
    }
  },
  dispatch => {
    return {
      onFinishedItem: (index) => dispatch( finishTask(index)),
      onDeleteItem:   (index) => dispatch( deleteTask(index))
    }
  }
)(TaskFlatListContainer);