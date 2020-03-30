import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import IntroScreen from './src/screens/IntroScreen.js';
import IntroDetailScreen from './src/screens/IntroDetailScreen.js';
import DrinkScreen from './src/screens/DrinkScreen.js';
import DrinkDetailScreen from './src/screens/DrinkDetailScreen.js';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function IntroStack(){
  return(
    <Stack.Navigator
      initialRouteName='Intro'
      screenOptions={{
        headerStyle:{backgroundColor:'mediumseagreen'},
        headerBackTitle:'返回',
        headerTintColor:'white',
        headerTitleAlign:'center'
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} options={{title:'咖啡介紹'}}/>
      <Stack.Screen name="IntroDetail" component={IntroDetailScreen}/>
    </Stack.Navigator>
  )
}

function DrinkStack(){
  return(
    <Stack.Navigator
      initialRouteName='Drink'
      screenOptions={{
        headerStyle:{backgroundColor:'mediumseagreen'},
        headerBackTitle:'返回',
        headerTintColor:'white',
        headerTitleAlign:'center'
      }}
    >
      <Stack.Screen name="Drink" component={DrinkScreen} options={{title: '咖啡飲品'}}/>
      <Stack.Screen name="DrinkDetail" component={DrinkDetailScreen} options={{title: '咖啡飲品'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route })=>({
          tabBarIcon: ({ color, focused })=>{
            let iconName
            if (route.name == 'Home'){
              return <View style={{width:68, height:68, borderRadius:34, backgroundColor: color, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{width:50, height:50, resizeMode:'cover'}}
                  source={{uri: focused ? 'https://images.669pic.com/element_min_new_pic/67/69/77/65/bb62e4fc00fae1f1ec57e66af1f86c02.png' : 'https://honestcoffeeguide.com/_nuxt/img/daf6b4f.png'}}
                />
              </View> 
              // iconName = 'ios-home'
            } else if (route.name == 'Drink'){
              iconName = focused ? 'ios-cafe' : 'ios-pint'
            } else if (route.name == 'Intro'){
              iconName = focused ? 'ios-document' : 'ios-folder'
            }
            return <Ionicons name={iconName} size={25} color={color}/>
          }
        })}
        tabBarOptions={{
          activeTintColor: 'mediumseagreen',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor:'tan'
          }
        }}
      >
        <Tab.Screen name="Intro" component={IntroStack} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Drink" component={DrinkStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
