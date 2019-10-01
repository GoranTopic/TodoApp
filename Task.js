import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ToDoTask extends React.Component {
    //component class for the todo list 

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.task.title,
            key: this.props.task.key,
            notes: this.props.task.notes,
            important: this.props.task.important,
            urgent: this.props.task.urgent,
            createdDate : new Date(),
            dueDate : new Date(),
            checked: false,
        }
    }
    
    remove = this.props.remove;

    render() {
        return (
            <Menu>
                <MenuTrigger style={styles.Task} triggerOnLongPress={true}>
                    <CheckBox checked={this.state.checked} />
                    <View style={styles.TextContainer}>
                        <Text> {this.state.title} </Text>
                        { !this.state.important ? <View/> :
                            <Icon style={styles.Icon} name="exclamation-triangle"  color="yellow"  backgroundColor="yellow" />}
                        { !this.state.urgent ? <View/> :
                            <Icon style={styles.Icon} name="hourglass-start" color="red" backgroundColor="red" />}
                    </View>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => this.props.navigation.navigate('Creator')}>
                        <Text>Edit</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => { this.remove(this.props.task) }} >
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