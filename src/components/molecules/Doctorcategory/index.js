import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILcatUmum } from '../../../assests'
import { colors, fonts } from '../../../utils'

const Doktercategory = () => {
    return (
        <View style={styles.container}>
            <ILcatUmum style={styles.illustration} />
            <Text style={styles.label}>Saya Butuh </Text>
            <Text style={styles.category} >Dokter Umum </Text>
        </View>
    )
}

export default Doktercategory

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor:colors.cardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:100,
        height:130
    },
    illustration:{
        marginBottom:28
    },
    label:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.primary
    },
    category:{
        fontSize:12,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    }
})
