import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStar } from '../../../assests'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({onPress, nama, avatar, des}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.profile} >
                <Text style={styles.name} >{nama}</Text>
                <Text>{des}</Text> 

            </View>
            <View style={styles.star}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:12
        
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        alignItems:'center'
    },
    star:{
        flexDirection:'row',
        
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    },
    profile:{
        flex:1
    }
    
})
