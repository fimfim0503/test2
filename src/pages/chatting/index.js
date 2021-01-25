import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Header, Inputchat, KhatItem} from '../../components'
import { colors, fonts } from '../../utils'

const chatting = () => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title ="Udin Mulyadin" />
            <Text style={styles.chatDate} >Senin, 21 maret 2021</Text>
            <View style={styles.content}>
                <KhatItem/>
                <KhatItem/>
                <KhatItem/>
                <KhatItem/>
            </View>
           <Inputchat/>
            
        </View>
    )
}

export default chatting

const styles = StyleSheet.create({
    chatDate:{
        fontSize:11,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginVertical:20,
        textAlign:'center'
    },
    page:{
        backgroundColor:colors.white,
        flex:1,
    },
    content:{
        flex:1,
    }
})
