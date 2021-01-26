import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import IsMe from './IsMe'
import Other from './Other'

const KhatItem = ({isMe}) => {
    if (isMe) {
        return <IsMe/>
    }

    return <Other/>

    // return (
    //     <View style={styles.container} >
    //         <View style={styles.chatcontent}>
    //             <Text style={styles.text}>Ibu Dokter, apakah ?</Text>
    //         </View>
    //         <Text style={styles.date}>4.20 AM</Text>
    //     </View>
    // )
}

export default KhatItem

const styles = StyleSheet.create({
    chatcontent:{
        maxWidth:'70%',
        padding:12,
        paddingRight:18,
        backgroundColor:'yellow',
        borderRadius:10,
        borderBottomRightRadius:0,
    },
    container:{
       
        marginBottom:20,
        alignItems:'flex-end',
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    date:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8,
    }
})
