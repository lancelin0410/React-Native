import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

var MOCKED_DATA = [
  {
    id: '1',
    title:'恭喜',
    note: '恭喜您！ 達成環島100次',
    date: '2020/01/28 14:00'
  },
  {
    id: '2',
    title:'審核通過',
    note: '您的會員身分認證，已經審核通過',
    date: '2020/02/02 12:00'
  },
  {
    id: '3',
    title:'撥款通知',
    note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
    date: '2020/02/17'
  },
  {
    id: '4',
    title:'恭喜',
    note: '恭喜您！ 達成慢跑10公里',
    date: '2020/03/28 14:00'
  },
  {
    id: '5',
    title:'審核通過',
    note: '您的會員身分認證，已經審核通過',
    date: '2020/04/02 12:00'
  },
  {
    id: '6',
    title:'撥款通知',
    note: '撥款通知：本公司已將款項$666666撥入到您的指定銀行帳戶',
    date: '2020/04/17'
  },
  {
    id: '7',
    title:'恭喜',
    note: '恭喜您！ 泳渡日月潭成功！',
    date: '2020/08/28 14:00'
  },
  {
    id: '8',
    title:'溫馨叮嚀',
    note: '溫馨小叮嚀，運動後不要忘了收操喔！',
    date: '2020/09/02 12:00'
  },
  {
    id: '9',
    title:'撥款通知',
    note: '撥款通知：本公司已將款項$6撥入到您的指定銀行帳戶',
    date: '2020/09/17'
  },
  {
    id: '10',
    title:'恭喜',
    note: '恭喜您！ 達成騎單車111次',
    date: '2020/09/28 14:00'
  },
  {
    id: '11',
    title:'通知',
    note: '您的免費體驗來囉！',
    date: '2020/10/02 12:00'
  },
  {
    id: '12',
    title:'撥款通知',
    note: '撥款通知：本公司已將款項$121212撥入到您的指定銀行帳戶',
    date: '2020/12/17'
  },
  {
    id: '13',
    title:'通知',
    note: '加油！',
    date: '2020/12/27'
  },
  {
    id: '14',
    title:'通知',
    note: '加油加油！',
    date: '2020/12/30'
  }
]

export var image = [
  require('../../assets/img/icon_0.png'),
  require('../../assets/img/icon_1.png'),
  require('../../assets/img/icon_2.png'),
  require('../../assets/img/icon_3.png'),
  require('../../assets/img/icon_4.png'),
  require('../../assets/img/icon_5.png'),
  require('../../assets/img/icon_6.png'),
  require('../../assets/img/icon_7.png'),
  require('../../assets/img/icon_8.png'),
  require('../../assets/img/icon_9.png'),
  require('../../assets/img/icon_10.png'),
  require('../../assets/img/icon_11.png'),
  require('../../assets/img/icon_12.png'),
  require('../../assets/img/icon_13.png')
]

export default function IntroScreen(props) {
  const [dataSource, setDataSource] = useState([])
  const noteList = useSelector(state=>state.noteList)

  useEffect(() => {
    // var book = noteList
    console.log(noteList)
    var book = MOCKED_DATA
    setDataSource(book)
  }, [])

  const showNoticeDetail = (cases) => {
    props.navigation.push('NoteDetail', {passProps: cases})
  }

  const renderBook = (cases) => {
    return (
      <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
        <View>
          <View style={styles.MainView}>
            <Image
              style={{width:40, height:40, resizeMode:'cover', opacity:0.9}}
              // source={{uri:'https://cdn1.iconfinder.com/data/icons/business-finance-18/512/Pencil_Pen_Write_Draw_Edit_Design_Sketch-512.png'}}
              source={image[cases.id%14]}
            />
            <View style={{flex:1, marginLeft:10}}>
              <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black',fontSize:15, marginTop:3}}>
                {cases.note}
              </Text>
              <View style={{flexDirection:'row', alignItems:'center', marginTop:3, marginBottom:2, marginLeft:3}}>
                <Ionicons name={'md-calendar'} size={20} color={'darkgray'}/>
                <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'gray', fontSize:13, marginLeft:8}}>
                  {cases.date}
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

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null, opacity:0.2}}
          source={{uri: 'https://img.51miz.com/Element/00/96/51/77/3d68d76e_E965177_c8d83f1b.png'}}
        />
      </View>
      {/* <View style={{position:'absolute', bottom:20, left:-53, alignItems: 'center', justifyContent: 'center', opacity:0.3}}>
        <Image
          style={{height:80, resizeMode:'contain'}}
          source={require('../../assets/img/main.png')}
        />
        <Image
          style={{width:50, height:50, resizeMode:'cover', transform: [{rotate: '15deg'}], marginTop:10}}
          source={{uri:'https://cdn1.iconfinder.com/data/icons/business-finance-18/512/Pencil_Pen_Write_Draw_Edit_Design_Sketch-512.png'}}
        />
      </View> */}
      <FlatList
        data={dataSource}
        renderItem={cases => renderBook(cases.item)}
        keyExtractor={cases => cases.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainView:{
    height: 80,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  seperator: {
    height: 1,
    backgroundColor: '#ffffff'
  },
  image: {
    width: 20,
    height: 40,
    opacity: 0.6
  }
});
