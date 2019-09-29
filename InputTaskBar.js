
import React from 'react';
import {  TextInput, StyleSheet, KeyboardAvoidingView,  View, Button } from 'react-native';


export default class InputBar extends React.Component{
    /*React Component for the the summit Text Input task*/
    constructor(props){
        super(props);
        this.state = {
            inputTask: '',
        }
    }
    
    _handleInputTask = newTask => {this.setState( {inputTask: newTask} )}

    _summitTask = this.props.onSummit;

  render() {
    return (
      <View style={styles.InputContainer} >
        <KeyboardAvoidingView behavior="position" >
          <TextInput style={styles.TextInput}
            placeholder="New task"
            onChangeText={this._handleInputTask}
          />
          
          <Button style={styles.SummitButton}
            title="New task"
            onPress={() => this._summitTask(this.state.inputTask)}
          />
        
        </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputContainer:{
    flexDirection: "row",
    borderStartWidth: 5,
    borderColor: "black",
    justifyContent: "center",
  },
  TextInput:{
    width: 100,
    backgroundColor: 'transparent',
  },
  SummitButton:{
    width: 5,
  },
}) 