import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as StorageHelper from '../helpers/StorageHelper'

var i = 0

export const saveToStorage = async(getMyBooks) => {
  try {
    await StorageHelper.setMySetting('myList', JSON.stringify(getMyBooks))
  } catch (err) {
    console.log(err)
  }
  
}

export const renderBook = (props, cases, pressRow) => {
  const showNoticeDetail = () => {
    props.navigation.push('HomeDetail', {passProps: cases})
  }
  
  return (
    <TouchableOpacity onPress={()=>showNoticeDetail(props, cases)}>
      <View>
        <View style={styles.MainView}>
          <TouchableOpacity onPress={()=>pressRow(cases)}>
            <Image
              style={styles.thumbnail}
              source={{uri: cases.PhotoUrl ? cases.PhotoUrl : 'https://png.pngtree.com/element_origin_min_pic/17/01/05/589485cf37513f57738db6da1e3a5c0a.jpg'}}
            />
            <View style={{position:'absolute', left:50, top:45, opacity:0.8}}>
              { cases.addToMyList ? <AntDesign name={'heart'} size={28} color={'red'}/> : <AntDesign name={'hearto'} size={30} color={'snow'}/> }
            </View>
          </TouchableOpacity>
          <View style={{flex:1, marginLeft:9}}>
            <Text ellipsizeMode='tail' numberOfLines={2} style={{color:'black',fontSize:18, marginTop:5}}>
              {cases.Title}
            </Text>
            <View style={{flexDirection:'row', alignItems:'baseline', marginTop:2, marginBottom:5}}>
              <AntDesign name={'star'} size={20} color={'limegreen'}/>
              <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'dimgray', fontSize:15, marginLeft:5, textShadowColor:'white', textShadowRadius:5, textShadowOffset:{width:0.5, height:-0.5}}}>
                {cases.TravelType.substr(0, 4)}
              </Text>
            </View>
          </View>
          <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image}/>
        </View>
        <View style={styles.seperator}/>
      </View>
    </TouchableOpacity>
  )
}

export default function HomeScreen(props) {
  const [dataSource, setDataSource] = useState([])
  const [myBookCount, setMyBookCount] = useState(0)

  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      fetchData()
    })
    return unsubscribe
  },[myBookCount])

  useEffect(()=>{
    let getAll=[]

    dataSource.map(a=>{
      if ( a.addToMyList ) {
        getAll.push(a)
      }
    })
    if (i > 0){
      saveToStorage(getAll)
    }
    i = i + 1
  })

  const loadStorage = async(responseData) => {
    let bookGet = await StorageHelper.getMySetting('myList')
    bookGet = JSON.parse(bookGet)
    if (bookGet.length == 0) {
      setDataSource(responseData)
    } else {
      const newDatas = responseData.map(a => { 
        let copyA = {...a}
        for (var i = 0; i < bookGet.length; i++) {
          if (copyA.TravelSeq === bookGet[i].TravelSeq) {
            copyA.addToMyList = true
          }
        }
        return copyA
      })
      setDataSource(newDatas)
      setMyBookCount(newDatas.length)
    }   
  }

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/RedirectService.aspx?UnitId=B79&url=https%3a%2f%2fdata.coa.gov.tw%2fService%2fOpenData%2fRuralTravelData.aspx'
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        // setDataSource(responseData)
        loadStorage(responseData)
      })
      .catch((err)=>{
        console.log('error 是', err)
      })
  }

  const pressRow = (cases) => {
    const newDatas = dataSource.map(a => { 
        let copyA = {...a}
        if (copyA.TravelSeq === cases.TravelSeq) {
          copyA.addToMyList = !copyA.addToMyList
        }

        return copyA
    }
    )
    setDataSource(newDatas)
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
        data={dataSource}
        renderItem={(cases) => renderBook(props, cases.item, pressRow)}
        keyExtractor={cases => cases.TravelSeq}
        style={{ backgroundColor:'rgba(255,255,255,0.1)'}}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  MainView:{
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    padding: 8
  },
  seperator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  image: {
    width: 20,
    height: 40
  },
  thumbnail: {
    width:70,
    height:70,
    borderRadius:35,
    marginRight:10
  }
});
