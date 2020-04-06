import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import SwitchSelector from "react-native-switch-selector";

import { Feather } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux'
import { changeProfile } from '../redux/action'

export default function DrinkScreen() {
  const disPatch = useDispatch()
  const newName = useSelector(state=>state.newName)
  const newIsBoy = useSelector(state=>state.newIsBoy)
  const [ isBoy, setIsBoy ] = useState(newIsBoy)
  const [ name, setName ] = useState(newName)
  
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image
          style={{flex:1, width:null, height:null, opacity:0.2}}
          source={{uri: 'https://img.599ku.com/element_min_new_pic/88/47/30/31/257833b9e89493051b69a405dcd118df.png'}}
        />
      </View>
      <View style={{position:'absolute', bottom:20, right:-53, alignItems: 'center', justifyContent: 'center', opacity:0.5}}>
        <Image
          style={{height:80, resizeMode:'contain'}}
          source={require('../../assets/img/main.png')}
        />
        <Image
          style={{width:50, height:50, resizeMode:'cover', transform: [{rotate: '15deg'}], marginTop:10}}
          source={{uri:'https://cdn1.iconfinder.com/data/icons/business-finance-18/512/Pencil_Pen_Write_Draw_Edit_Design_Sketch-512.png'}}
        />
      </View>
      <View style={{top:40, alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <TextInput
            style={{width:180, backgroundColor:'white', opacity:0.6, marginBottom:8, paddingRight:20, fontSize:25, textAlign:'center'}}
            placeholder={'暱稱'}
            placeholderTextColor={'gray'}
            onChangeText={(text)=>setName(text)}
            value={name}
            defaultValue={newName}
            onSubmitEditing={()=>disPatch(changeProfile(name, isBoy))}
            maxLength={10}
          />
          <Feather name="edit" size={25} color="green" style={{margin:5, marginLeft:-30, opacity:0.7}} />
        </View>
        <View style={{width:150, alignItems:'center'}}>
          <Image
            style={{width:200, height:200, marginBottom:10, resizeMode:'contain', opacity:0.7}}
            source={{uri: isBoy ? 'https://www.pinclipart.com/picdir/big/345-3457561_download-svg-download-png-japan-man-icon-clipart.png' : 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/512/traditional-japanese-woman-icon.png'}}
          />
          <SwitchSelector
            initial={newIsBoy ? 0 : 1}
            onPress={(value) => {
              setIsBoy(value)
              disPatch(changeProfile(name, value))
            }}
            fontSize={20}
            textColor={'gray'}
            selectedColor={'white'}
            borderColor={'gray'}
            backgroundColor={'rgba(255,255,255,0.5)'}
            hasPadding={true}
            options={[
              { label: "Boy", value: true, activeColor: 'dodgerblue' },
              { label: "Girl", value: false, activeColor: 'indianred'}
            ]}
          />
          {/* <TouchableOpacity 
            style={{width:100, marginTop:10, backgroundColor:'sienna'}} 
            onPress={()=>disPatch(changeProfile(name, isBoy))}>
            <Text style={{fontSize:25, textAlign:'center', color:'white'}}>確認</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15
  }
});
