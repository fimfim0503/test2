import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Header, Inputchat, KhatItem} from '../../components'

const chatting = () => {
    return (
        <View>
            <Header title ="Udin Mulyadin" />
            <Text>Senin, 21 maret 2021</Text>
            
           <KhatItem/>
           <KhatItem/>
           <KhatItem/>
           <KhatItem/>

           <Inputchat/>
            
        </View>
    )
}

export default chatting

const styles = StyleSheet.create({})
