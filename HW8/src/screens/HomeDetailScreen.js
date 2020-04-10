import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as StorageHelper from '../helpers/StorageHelper'

export default function HomeDetailScreen(props) {
  const passProps = props.route.params.passProps || 'nothing get'
  const [ myBookCount, setMyBookCount ] = useState(0)
  const [ myBookList, setMyBookList ] = useState([])

  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      loadStorage()
    })
    return unsubscribe

  },[myBookCount])

  const loadStorage = async() => {
    let bookGet = await StorageHelper.getMySetting('myList')
    bookGet = JSON.parse(bookGet)
    setMyBookCount(bookGet.length)
    setMyBookList(bookGet)
  }
  

  const saveToStorage = async(getMyBooks) => {
    try {
      await StorageHelper.setMySetting('myList', JSON.stringify(getMyBooks))
    } catch (err) {
      console.log(err)
    }
    
  }

  const pressRow = (passProps) => {
    if (myBookList.length == 0) {
      passProps.addToMyList = true
      myBookList.push(passProps)
    } else {
      myBookList.map(a => { 
        let copyA = {...a}
        if (copyA.TravelSeq === passProps.TravelSeq) {
          copyA.addToMyList = false
          passProps.addToMyList = false
          let index = myBookList.indexOf(a)
          myBookList.splice(index, 1)
        } else {
          passProps.addToMyList = true
          myBookList.push(passProps)
        }
      }
      )
    }
    setMyBookList(myBookList)
    setMyBookCount(myBookList.length)
    saveToStorage(myBookList)
  }

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
        <View>
          <Image
            style={{width: useWindowDimensions().width, height:240, resizeMode:'contain'}}
            source={{uri: passProps.PhotoUrl ? passProps.PhotoUrl : 'https://png.pngtree.com/element_origin_min_pic/17/01/05/589485cf37513f57738db6da1e3a5c0a.jpg'}}
          />
          <TouchableOpacity style={{position:'absolute', right:25, bottom:22, padding:5}} onPress={()=>pressRow(passProps)}>
            <View style={{opacity:0.8}}>
              { passProps.addToMyList ? <AntDesign name={'heart'} size={40} color={'red'}/> : <AntDesign name={'hearto'} size={40} color={'snow'}/> }
            </View>
          </TouchableOpacity>
        </View>
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
