import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

var MOCKED_DATA = [
  {
    id: '1',
    note: '恭喜您！ 達成環島100次',
    date: '2020/01/28 14:00'
  },
  {
    id: '2',
    note: '您的會員身分認證，已經審核通過',
    date: '2020/02/02 12:00'
  },
  {
    id: '3',
    note: '撥款通知：本公司已將款項$123456撥入到您的指定銀行帳戶',
    date: '2020/02/17'
  },
  {
    id: '4',
    note: '恭喜您！ 達成慢跑10公里',
    date: '2020/03/28 14:00'
  },
  {
    id: '5',
    note: '您的會員身分認證，已經審核通過',
    date: '2020/04/02 12:00'
  },
  {
    id: '6',
    note: '撥款通知：本公司已將款項$666666撥入到您的指定銀行帳戶',
    date: '2020/04/17'
  },
  {
    id: '7',
    note: '恭喜您！ 泳渡日月潭成功！',
    date: '2020/08/28 14:00'
  },
  {
    id: '8',
    note: '溫馨小叮嚀，運動後不要忘了收操喔！',
    date: '2020/09/02 12:00'
  },
  {
    id: '9',
    note: '撥款通知：本公司已將款項$6撥入到您的指定銀行帳戶',
    date: '2020/09/17'
  },
  {
    id: '10',
    note: '恭喜您！ 達成騎單車111次',
    date: '2020/09/28 14:00'
  },
  {
    id: '11',
    note: '您的免費體驗來囉！',
    date: '2020/10/02 12:00'
  },
  {
    id: '12',
    note: '撥款通知：本公司已將款項$121212撥入到您的指定銀行帳戶',
    date: '2020/12/17'
  }
]

export default function HomeScreen(props) {

  const [food, setFood] = useState('candy')
  const [dataSource, setDataSource] = useState([])

  const changeFood = (foodGet) => {
    setFood(foodGet)
  }

  useEffect(() => {
    // var book = MOCKED_DATA
    // setDataSource(book)
    fetchData()
  },[])

  const fetchData = () => {
    const REQUEST_URL = 'https://data.coa.gov.tw/Service/RedirectService.aspx?UnitId=B79&url=https%3a%2f%2fdata.coa.gov.tw%2fService%2fOpenData%2fRuralTravelData.aspx'
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        setDataSource(responseData)
      })
      .catch((err)=>{
        console.lpg('error 是', err)
      })
  }

  const showNoticeDetail = (cases) => {
    props.navigation.push('HomeDetail', {passProps: cases})
  }

  const renderBook = (cases) => {
    return (
      <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
        <View>
          <View style={styles.MainView}>
            <Image
              style={styles.thumbnail}
              source={{uri: cases.PhotoUrl ? cases.PhotoUrl : 'https://png.pngtree.com/element_origin_min_pic/17/01/05/589485cf37513f57738db6da1e3a5c0a.jpg'}}
            />
            <View style={{flex:1}}>
              <Text ellipsizeMode='tail' numberOfLines={2} style={{color:'black',fontSize:18, marginTop:5}}>
                {cases.Title}
              </Text>
              <View style={{flexDirection:'row', alignItems:'baseline', marginTop:2, marginBottom:5}}>
                <AntDesign name={'star'} size={20} color={'limegreen'}/>
                <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'dimgray', fontSize:15, marginLeft:5}}>
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

  return (
    <View>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null}}
          source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-natural-scenery-cartoon-beautiful-rural-scene-image_209648.jpg'}}
        />
      </View>
      <FlatList
        data={dataSource}
        renderItem={cases => renderBook(cases.item)}
        keyExtractor={cases => cases.id}
        style={{ backgroundColor:'rgba(255,255,255,0.1)'}}
      />
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
