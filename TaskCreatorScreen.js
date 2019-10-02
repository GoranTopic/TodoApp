import React from 'react';
import { Text, View, Button, StyleSheet, KeyboardAvoidingView, TextInput, Switch } from 'react-native';
import { MenuProvider, } from "react-native-popup-menu";
import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

import { navigate, } from "react-navigation";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
/* local imports */
import ToDoListScreen from "./ToDoListScreen";
import Task from './Task';
import InputBar from './InputTaskBar';

export default class TaskCreatorScreen extends React.Component {
  /* Datils screen for the selected task*/
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputNote: '',
      important: false,
      urgent: false,
      dueDate: null,
      priority: 0,
      enableSummit: false,
    }
  }
  _handleInputTitle = newTitle => { this.setState({ inputTitle: newTitle }) }
  _handleInputNote = newNote => { this.setState({ inputNote: newNote }) }
    
    
  _toggleImportant = (value) => { this.setState({ important: value }) }
  _toggleUrgent = (value) => { this.setState({ urgent: value }) }

  _calcPriority= () => { 
    /*caculaate the priority value: 
      The priority should go as follow:
        -> Important and urgent     -> +3 = +2 +1
        -> Important but not urgent -> if(important) +2
        -> Urgent but not important -> if(urgent) +1
        -> Not importnant and not   -> +0
     */
    var totalPriority = 0;
    if(this.state.urgent) totalPriority += 1;
    if(this.state.important) totalPriority += 2;
    return totalPriority;
  }
  _summitTask = () => {
     
    summit = this.props.navigation.getParam('summit', 'NO-Summit fuction');
    newTask = { 
        title: this.state.inputTitle, 
        notes: this.state.inputNote,
        important: this.state.important,
        urgent: this.state.urgent,
        dueDate: this.state.dueDate,
        createDate: new Date(),
        priority: this._calcPriority(),

       }
    summit(newTask);
    this.props.navigation.navigate('Home'); 
  }


  render() {
    return (
      <View style={styles.InputContainer} >
        <KeyboardAvoidingView behavior="position" >
          <TextInput style={styles.TextInput}
            placeholder="Title"
            onChangeText={this._handleInputTitle}
          />

          <Text>Is this important?</Text>
          <Switch onValueChange={this._toggleImportant } value={this.state.important}/>
          <Text>Is this Urgent?</Text>
          <Switch onValueChange={this._toggleUrgent } value={this.state.urgent}/>

          <TextInput style={styles.TextInput}
            placeholder="Descrition"
            onChangeText={this._handleInputNote}
          />


          <Button style={styles.SummitButton}
            title="Summit"
            onPress={() => this._summitTask(this.state.task)}
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
