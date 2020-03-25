import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

var timer

export default function App() {
  const timesText = (time) => {
    const mins = Math.floor(time / 60)
    const secs = time - mins * 60
    return ['0'+mins, '0'+secs]
  }

  const [times, setTimes] = useState(0)
  const [mins, secs] = timesText(times)
  const [active, setActive] = useState(false)
  const [buttonText, setbuttonText] = useState('Start')
  const [colors, setColors] = useState('#FCFCFC')

  const startButton = () => {
    if(!active) {
      timer = setInterval(()=>{
        setTimes(times => times+1)
      }, 1000)
      setActive(true)
      setbuttonText('Pause')
    } else{
      clearInterval(timer)
      setActive(false)
      setbuttonText('Start')
    }
  }

  const stopButton = () => {
    clearInterval(timer)
    setTimes(0)
    setbuttonText('Start')
  }

  const changeColors = () => {
    var colorsList = ['#FCFCFC', '#ADFEDC', '#BBFFFF', '#FFBD9D', '#FFFFA']
    var i = Math.floor(Math.random() * 6)
    while (colorsList[i] == colors){
      i = Math.floor(Math.random() * 6)
    }
    setColors(colorsList[i])
  }

  return (
    <View style={[styles.container, {backgroundColor: colors}]}>
      <View style={{width:300, height:120, backgroundColor: '#0080FF', borderStyle: 'solid', borderWidth:5, borderColor: '#D9FFFF', borderRadius:20, margin:5}}>
        <Text style={{fontSize:100, color:'white', textAlign:'center', lineHeight:120}}>
          {mins.slice(-2)+':'+secs.slice(-2)}
        </Text>
      </View>
      <View style={{width:250, flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.button} onPress={()=>startButton()}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>stopButton()}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
     <TouchableOpacity style={[styles.button, {width:250, marginTop:10, backgroundColor:'white', borderColor: 'gray', borderStyle:'solid', borderWidth:1}]} onPress={()=>changeColors()}>
       <Text style={styles.buttonText}>Change color</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    padding:5,
    backgroundColor:'#FFD306',
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
  }
});
