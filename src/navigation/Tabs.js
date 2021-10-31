import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';


const Tabs = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Favorites: {
    name: 'heart-circle-outline'
  },
}

const TabsNavigation = () => {
  return ( 
    <Tabs.Navigator 
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Ionicons name={name} color={color} size={size}/>
        },
        tabBarStyle: {
          backgroundColor: '#b6cae7'
        },
        tabBarActiveTintColor: '#454372',
        tabBarInactiveTintColor: '#70877f',
        headerShown: false
      })
      }
    >
     
      <Tabs.Screen
        name="Home"
        component={Home}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
      />
    </Tabs.Navigator>
  );
}
export default TabsNavigation;