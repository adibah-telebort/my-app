import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/IonIcons';

// Screens
import Home from './screens/home';
import ToDo from './screens/todo';

// Screen names
const homeName = 'Home';
const todoName = 'ToDo';

const screens = {
    Home: {
        screen: Home
    },
    ToDo: {
        screen: ToDo
    }
}

const HomeStack = createNativeStackNavigator();

export default function MainContainer() {
    return (
        <View>
            <Text>Welcome!</Text>
        </View>
    )
}