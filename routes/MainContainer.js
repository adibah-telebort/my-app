import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/IonIcons';

// Screens
import Home from './screens/home';
import ToDo from './screens/todo';

// Screen names
const homeName = 'Home';
const todoName = 'ToDo';

const Tab = createBottomTabNavigator()


// const screens = {
//     Home: {
//         screen: Home
//     },
//     ToDo: {
//         screen: ToDo
//     }
// }

// const HomeStack = createNativeStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === todoName) {
                            iconName = focused ? 'list' : 'list-outline'
                        }

                        return <IonIcons name={iconName} size={size} color={color} />
                    }
                })}>

            </Tab.Navigator>
        </NavigationContainer>
    )
}