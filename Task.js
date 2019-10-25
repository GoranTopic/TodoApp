import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ToDoTask extends React.Component {
    //component class for the todo list 

    constructor(props) {
        super(props)
        this.state = { ...this.props.task}
    }
    
    _removeSelf = this.props.remove;
    _switchTask = this.props.switch;

    _toggleChecked = (value) => {
        this.setState({ checked: value }); //set value inside the render
        this._switchTask(this.props.task) //swith to the cheked or unchekd array
    }

    render() {
        return (
            <Menu>
                <MenuTrigger style={!this.state.checked ? styles.Task : styles.CheckedTask} triggerOnLongPress={true}>
                    <CheckBox value={this.state.checked} onValueChange={this._toggleChecked} />
                    <View style={styles.TextContainer}>
                        <Text style={!this.state.checked ? {} : styles.checkedText}> {this.state.title}  </Text>
                        {!this.state.important ? <View /> :
                            <Icon style={styles.checkedIcon} name="exclamation-triangle" color="yellow" backgroundColor="yellow" />
                        }
                        {!this.state.urgent ? <View /> :
                            <Icon style={styles.checkedIcon} name="hourglass-start" color="red" backgroundColor="red" />
                        }
                    </View>
                </MenuTrigger>
                <MenuOptions>
                    {!this.state.checked ? <View /> :
                        <MenuOption onSelect={() => this.setState({})}>
                            <Text>Uncheck</Text>
                        </MenuOption>
                    }
                    <MenuOption onSelect={() => this.props.navigation.navigate('Creator')}>
                        <Text>Edit</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => { this._removeSelf(this.props.task) }} >
                        <Text>Delete</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        );
    }
}

const styles = StyleSheet.create({
    Task:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    CheckedTask:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(100,100,100, .2)',
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedText:{
        color: 'rgba(0,0,0, .2)',
    },
    checkedIcon:{
        color: 'rgba(0,0,0, .2)',
    }


});