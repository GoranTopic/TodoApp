import React from 'react';
import { Text, View, Button } from 'react-native';
import { MenuProvider, } from "react-native-popup-menu";
import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { navigate, } from "react-navigation";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
/* local imports */
import ToDoListScreen from "./ToDoListScreen";
import TaskCreatorScreen from "./TaskCreatorScreen";
import Task from './Task';
import InputBar from './InputTaskBar';

export default class TaskDetailScreen extends React.Component {
  /* Datils screen for the selected task*/
  constructor(props) {
    super(props);
    this.state = {
   }
  }


  render() {
    return (
        <View>
            <Text>Comming soon</Text>
        </View>
    );
  }
}

