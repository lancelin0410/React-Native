import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

export default function IntroScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> props.navigation.push('IntroDetail', {title: '咖啡起源'})}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={{uri: 'https://2.bp.blogspot.com/-XBrTQLUowII/UmDg_BLPvkI/AAAAAAAAXLs/4eKMaYkrb84/s1600/p205256231-2.jpg'}}
          />
        </View>
        <Text style={styles.text}>咖啡起源</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>props.navigation.push('IntroDetail', {title: '種類成分'})}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={{uri: 'https://www.promesain.com/wp-content/uploads/2018/07/Coffee-beans.jpg'}}
          />
        </View>
        <Text style={styles.text}>種類成分</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>props.navigation.push('IntroDetail', {title: '沖煮方式'})}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            source={{uri: 'https://wealmax.com/wp-content/uploads/2018/08/photo-3.jpg'}}
          />
        </View>
        <Text style={styles.text}>沖煮方式</Text>
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
  },
  button: {
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    // borderWidth: 2,
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
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    // lineHeight: Dimensions.get('window').height/3.5,
    textShadowColor: 'black',
    textShadowRadius: 10, 
    textShadowOffset: {
      width: 1,
      height: 1
    }
  }
});
