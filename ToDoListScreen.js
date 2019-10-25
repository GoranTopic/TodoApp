import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView , TouchableOpacity, Button } from 'react-native';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

import Icon from 'react-native-vector-icons/FontAwesome';

/* local imports */
import Task from './Task';
import InputBar from './InputTaskBar';
//import { TouchableOpacity } from 'react-native-gesture-handler';

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
          priority: 0,
          checked: false,
        }, {
          title: "take out trash",
          key: 1,
          notes: 'stop being dirty',
          important: true,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 2,
          checked: false,
        }, {
          title: "be happy",
          key: 2,
          notes: 'stop being fake',
          important: true,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 2,
          checked: false,
        }, {
          title: "call gustavo",
          key: 3,
          notes: 'ask how he is doing',
          important: false,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 0,
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
          priority: 2,
          checked: false,
        },{
          title: "Call girl from bonsai",
          key: 6,
          notes: 'do it',
          important: true,
          urgent: true,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 3,
          checked: false,
        },{
          title: "confirm cuenca shooting",
          key: 7,
          notes: 'important',
          important: true,
          urgent: true,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 3,
          checked: false,
        },{
          title: "give youself a tread =)",
          key: 8,
          notes: 'finally',
          important: false,
          urgent: false,
          createdDate: new Date(),
          dueDate: new Date(),
          priority: 0,
          checked: false,
        },
      ],
      checkedArray: [],
    }

  }


  _switchTask = (task) => {
    /*fuction which take as a task and move it to check array if it is unmarked
      and taskArray if it is checked changes it marked state afterwards*/
      if(task.checked){ //if task is checked
        //remove array from task checked Array
        filteredArray = this.state.checkedArray.filter( (otherTask) => {return  task.key !== otherTask.key} );
        this.setState({checkedArray: filteredArray});
        //add array to the unchecked array list  
        task = { ...task, checked: false} //set as uncheked
        this.setState({taskArray: [...this.state.taskArray, task]});
      }else{   //if task is unchecked 
        filteredArray = this.state.taskArray.filter( (otherTask) => {return  task.key !== otherTask.key} );
        this.setState({taskArray: filteredArray});
        //add array to the checked array list  
        task = { ...task, checked: true} //set as uncheked
        this.setState({checkedArray: [...this.state.checkedArray, task]});
      }
  }

  _addTask = (task) => {
    /* crates a new to the unchekd taskArray */
    newTask = { ...task, key: this.state.curKey++}
    this.setState({taskArray: [...this.state.taskArray, newTask]}, print("new Task created"));
  }
  
  _removeTask = (doomedTask) => {
    /* removes a task from the cheked or unchecked array whether it is marked as checked or unchecked */
    if(doomedTask.checked){
      filteredArray = this.state.checkedArray.filter( (task) => { return  task.key !== doomedTask.key});
    }else{
      filteredArray = this.state.taskArray.filter( (task) => { return  task.key !== doomedTask.key});
    }
    this.setState({taskArray: filteredArray});
  }
  
   _renderTask = item =>
    /* render item fuction for the scrollview */
    <View key={item.key} >
      <Task task={item} switch={this._switchTask} remove={this._removeTask} check={this._checkTask} navigation={this.props.navigation} />
      <View style={styles.separator} />
    </View>;
  

  _sortByPriority = (task1, task2) => { return task2.priority - task1.priority }
    /*fuction to sort the tasks by priority  task2.priority - task1.priority } */
  
  _renderFlatList = (array) => <Task task={array.item} remove={this._removeTask} navigation={this.props.navigation} />
    /*redener passes parameters to the task array*/

  render() {
    return (
      <View style={styles.TodoContainer}>

      
        <ScrollView >
          {this.state.taskArray.sort(this._sortByPriority).map( this._renderTask)}
        {/* <FlatList
          data={this.state.taskArray}
          renderItem={this._renderFlatList}
          keyExtractor={(item) => "" + item.key}
        /> */}

          <View>
            <TouchableOpacity style={styles.SummitButton}
              onPress={() => this.props.navigation.navigate("Creator", {summit: this._addTask, })}>
              <Icon name="plus-circle" size={33} color={"lightgray"} />
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>

          {this.state.checkedArray.map(this._renderTask)}

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
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgb(300,300,300)",
  },
  SummitIcon:{
    padding:10,
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