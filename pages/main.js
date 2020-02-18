import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import React from 'react';

import List from './list';
/*import Search from './search';*/
import Splash from './splash';

const AppNavigator = createStackNavigator(
    {
        List: {
            screen: List,
            navigationOptions: () => ({
                headerShown: false,
              }),
        },
        /*Search: {
            screen: Search,
        },*/
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
