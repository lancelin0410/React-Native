import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

import { saveToStorage } from './ProfileScreen'
import * as StorageHelper from '../helpers/StorageHelper'

export default function EditScreen(props) {
  const [ title, setTitle ] = useState('')
  const [ date, setDate ] = useState(moment().format('YYYY/MM/DD HH:mm'))
  const [ note, setNote ] = useState('')
  const [ isBoy, setIsBoy ] = useState(true)
  const [ name, setName ] = useState('隨筆')
  const [ dataSource, setDataSource ] = useState([{id:0, title: '歡迎', date: '-', note: '歡迎使用隨筆，紀錄您的感動時刻！',}])
  
  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      loadStorage()
    })
    return unsubscribe

  })

  const loadStorage = async() => {
    let newName = await StorageHelper.getMySetting('name')
    let newIsBoy = await StorageHelper.getMySetting('isBoy')
    let newDataSource = await StorageHelper.getMySetting('myList')
    if (newName){
      setName(newName)
    }
    if (newIsBoy != ''){
      setIsBoy(JSON.parse(newIsBoy))
    }
    if (newDataSource){
      setDataSource(JSON.parse(newDataSource))
    }
  }

  const pushData = (title, date, note) => {
    let data={
      id: dataSource.length != 0 ? dataSource[dataSource.length - 1].id+1 : 0,
      title: title, 
      date: date, 
      note: note,
    }
    dataSource.push(data)
    saveToStorage('myList', JSON.stringify(dataSource))
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null}}
          source={{uri: 'https://images.669pic.com/element_min_new_pic/22/82/22/44/64a785e80f279c0b6caeeb0efcff6862.png'}}
        />
      </View>
      <View style={{top:70}}>
        <Text style={{fontSize:28, color:'dimgray', marginBottom:30, marginLeft:8, borderBottomWidth:1, borderBottomColor: isBoy ? 'dodgerblue' : 'indianred'}}>Hi, {name}</Text>
        <TextInput
          style={{width:300, borderBottomWidth:1, borderColor:'darkgray', paddingLeft:10, marginBottom:5, fontSize:25}}
          placeholder={'標題'}
          placeholderTextColor={'gray'}
          onChangeText={(text)=>setTitle(text)}
          value={title}
        />
        <View style={{flexDirection:'row', marginBottom:5, alignItems:'center', borderBottomWidth:1, borderColor:'darkgray'}}>
          <Text style={{fontSize:25, color:'gray', marginLeft:10}}>日期</Text>
          <DatePicker
            style={{width: 240}}
            date={date}
            getDateStr={(date) => {
              const formatDate = moment(date).format('YYYY/MM/DD HH:mm')
              return formatDate
           }}
            mode="datetime"
            placeholder="日期"
            format="YYYY/MM/DD HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: 5,
                top: 4,
                marginRight: 0
              },
              dateInput: {
                marginLeft: 5,
                paddingRight:73,
                // marginRight: 36,
                borderWidth: null
              },
              dateText: {
                textAlign:'center',
                fontSize:18
              }
            }}
            onDateChange={(date) => setDate(date)}
          />
          <TouchableOpacity style={{position:'absolute', right:40, backgroundColor:'dodgerblue', padding:1}} onPress={()=>{setDate(moment().format('YYYY/MM/DD HH:mm'))}}>
            <Text style={{color:'white', fontWeight:'bold'}}>NOW</Text>
          </TouchableOpacity>
        </View>
        {/* <TextInput
          style={{width:300, borderBottomWidth:1, borderColor:'darkgray', paddingLeft:10, marginBottom:3, fontSize:25}}
          placeholder={'日期'}
          placeholderTextColor={'gray'}
        /> */}
        <TextInput
          style={{width:300, borderWidth:1, borderColor:'darkgray', paddingLeft:10, marginBottom:3, fontSize:25, textAlignVertical: 'top'}}
          placeholder={'內容'}
          placeholderTextColor={'gray'}
          onChangeText={(text)=>setNote(text)}
          multiline={true}
          numberOfLines={5}
          scrollEnabled={true}
          value={note}
        />
        <TouchableOpacity style={{width:300, backgroundColor:'sienna'}} onPress={() => pushData(title, date, note)}>
          <Text style={{fontSize:25, textAlign:'center', color:'white'}}>確認</Text>
        </TouchableOpacity>
        <View style={{marginTop:18, alignItems: 'center', justifyContent: 'center', opacity:0.7}}>
          <Image
            style={{width:220, height:200, position:'absolute', resizeMode:'center', bottom:0, opacity:0.6}}
            source={{uri:isBoy ? 'https://pic.90sjimg.com/design/01/38/09/44/594cd4b00ff8d.png' : 'https://pic.90sjimg.com/design/01/45/85/01/5905a70bd9592.png'}}
          />
          <Image
            style={{height:100, resizeMode:'contain'}}
            source={require('../../assets/img/main.png')}
          />
          <Image
            style={{width:50, height:50, resizeMode:'cover', transform: [{rotate: '15deg'}], marginTop:10}}
            source={{uri:'https://cdn1.iconfinder.com/data/icons/business-finance-18/512/Pencil_Pen_Write_Draw_Edit_Design_Sketch-512.png'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    // justifyContent: 'center'
  },
});
