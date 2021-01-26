import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Header, Inputchat, KhatItem} from '../../components'
import { colors, fonts } from '../../utils'

const chatting = ({navigation}) => {
    return (
        <View style={styles.page} onPress={()=>navigation.goback('chatting')} >
            <Header type="dark-profile" title ="Udin Mulyadin" />
            <Text style={styles.chatDate} >Senin, 21 maret 2021</Text>
            <View style={styles.content}>
                <KhatItem isMe/>
                <KhatItem/>
                <KhatItem isMe/>
                
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
