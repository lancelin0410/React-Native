import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'
import { styles, saveToStorage, renderBook } from './HomeScreen'

export default function ProfileScreen(props) {

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

  const pressRow = (cases) => {
    myBookList.map(a => { 
        let copyA = {...a}
        if (copyA.TravelSeq === cases.TravelSeq) {
          let index = myBookList.indexOf(a)
          myBookList.splice(index, 1)
        }
    }
    )
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
      <FlatList
        data={myBookList}
        renderItem={cases => renderBook(props, cases.item, pressRow)}
        keyExtractor={cases => cases.TravelSeq}
        style={{ backgroundColor:'rgba(255,255,255,0.1)'}}
      />
    </View>
  );
}