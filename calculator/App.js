import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/Button/MyButton.js'

var operator = null
var num1 = null
var num2 = null

var isOperator = false

export default function App() {

  const [number, setNumber] = useState('0')

  const pressButtom = (title)=>{
    if (title == 'AC'){
      title = '0'
      num1 = null
      num2 = null
      operator = null
      isOperator = false
    } else if (title == '=' || title == '÷' || title == '×' || title == '+' || title == '-'){
      if (title != '='){
        operator = title
        if (num1 == null || isOperator){
          title = number
        } else {
          if (title == '÷'){
            title = Number(num1)/Number(number)
          } else if (title == '×'){
            title = Number(num1)*Number(number)
          } else if (title == '+'){
            title = Number(num1)+Number(number)
          } else if (title == '-'){
            title = Number(num1)-Number(number)
          }
          console.log(isOperator)
          console.log(num1+operator+number)
        }
      } else {
        if (num1 == null){
          title = number
        } else {
          if (isOperator) {
            if (operator == '÷'){
              title = Number(number)/Number(num2)
            } else if (operator == '×'){
              title = Number(number)*Number(num2)
            } else if (operator == '+'){
              title = Number(number)+Number(num2)
            } else if (operator == '-'){
              title = Number(number)-Number(num2)
            }
            // console.log(number+operator+num2)
          } else {
            if (operator == '÷'){
              title = Number(num1)/Number(number)
            } else if (operator == '×'){
              title = Number(num1)*Number(number)
            } else if (operator == '+'){
              title = Number(num1)+Number(number)
            } else if (operator == '-'){
              title = Number(num1)-Number(number)
            }
            num2 = number
            // console.log(num1+operator+number)
          } 
        }
      }
      isOperator = true
      num1 = title
    } else if (number.length >= 7 || number == 'Error'){
      if (!isOperator) {
        title = number
        console.log('No')
      }
    } else if (title == '.' ){
     if (number.indexOf(title) == -1){
        title = number+title
      } else {
        title = number
      }
    } else if (title == '±'){
      if (number == '0'){
        title = '0'
      } else if (number.charAt(0) == '-'){
        title = number.substring(1,)
      } else {
        title = '-'+number
      }
    } else if (number != '0' && !isOperator){
      title = number+title
    } else {
      isOperator = false
    }
    if (String(title).indexOf('.') != -1){
      title = String(title).substring(0,7)
      console.log(title)
    }
    setNumber(String(title).length > 7 ? 'Error' : title)
    // console.log(String(number).length)
  }

  return (
    <View style={styles.container}>
      <View style={{width:310, marginTop:50, marginBottom:30}}>
        <Text style={{fontSize:70, color: 'white', textAlign:'right'}}>{number}</Text>
      </View>
      <View style={styles.keyborad}>
        <MyButton backgroundColor={'darkgray'} color={'crimson'} size={2.1} myTitle={'AC'} myOnPress={()=>pressButtom('AC')}/>
        {/* <MyButton backgroundColor={null} myTitle={''}/> */}
        <MyButton backgroundColor={'darkgray'} myTitle={'±'} myOnPress={()=>pressButtom('±')}/>
        <MyButton backgroundColor={'orange'} myTitle={'÷'} myOnPress={()=>pressButtom('÷')}/>
      </View>
      <View style={styles.keyborad}>
        <MyButton backgroundColor={'dimgray'} myTitle={'7'} myOnPress={()=>pressButtom('7')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'8'} myOnPress={()=>pressButtom('8')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'9'} myOnPress={()=>pressButtom('9')}/>
        <MyButton backgroundColor={'orange'} myTitle={'×'} myOnPress={()=>pressButtom('×')}/>
      </View>
      <View style={styles.keyborad}>
        <MyButton backgroundColor={'dimgray'} myTitle={'4'} myOnPress={()=>pressButtom('4')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'5'} myOnPress={()=>pressButtom('5')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'6'} myOnPress={()=>pressButtom('6')}/>
        <MyButton backgroundColor={'orange'} myTitle={'-'} myOnPress={()=>pressButtom('-')}/>
      </View>
      <View style={styles.keyborad}>
        <MyButton backgroundColor={'dimgray'} myTitle={'1'} myOnPress={()=>pressButtom('1')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'2'} myOnPress={()=>pressButtom('2')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'3'} myOnPress={()=>pressButtom('3')}/>
        <MyButton backgroundColor={'orange'} myTitle={'+'} myOnPress={()=>pressButtom('+')}/>
      </View>
      <View style={styles.keyborad}>
        <MyButton backgroundColor={'dimgray'} myTitle={'0'} myOnPress={()=>pressButtom('0')}/>
        <MyButton backgroundColor={'dimgray'} myTitle={'.'} myOnPress={()=>pressButtom('.')}/>
        <MyButton backgroundColor={'orange'} myTitle={'='} size={2.1} myOnPress={()=>pressButtom('=')}/>
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
  keyborad:{
    flexDirection: 'row'
  }
});
