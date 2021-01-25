import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const Inputhat = () => {
    return (
        <View style={styles.container} >
            <TextInput style={styles.input} placeholder="tulis pesan disini" />
            <Button type="btn-icon-send" disable />
        </View>
    )
}

export default Inputhat

const styles = StyleSheet.create({
    input:{
        backgroundColor:colors.disable,
        padding:14,
        borderRadius:10,
        flex:1,
        marginRight:10,
        fontSize:14,
        fontFamily:fonts.primary.normal,
        maxHeight:45,

    },
    container:{
        padding:16,
        flexDirection:"row"

    }

})
