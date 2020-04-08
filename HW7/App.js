import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import HomeDetailScreen from './src/screens/HomeDetailScreen.js';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack(){
  return(
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle:{backgroundColor:'mediumseagreen'},
        headerBackTitle:'返回',
        headerTintColor:'white'
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'農村小旅行'}}/>
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{title:'內容介紹'}}/>
    </Stack.Navigator>
  )
}

function MyProfilesStack(){
  return(
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle:{backgroundColor:'mediumseagreen'},
        headerBackTitle:'返回',
        headerTintColor:'white'
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{title:'My Detail 2'}}/>
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
              iconName = 'mountains'
            }else if (route.name == 'Profile'){
              iconName = 'book'
            }
            return (
              <View style={{top: focused ? -5 : 0}}>
                <Foundation name={iconName} size={focused ? 50 : 30} color={color}/>
              </View>
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: 'mediumseagreen',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor:'sienna'
          }
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Profile" component={MyProfilesStack} />
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