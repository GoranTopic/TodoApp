import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView , Button } from 'react-native';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

/* local imports */
import Task from './Task';
import InputBar from './InputTaskBar';

export default class ToDoList extends React.Component {
  /* ToDoList component that displays the a flastList of the componets */
  constructor(props) {
    super(props);
    this.state = {
      curKey: 9,
      taskArray: [
        {
          title: "go shopping",
          key: 0,
          notes: 'Go shopping and buy cakes',
          important: false,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        }, {
          title: "take out trash",
          key: 1,
          notes: 'stop being dirty',
          important: true,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        }, {
          title: "be happy",
          key: 2,
          notes: 'stop being dirty',
          important: true,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        }, {
          title: "call gustavo",
          key: 3,
          notes: 'ask how he is doing',
          important: false,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        }, {
          title: "go to cinema",
          key: 4,
          notes: 'go watch movie =)',
          important: false,
          urgent: true,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        }, {
          title: "Go to Cuenca",
          key: 5,
          notes: 'Fun',
          important: true,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        },{
          title: "Call girl from bonsai",
          key: 6,
          notes: 'do it',
          important: true,
          urgent: true,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        },{
          title: "confirm cuenca shooting",
          key: 7,
          notes: 'important',
          important: true,
          urgent: true,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        },{
          title: "give youself a tread =)",
          key: 8,
          notes: 'finally',
          important: false,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 1,
          checked: false,
        },
      ],
    }

  }

  _addTask = (task) => {
    newTask = { ...task, key: this.state.curKey++}
    this.setState({taskArray: [...this.state.taskArray, newTask]}, () => console.log(this.state.taskArray) );
  }

  removeTask = (doomedTask) => {
    filteredArray = this.state.taskArray.filter( (task) => { return  task.key !== doomedTask.key});
    this.setState({taskArray: filteredArray});
  }

  _renderItem = item =>
    //render item fuction for the scrollview
    <View key={item.key} >
      <Task task={item} remove={this.removeTask} navigation={this.props.navigation} />
      <View style={styles.separator} />
    </View>

  _sortTaskArray = () => {
    //fuction to sort the tasks by priority 
  }
  

  _renderFlatList = obj => <Task task={obj.item} remove={this.removeTask} navigation={this.props.navigation} />

  render() {
    return (
      <View style={styles.TodoContainer}>

      
        <ScrollView >
          {this.state.taskArray.map( this._renderItem)}

        {/*
        <FlatList
          data={this.state.taskArray}
          renderItem={this._renderFlatList}
          keyExtractor={(item) => "" + item.key}
        />

        */}

        <Button style={styles.SummitButton}
          title="+ New +"
          onPress={() => this.props.navigation.navigate("Creator", {
            summit: this._addTask,
          })}
        />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TodoContainer:{
    borderRadius: 20,
  },
  containerRow:{
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  SummitButton:{
    width: 100,
    height: 50,
  },
  ScrollViewContainer:{
    flex: 1,
  },
  separator: {
    height: 2,
    backgroundColor: '#707080',
    width: '100%',
  },
});