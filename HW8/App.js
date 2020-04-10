import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import HomeDetailScreen from './src/screens/HomeDetailScreen.js';
import ListScreen from './src/screens/ListScreen.js';
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

function MyListStack(){
  return(
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle:{backgroundColor:'mediumseagreen'},
        headerBackTitle:'返回',
        headerTintColor:'white'
      }}
    >
      <Stack.Screen name="ListScreen" component={ListScreen} options={{title:'我的最愛'}}/>
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{title:'內容介紹'}}/>
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
            }else if (route.name == 'List'){
              iconName = 'book'
            }
            return (
              <View style={{top: focused ? -5 : 0}}>
                <View style={{position:'absolute', bottom:-3, left:-2, opacity:0.7}}>
                  <Foundation name={iconName} size={focused ? 55 : 0} color={'gray'}/>
                </View>
                <View>
                  <Foundation name={iconName} size={focused ? 50 : 30} color={color}/>
                </View>
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
        <Tab.Screen name="List" component={MyListStack} />
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