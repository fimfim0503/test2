import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const IsMe = () => {
    
        return (
            <View style={styles.container}>
                <View style={styles.chatKontent}>
                    <Text style={styles.text}> Ibu Dokter, APakah memakan jeruk boleh berdua </Text>
                </View>
                <Text style={styles.date}> 4.20 AM </Text>
            </View>
        )
    
}

export default IsMe

const styles = StyleSheet.create({
    chatKontent:{
        padding:12, 
        paddingRight:18,
        backgroundColor:colors.primary,
        maxWidth:'70%',
        borderRadius:10,
       borderBottomLeftRadius:0
    },
    container:{
        
        marginBottom:20,
        alignItems:'flex-start',
        paddingLeft:16
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.white,

    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8,
    }
})
