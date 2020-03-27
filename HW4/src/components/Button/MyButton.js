import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

// function MyButton(props) {
//     return (
//         <TouchableOpacity onPress={props.myOnPress}>
//             <Text>
//                 {props.myTitle}
//             </Text>
//         </TouchableOpacity>
//     )
// }

const MyButton = props => {
    return (
        <TouchableOpacity
            style={{backgroundColor:props.backgroundColor, margin:5, padding:5, width:props.fontSize*3, height:props.fontSize*3, borderRadius:props.fontSize*1.5, borderStyle:'solid', borderColor: props.color, borderWidth:1}} 
            onPress={props.myOnPress}>
            <Text style={{color:props.color, fontSize:props.fontSize, textAlign:'center', lineHeight:props.fontSize*2.5, fontWeight:'bold'}}>
                {props.myTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default MyButton

MyButton.PropTypes={
    myTitle: PropTypes.string.isRequired,
    myOnPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number
}

MyButton.defaultProps={
    myTitle: 'Click',
    fontSize: 22
}