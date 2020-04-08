import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';

export default function HomeDetailScreen(props) {
  const passProps = props.route.params.passProps || 'nothing get'
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null}}
          source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-natural-scenery-cartoon-beautiful-rural-scene-image_209648.jpg'}}
        />
      </View>
      <ScrollView>
        <Image
          style={{position:'absolute', width: useWindowDimensions().width, height:90, top:-12, resizeMode:'stretch'}}
          source={require('../../assets/img/wood.png')}
        />
        <View style={{height:72, justifyContent:'center'}}>
          <Text style={{fontSize:25, textAlign:'center', textShadowOffset:{width:1, height:1}, textShadowColor:'darkgray', textShadowRadius:5}}>{passProps.Title}</Text>
        </View>
        <Image
          style={{width: useWindowDimensions().width, height:250, resizeMode:'contain'}}
          source={{uri: passProps.PhotoUrl ? passProps.PhotoUrl : 'https://png.pngtree.com/element_origin_min_pic/17/01/05/589485cf37513f57738db6da1e3a5c0a.jpg'}}
        />
        <View style={{backgroundColor:'rgba(255,255,255,0.5)', margin:7, padding:5, paddingLeft:9}}>
          <Text style={{fontSize:16}}>{passProps.Contents}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:10
  },
});
