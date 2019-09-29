import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

/* local imports */
import Task from './Task';
import InputBar from './InputTaskBar';

export default class ToDoList extends React.Component {
  /* ToDoList component that displays the a flastList of the componets */
  constructor(props) {
    super(props);
    this.state = {
      curKey: 6,
      taskArray: [
        {
          title: "go shopping",
          key: 0,
          notes: 'Go shopping and buy cakes',
          important: false,
          urgent: false,
          dueDate: new Date(),
        }, {
          title: "take out trash",
          key: 1,
          notes: 'stop being dirty',
          important: true,
          urgent: false,
          dueDate: new Date(),
        }, {
          title: "be happy",
          key: 2,
          notes: 'stop being dirty',
          important: true,
          urgent: false,
          dueDate: new Date(),
        }, {
          title: "call gustavo",
          key: 3,
          notes: 'ask how he is doing',
          important: false,
          urgent: false,
          dueDate: new Date(),
        }, {
          title: "go to cinema",
          key: 4,
          notes: 'go watch movie =)',
          important: false,
          urgent: true,
          dueDate: new Date(),
        }, {
          title: "finish to do app",
          key: 5,
          notes: 'finally',
          important: true,
          urgent: true,
          dueDate: new Date(),
        }
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

  _renderItem = obj => <Task task={obj.item} remove={this.removeTask} navigation={this.props.navigation} />

  render() {
    return (
      <View style={styles.TodoContainer}>
        <FlatList
          data={this.state.taskArray}
          renderItem={this._renderItem}
          keyExtractor={(item) => "" + item.key}
        />

        <Button style={styles.SummitButton}
          title="+ New +"
          onPress={() => this.props.navigation.navigate("Creator", {
            summit: this._addTask,
          })}
        />

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
  }
});