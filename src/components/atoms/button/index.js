import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon}) => {
    if(type === 'icon-only') {
        return (
            <IconOnly icon={icon} onPress={onPress} />
        )
    }
    return(
        <TouchableOpacity style={styles.container(type)} onPress={onPress} >
            <Text style={styles.Text(type)}
            >{title}</Text>
        </TouchableOpacity>
    ) 

}

export default Button
const styles = StyleSheet.create({
    container:(type)=>(
        {backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4', 
                paddingVertical:10, 
                borderRadius:10}
    ),
    Text:(type)=>(
        {
            fontSize:18,
            fontWeight:'600',
            fontFamily:'Nunito-SemiBold',
            textAlign:'center',
            color: type === 'secondary' ? '#112340' : 'white'
        }
    ),
})