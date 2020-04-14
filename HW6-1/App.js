import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreen from './src/screens/EditScreen.js';
import NoteScreen from './src/screens/NoteScreen.js';
import NoteDetailScreen from './src/screens/NoteDetailScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NoteStack(){
  return(
    <Stack.Navigator
      initialRouteName='Note'
      screenOptions={{
        headerStyle:{backgroundColor:'sienna'},
        headerBackTitle:'返回',
        headerTitle:'隨手筆記',
        headerTintColor:'white',
        headerTitleAlign:'center'
      }}
    >
      <Stack.Screen name="Note" component={NoteScreen}/>
      <Stack.Screen name="NoteDetail" component={NoteDetailScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Note'
        screenOptions={({ route })=>({
          tabBarIcon: ({ color, focused })=>{
            let iconName
            if (route.name == 'Edit'){
              return <View style={{width:68, height:68, borderRadius:34, backgroundColor: color, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={{width:40, height:40, resizeMode:'cover'}}
                  source={{uri: focused ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Write-icon.svg/1024px-Write-icon.svg.png' : 'https://www.iconsdb.com/icons/preview/black/paper-xxl.png'}}
                />
              </View> 
            } else if (route.name == 'Profile'){
              iconName = focused ? 'md-person' : 'ios-person'
            } else if (route.name == 'Note'){
              iconName = focused ? 'md-paper' : 'ios-paper'
            }
            return <Ionicons name={iconName} size={30} color={color}/>
          }
        })}
        tabBarOptions={{
          activeTintColor: 'sienna',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor:'tan'
          }
        }}
      >
        <Tab.Screen name="Note" component={NoteStack} />
        <Tab.Screen name="Edit" component={EditScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
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
