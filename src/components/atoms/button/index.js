import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { colors } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon, disable}) => {
    if (type === 'btn-icon-send'){
        return <BtnIconSend disable={disable} />
    }
    if(type === 'icon-only') {
        return (
            <IconOnly icon={icon} onPress={onPress} />
        )
    }

    if(disable) {
        return(
            <View style={styles.disablebg}  >
                <Text style={styles.diabletext}
                >{title}</Text>
            </View>
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
    disablebg:{
        paddingVertical:10,
        borderRadius:10,
        backgroundColor:colors.button.disable.background,

    },
    diabletext:{
        fontSize:18,
        fontWeight:'600',
        fontFamily:'Nunito-SemiBold',
        textAlign:'center',
        color:colors.button.disable.Text
    },
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