import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../assests'
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils'

const chooseDoctor = () => {
    return (
        <View style={styles.page} >
            <Header type="dark" title="Pilih Dokter Anak" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Dr. Husodo Adi Dewo" des="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Dr. Husodo Adi Dewo" des="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Dr. Husodo Adi Dewo" des="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Dr. Husodo Adi Dewo" des="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Dr. Husodo Adi Dewo" des="Wanita" />
        </View>
    )
}

export default chooseDoctor

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    }
})

