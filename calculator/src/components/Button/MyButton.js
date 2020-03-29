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
            style={{backgroundColor:props.backgroundColor, margin:5, padding:5, width:props.size*props.fontSize*1.5, height:props.fontSize*1.5, borderRadius:props.fontSize, borderStyle:'solid', borderWidth:1}} 
            onPress={props.myOnPress}>
            <Text style={{color:props.color, fontSize:props.fontSize, textAlign:'center', lineHeight:props.fontSize*1.25, fontWeight:'bold'}}>
                {props.myTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default MyButton

MyButton.propTypes={
    myTitle: PropTypes.string.isRequired,
    myOnPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number
}

MyButton.defaultProps={
    myTitle: '0',
    fontSize: 47,
    color: 'white',
    size: 1
}