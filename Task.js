import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ToDoTask extends React.Component {
    //component class for the todo list 

    constructor(props) {
        super(props)
        this.state = { ...this.props.task, }
    }
    
    _checkSelf = this.props.check;
    _removeSelf = this.props.remove;

    _toggleChecked = (value) => {
        this.setState({ checked: value });
        this._checkSelf(this.props.task)
    }

    render() {
        return (
            <Menu>
                <MenuTrigger style={!this.state.checked ? styles.Task : styles.CheckedTask} triggerOnLongPress={true}>
                    <CheckBox value={this.state.checked} onValueChange={this._toggleChecked} />
                    <View style={styles.TextContainer}>
                        <Text> {this.state.title}  </Text>
                        {!this.state.important ? <View /> :
                            <Icon style={styles.Icon} name="exclamation-triangle" color="yellow" backgroundColor="yellow" />
                        }
                        {!this.state.urgent ? <View /> :
                            <Icon style={styles.Icon} name="hourglass-start" color="red" backgroundColor="red" />
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
        backgroundColor: 'lightgray',
    },
    TextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Icon:{
        padding: 10,
    }


});