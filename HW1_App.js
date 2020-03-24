import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  const [phoneNum, setPhoneNum] = useState('')
  const [text0, setText0] = useState('')
  const [style0, setStyle0] = useState()

  const vaildPhoneNum = () => {
    if (phoneNum.length == 10 && phoneNum.indexOf('09') == 0) {
      setText0('輸入成功！\n您輸入的手機號碼是：\n'+phoneNum)
      setStyle0({fontSize:22, textAlign: 'center', marginTop: 20, lineHeight:30, color: 'white'})
    }
    else {
      setText0('手機號碼輸入錯誤！')
      setStyle0({fontSize:25, textAlign: 'center', marginTop: 20, lineHeight:30, color: '#FFBD9D'})
    }
    console.log(phoneNum)
  }

  return (
    <View style={styles.container}>
      <Image
        style = {{width: 200, height: 200, margin: 50, resizeMode: 'cover'}}
        source = {{uri: 'https://cdn0.iconfinder.com/data/icons/finance-cool-vector-2/128/95-512.png'}}
      />
      <TextInput
        style = {styles.textinput}
        onChangeText = {(text) => setPhoneNum(text)}
        value = {phoneNum}
        onSubmitEditing = {() => vaildPhoneNum()}
        maxLength = {10}
        placeholder = '請輸入手機號碼'
        keyboardType = {'numeric'}
        // 密文
        // secureTextEntry = {true}
        autoFocus = {true}
      />
      <Text style={style0}>{text0}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F9D9D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textinput: {
    height: 50, 
    width: 300, 
    borderRadius: 0, 
    borderColor: 'darkgrey', 
    borderWidth: 5, 
    backgroundColor: 'white', 
    color: 'grey', 
    fontSize: 28, 
    textAlign: 'center'
  },
});
