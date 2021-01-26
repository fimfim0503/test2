import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem} from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Dokter Profile" onPress={()=>navigation.goBack()} />
            <Profile name="Dr. Willy" desc="Dokter Jiwa" />
            <Gap height={10} />
            
            <ProfileItem label="Alumnus" value="Unpad 2020"/>
            <ProfileItem label="Tempat Praktik" value="RSU Dr. Slamet Garut"/>
            <ProfileItem label="STR" value="2354354354543"/>
            <View style={styles.action} >
            <Button title="Start consultation" onPress={()=>navigation.navigate('chatting')} />

            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    action:{
        paddingHorizontal:40,
        paddingTop:23
    }
})
