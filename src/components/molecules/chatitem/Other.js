import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor9 } from '../../../assests'
import { colors, fonts } from '../../../utils'

const IsMe = () => {
    
        return (
            <View style={styles.container}>
                <Image source={DummyDoctor9} style={styles.avatar} />
                <View>
                <View style={styles.chatKontent}>
                    <Text style={styles.text}> Iya Bisa daf adfa adfa adfadf adfa dadfaadfa adf afd dfadf </Text>
                </View>
                <Text style={styles.date}> 4.20 AM </Text>

                </View>
            </View>
        )
    
}

export default IsMe

const styles = StyleSheet.create({
    chatKontent:{
        padding:12, 
        paddingRight:18,
        backgroundColor:colors.primary,
        maxWidth:'80%',
        borderRadius:10,
       borderBottomLeftRadius:0
    },
    container:{
        
        marginBottom:20,
        alignItems:'flex-end',
        paddingLeft:16,
        flexDirection:'row',
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
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:30/2,
        marginRight:12
    }
})
