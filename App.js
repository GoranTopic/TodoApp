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
import TaskDetailScreen from "./TaskDetailScreen";
import TaskCreatorScreen from "./TaskCreatorScreen";

const StackNavigator = createStackNavigator({
  Home: ToDoListScreen,
  Creator: TaskCreatorScreen,
  Details: TaskDetailScreen,
}, {
  initialRouteName: "Home",
}
);

const MainNavigator = createMaterialBottomTabNavigator({
  ToDoList: StackNavigator,
  },
);

const AppContainer = createAppContainer(MainNavigator);


export class ToDoApp extends React.Component {
  //the react native application 
    render() {
    return (
      <MenuProvider>
        <AppContainer />
      </MenuProvider>
    );
  }
}


export default function App() {
  return (
      <ToDoApp/>
  );
}
