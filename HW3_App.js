import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';

var timer = null

export default function App()  {

  const [validCode, setValidCode] = useState('')

  var num = '000'+String(Math.floor(Math.random()*9999))
  const [code, setCode] = useState(num.slice(-4))
  const [time, setTime] = useState('59')
  const [image, setImage] = useState()
  const [result, setResult] = useState()

  const getCode = () => {
    clearInterval(timer)
    timer = setInterval(() => {
      setTime(time => time-1)
      if (time == '0'){
        num = '000'+String(Math.floor(Math.random()*9999))
        setTime('59')
        setCode(num.slice(-4))
      }
    }, 1000)
  }

  const enterButton = () => {
    Keyboard.dismiss()
    if (validCode == code){
      clearInterval(timer)
      setImage( <Image 
        style={{width:100, height:100, resizeMode:'cover'}} 
        source={{uri:'https://cdn1.iconfinder.com/data/icons/ui-colored-3-of-3/100/UI_3_-20-512.png'}}/>)
      setResult(<Text style={{fontSize:25, color:'green'}}>輸入正確</Text>)
    }else{
      setImage( <Image 
        style={{width:100, height:100, resizeMode:'cover'}} 
        source={{uri:'https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-02-512.png'}}/>)
      setResult(<Text style={{fontSize:25, color:'red'}}>輸入錯誤</Text>)
    }
  }

  getCode()

  return (
    <View style = {styles.container}>
      <View style={{position:'absolute', top:100}}>
        <Text style={{color:'grey', textAlign:'center'}}>
          {time}s
        </Text>
        <Text style={{fontSize:80, color: 'white', textAlign:'center', lineHeight:90}}>
          {code}
        </Text>
      </View>
      <TextInput
        style = {{height:50, width:300, borderRadius:0, borderColor:'darkgrey', backgroundColor:'white', color:'black', fontSize:28, textAlign:'center'}}
        maxLength = {4}
        onChangeText = {(text) => setValidCode(text)}
        keyboardType = {'numeric'}
        value = {validCode}
        secureTextEntry={true}
        autoFocus={true}
        onSubmitEditing={() => enterButton() }
      />
          
      <TouchableOpacity style={{backgroundColor:'#00aeef', borderRadius:20, width:200, height:40, justifyContent:'center', margin: 20}} 
        onPress = {() => enterButton()}
      >
        <Text style={{color:'white', textAlign:'center', fontSize:25}}>
          Enter
        </Text>
      </TouchableOpacity>
      <View style={{position:'absolute', bottom:100}}>
        {image}
        {result}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
