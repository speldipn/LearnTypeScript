import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface CounterState {
  value: number;
}

const initialState: CounterState = {value: 1};

type CounterAction = {type: 'increment'} | {type: 'decrement'; by: number};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1,
      };
    case 'decrement':
      return {
        value: state.value - action.by,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>{state.value}</Text>
      <Button title="+1" onPress={() => dispatch({type: 'increment'})} />
      <Button title="-1" onPress={() => dispatch({type: 'decrement', by: 1})} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default Counter;
