import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DrinkDetailScreen(props) {
  const title = props.route.params.title
  const [flex, setFlex] = useState([0,0])
  const [color, setColor] = useState(['',''])
  const [content, setContent] = useState(['',''])
  const [text, setText] = useState('')

  useEffect (()=>{
    // props.navigation.setOptions({
    //   title: title
    // })
    if (title == '美式咖啡'){
      setFlex([2, 0])
      setColor(['aqua', 'aqua'])
      setContent(['水', null])
      setText('濃縮咖啡加上大量熱水。\n比普通的濃縮咖啡柔和。也可加冰飲用，風味獨樹一幟。')
    } else if (title == '拿鐵'){
      setFlex([2, 2])
      setColor(['wheat', 'snow'])
      setContent(['奶泡', '牛奶'])
      setText('由一份濃縮咖啡加上兩份以上的熱牛奶。')
    } else if (title == '卡布奇諾'){
      setFlex([1, 1])
      setColor(['wheat', 'snow'])
      setContent(['奶泡', '牛奶'])
      setText('在偏濃的咖啡上，倒入以蒸汽發泡的牛奶，此時咖啡的顏色就像卡布奇諾教會修士深褐色外衣上覆的頭巾一樣。')
    } else if (title == '咖啡歐蕾'){
      setFlex([2, 0])
      setColor(['snow', 'snow'])
      setContent(['牛奶', null])
      setText('在咖啡中混入大量的牛奶，法國人喜歡用碗盛裝，當成早餐，配著法國麵包食用。')
    } else if (title == '摩卡'){
      setFlex([0.5, 2])
      setColor(['snow', 'chocolate'])
      setContent(['牛奶', '巧克力'])
      setText('濃縮咖啡加入巧克力，調成香濃的摩卡咖啡。')
    } else if (title == '焦糖瑪奇朵'){
      setFlex([0.4, 1])
      setColor(['peru', 'wheat'])
      setContent(['焦糖', '奶泡'])
      setText('濃縮咖啡中加入微量奶泡，再淋上一層厚厚的焦糖。\n能一次品嘗到咖啡的苦澀、香草的香氣與焦糖的重甜等多層次味覺體驗。')
    } 
  }, [])

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
      <View style={{height:64, marginTop:25, marginBottom:13, borderStyle:'solid', borderWidth:2, borderColor:'mintcream', borderRadius: 10, padding:2}}>
        <Text style={[styles.text,{fontSize: 50, fontWeight:'bold', textAlign: 'center', letterSpacing:10, lineHeight:60}]}>{title}</Text>
      </View>
      <View>
        <View style={{width:150, height:150, borderStyle:'solid', borderWidth:25, borderColor: 'white', borderRadius:75, position:'absolute', top:60, right:-10}}></View>
        <View style={{width:200, height:210, borderStyle:'solid', borderWidth:5, borderTopWidth:0, borderColor: 'white', borderRadius:20, margin:30, overflow:'hidden', left:-15}}>
          <View style={{flex:flex[0], backgroundColor:color[0], alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>{content[0]}</Text>
          </View>
          <View style={{flex:flex[1], backgroundColor:color[1], alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>{content[1]}</Text>
          </View>
          <View style={{flex:1, backgroundColor:'maroon', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>濃縮咖啡</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.text, {fontSize:20, margin:15}]}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex:1, 
    width:null, 
    height:null, 
    resizeMode:'cover'
  },
  text:{
    fontSize: 28,
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
