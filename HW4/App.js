import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MyButton from './src/components/Button/MyButton.js'

// var i = 0

export default function App() {

  const [backGround, setBackGround] = useState()
  const [color, setColor] = useState('black')
  const [text, setText] = useState('勵志金句產生器')

  const printMyButton = () => {
    setColor('white')
    setText('讀取中')
    var i = Math.floor(Math.random()*29+1)
    // i+=1
    // if(i==31){
    //   i = 1
    // }
    setBackGround('https://x8a7r9m5.stackpathcdn.com/wp-content/uploads/2017/09/'+i+'-daily-dose-nobel-peace-prize-winners-quotes.jpg')
    console.log(i)
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop:100,marginBottom:100}}>
      <Text style={{fontSize:40, textAlign:'center', color:'grey'}}>{text}</Text>
      </View>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null}}
          source={{uri: backGround}}
        />
      </View>

      <MyButton backgroundColor={null} fontSize={40} color={color} myTitle={'Next'} myOnPress={()=>printMyButton()}/>
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
