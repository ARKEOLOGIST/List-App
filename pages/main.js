import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import React from 'react';

import List from './pages/list';
import Search from './pages/search';
import Splash from './pages/splash';

const AppNavigator = createStackNavigator(
    {
        List: {
            screen: List,
        },
        Search: {
            screen: Search,
        },
        Splash: {
            screen: Splash,
        }
    },
    {
        initialRouteName: 'Splash'
    },
);

const MainScreen = createAppContainer(AppNavigator);
export default MainScreen;
