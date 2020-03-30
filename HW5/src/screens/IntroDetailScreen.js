import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function IntroDetailScreen(props) {
  const title = props.route.params.title
  const [image, setImage] = useState()
  
  useEffect (()=>{
    props.navigation.setOptions({
      title: title
    })
    if (title == '咖啡起源'){
      setImage('https://2.bp.blogspot.com/-XBrTQLUowII/UmDg_BLPvkI/AAAAAAAAXLs/4eKMaYkrb84/s1600/p205256231-2.jpg')
    } else if (title == '種類成分'){
      setImage('https://www.promesain.com/wp-content/uploads/2018/07/Coffee-beans.jpg')
    } else if (title == '沖煮方式'){
      setImage('https://wealmax.com/wp-content/uploads/2018/08/photo-3.jpg')
    }
  }, [])

  const changeText = (title) => {
    if (title == '咖啡起源'){
      return <Text style={{fontSize:19, lineHeight:23}}>
        ［傳說一］{'\n'}
        相傳奧羅莫人的祖先是首個見證到咖啡樹令人振奮的效果。{'\n\n'}
        ［傳說二］{'\n'}
        九世紀的衣索比亞西南部高原，牧羊人發現他的羊吃了植物種子(咖啡豆)後，變得興奮活潑，繼而發現咖啡；{'\n\n'}
        ［傳說三］{'\n'}
        當地發生野火，燒焦了咖啡林，經過燒烤後的咖啡香味引起居民注意。人們最初咀嚼咖啡豆來提神，後來烘烤磨碎摻入麵粉做成麵包，作為勇士的食物。{'\n\n'}
        這些傳說故事都缺乏歷史文件佐證，只出現於後世的旅遊傳記中。據說最初經栽培的咖啡是源自衣索比亞的哈勒爾。
      </Text>
    } else if (title == '種類成分'){
      return <Text style={{fontSize:20, lineHeight:30}}>
        ［ 種類 ］{'\n'}
        1. 阿拉比卡（Coffee Arabica）{'\n'}
        2. 羅布斯塔（Coffee Robusta）{'\n'}
        3. 賴比瑞亞（Coffee Liberica）{'\n'}
        其中阿拉比卡主要用於一般飲用，而羅布斯塔主要用於即溶咖啡。{'\n\n'}
        ［ 成分 ］{'\n'}
        蔗糖、咖啡因、綠原酸、脂肪、酸性脂肪、揮發性脂肪、蛋白質、纖維和礦物質。
      </Text>
    } else if (title == '沖煮方式'){
      return <Text style={{fontSize:20, lineHeight:30}}>
        ［ 磨製 ］{'\n'}
        咖啡粉的好壞對接下來的烹製過程有非常重要的影響，磨製方式也要和烹製方法匹配。{'\n\n'}
        咖啡豆的磨製方法有：{'\n'}
        研磨、打磨和臼磨。{'\n\n'}
        ［ 萃取 ］{'\n'}
        所有的咖啡都是由磨好的咖啡粉和熱水製出的。{'\n\n'}
        咖啡的烹製歸類為：{'\n'}
        浸泡法、煎煮法、循環法、滴濾法、虹吸法和加壓法。
      </Text>
    }
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
      <Image
          style={{flex:1, width:null, height:null, opacity:0.4, resizeMode:'cover'}}  
          source={{uri: image}}
        />
      </View>
      <View style={{margin:15}}>
        {changeText(title)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
