import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import React from 'react';

import List from './list';
import Search from './search';
import Menu from './menu';
import Splash from './splash';

const AppNavigator = createStackNavigator(
    {
        List: {
            screen: List,
        },
        Search: {
            screen: Search,
        },
        Menu: {
            screen: Menu,
            navigationOptions: () => ({
                headerShown: false,
              }),
        },
        Splash: {
            screen: Splash,
            navigationOptions: () => ({
                headerShown: false,
              }),
        }
    },
    {
        initialRouteName: 'Splash'
    },
);

const MainScreen = createAppContainer(AppNavigator);
export default MainScreen;
