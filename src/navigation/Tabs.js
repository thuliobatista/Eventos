import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Evento from '../pages/Evento';
import Perfil from '../pages/Perfil';


const Tabs = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Favorites: {
    name: 'heart-circle-outline'
  },

  Evento: {
    name: 'flash-outline'
  },
  Perfil: {
    name: 'person-outline'
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

      <Tabs.Screen
        name="Evento"
        component={Evento}
      />
      <Tabs.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tabs.Navigator>
  );
}
export default TabsNavigation;