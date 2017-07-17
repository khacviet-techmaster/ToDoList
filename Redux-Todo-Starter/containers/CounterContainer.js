import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';

import {connect} from 'react-redux';
import Counter from '../components/Counter.js';

class CounterContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {addNumber, subNumber} = this.props;
    const {number} = this.props.number;

    return (
        <Counter val={number} {...this.props}/>
    );
  }
}


Counter.defaultProps = {
  number : 1
}


const styles = StyleSheet.create({
  counterView : {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// action

const addNumber = (addVal) => {
  return {
    type: 'ADD_NUMBER',
    value: addVal,
  }
}

const subNumber = (subVal) => {
  return {
    type: 'SUB_NUMBER',
    value: subVal,
  }
}

export default connect( 
  state => {
    return {
      number: state.number
    }
  },
  dispatch => {
    return {
      addNumber: (val) => dispatch(addNumber(val)),
      subNumber: (val) => dispatch(subNumber(val)) 
    }
  }
)(CounterContainer);