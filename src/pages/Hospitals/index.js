import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assests'
import {ListHospital} from '../../components'
import { colors, fonts } from '../../utils'


const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background} >
                <Text style={styles.title} >Rumah Sakit Terdekat </Text>
                <Text style={styles.dec}>3 tersedia </Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah Sakit" name="RSU Dr. Slamet Garut" address="Jl. Rumah sakit No.12" pic={DummyHospital1} />
                <ListHospital type="Rumah Sakit Anak" name="Budi Waluyo" address="Jl. Rumah sakit No.12" pic={DummyHospital2} />
                <ListHospital type="Rumah Sakit Jiwa" name="Muhamadiyah" address="Jl. Rumah sakit No.12" pic={DummyHospital3} />

            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    background:{
        height:240,
        paddingTop:30
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.white,
        textAlign:'center',
    },
    dec:{
        fontSize:14,
        fontFamily:fonts.primary[300],
        color:colors.white,
        marginTop:6,
        textAlign:'center'
    },
    page:{
        backgroundColor:colors.secondary,
        flex:1
    },
    content:{
        backgroundColor:colors.white,
        borderRadius:20,
        flex:1,
        marginTop:-30,
        paddingTop:14
    }

})
