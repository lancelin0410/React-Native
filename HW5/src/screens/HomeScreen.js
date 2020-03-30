import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null}}
          source={{uri: 'http://pic1.win4000.com/mobile/f/59a3d26e92c9f.jpg'}}
        />
      </View>
      <Text style={{fontSize:50, color:'white', position:'absolute', top:130}}>咖啡故事館</Text>
      <Text style={{fontSize:20, color:'white', position:'absolute', bottom:115, textAlign:'center', lineHeight:35}}>每一杯咖啡都有一個故事{"\n"}值得細細品味</Text>
    </View>
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
