import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Home from './Home';
// import { } from 'react-icons';

const Tab = createBottomTabNavigator();

type Props = {}

const HomeNav = (props: Props) => {
    return (
        <Tab.Navigator initialRouteName='Home' id='HomeNavBottomTab'>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default HomeNav