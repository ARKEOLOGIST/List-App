import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import React from 'react';

const AppNavigator = createStackNavigator(
    {
        List: {
            screen: List,
        },
        Search: {
            screen: Search,
        }
    },
    {
        initialRouteName: 'List'
    },
);

const MainScreen = createAppContainer(AppNavigator);
export default MainScreen;
