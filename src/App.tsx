/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useEffect} from 'react';
import {StatusBar} from 'react-native'
import Categories from './pages/CategoryList'
import Details from './pages/Detail'
import Category from './pages/Category'

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(()=>{
    StatusBar.setBackgroundColor("white")
    StatusBar.setBarStyle("dark-content")
  }, [])

  return (<NavigationContainer>
    <Stack.Navigator 
      screenOptions={{ 
        headerTintColor: 'orange', 
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28
        }}}
      >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Meals" component={Category} options={({route})=>({title: route.params.title + "fdsf"})} />
    </Stack.Navigator>
  </NavigationContainer>)
}

export default App;
