import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DrinkScreen(props) {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={styles.image}
          source={{uri: 'https://i.pinimg.com/originals/14/6c/e8/146ce88e8606c58523f3f5974b2b15ce.jpg'}}
        />
      </View>
      <Image
          style={{width:150, height:200, position:'absolute', bottom:10, right:10, opacity:0.4}}
          source={{uri: 'https://images.669pic.com/element_min_new_pic/80/8/23/63/b35cd542d014e00701f467815a0fe0e7.png'}}
      />
      <View style={{height:55, marginTop:25, marginBottom:13, borderStyle:'solid', borderWidth:2, borderColor:'mintcream'}}>
        <Text style={[styles.text,{fontSize: 50, fontWeight:'bold', textAlign: 'center', letterSpacing:10, lineHeight:55}]}>MENU</Text>
      </View>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '美式咖啡'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  美式咖啡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '拿鐵'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  拿鐵</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '卡布奇諾'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  卡布奇諾</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '咖啡歐蕾'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  咖啡歐蕾</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '摩卡'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  摩卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={()=>props.navigation.push('DrinkDetail', {title: '焦糖瑪奇朵'})}>
        <Ionicons name={'ios-cafe'} size={25} color={'mintcream'}/>
        <Text style={styles.text}>  焦糖瑪奇朵</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  },
  button: {
    flex:1, 
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 20,
    // backgroundColor: 'rgba(255,255,255,0.051)',
    width: Dimensions.get('window').width,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black'
  },
  image: {
    flex:1, 
    width:null, 
    height:null, 
    resizeMode:'cover'
  },
  text:{
    fontSize: 30,
    color: 'rgba(255,255,255,0.85)',
    // lineHeight: Dimensions.get('window').height/9,
    textShadowColor: 'black',
    textShadowRadius: 10, 
    textShadowOffset: {
      width: 1,
      height: 1
    }
  }
});
