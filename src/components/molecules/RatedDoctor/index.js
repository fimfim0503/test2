import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, IconStar } from '../../../assests'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar} />
            <View style={styles.profile} >
                <Text style={styles.name} >Dr. Willy Indrawiliy, SpKJ</Text>
                <Text>Psikaiater</Text> 

            </View>
            <View style={styles.star}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </View>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:12
        
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10
    },
    star:{
        flexDirection:'row',
        
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary
    },
    profile:{
        flex:1
    }
    
})
