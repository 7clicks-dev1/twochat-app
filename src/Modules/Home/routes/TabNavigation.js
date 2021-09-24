import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HOME_NAVIGATION from '.';
import ONBOARDING_SCREENS from '../../Onboarding/routes/index';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Explorar'>
      {HOME_NAVIGATION.map(screen => (
        <Tab.Screen {...screen} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
