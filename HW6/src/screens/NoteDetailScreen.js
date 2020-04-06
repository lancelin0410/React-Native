import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { image } from './NoteScreen'

export default function IntroDetailScreen(props) {
  const passProps = props.route.params.passProps
  
  // useEffect (()=>{
  //   props.navigation.setOptions({
  //     title: passProps.title
  //   })
  // }, [])

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null, opacity:0.2}}
          source={{uri: 'https://img.51miz.com/Element/00/96/51/77/3d68d76e_E965177_c8d83f1b.png'}}
        />
      </View>
      <View style={{position:'absolute', bottom:25, left:-53, alignItems: 'center', justifyContent: 'center', opacity:0.5}}>
        <Image
          style={{height:80, resizeMode:'contain'}}
          source={require('../../assets/img/main.png')}
        />
        <Image
          style={{width:50, height:50, resizeMode:'cover', transform: [{rotate: '15deg'}], marginTop:10}}
          source={{uri:'https://cdn1.iconfinder.com/data/icons/business-finance-18/512/Pencil_Pen_Write_Draw_Edit_Design_Sketch-512.png'}}
        />
      </View>
      <Image
        style={{position:'absolute', bottom:25, right:25, width:180, height:180, resizeMode:'cover'}}
        source={image[passProps.id%14]}
      />
      <View style={{flex:1, margin:15, marginTop:20, marginBottom:21, borderWidth:3, borderColor:'gray'}}>
        <View style={{margin:10}}>
          <Text style={{fontSize:30}}>{passProps.title}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', margin:8, marginTop:0, paddingBottom:5, paddingLeft:6, borderBottomWidth:1}}>
          <Ionicons name={'md-calendar'} size={23} color={'darkgray'}/>
          <Text style={{color:'gray', fontSize:18, marginLeft:8}}>{passProps.date}</Text>
        </View>
        <View style={{margin:10, padding:5}}>
          <Text style={{fontSize:23}}>{passProps.note}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
