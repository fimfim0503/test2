import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assests'
import { colors, fonts } from '../../../utils'

const List = ({profile, name, des, type, onPress, icon }) => {
    const Icon = () => {
        if(icon === 'edit-profile') {
            return <IconEditProfile/>
        }
        if (icon === 'language') {
            return <IconLanguage/>
        }
        if (icon === 'rate'){
            return <IconRate/>
        }
        if (icon === 'help') {
            return <IconHelp/>
        }
        return <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} > 
        {icon ? <Icon/> : <Image source={profile} style={styles.avatar} /> }
            
            <View style={styles.content}>
                <Text style={styles.nama}>{name}</Text>
                <Text style={styles.dec} >{des}</Text>
            </View>
            {type === 'next' && <IconNext/> }
            
            
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    avatar:{
        width:46, 
        height:46,
        borderRadius:46/2,
        marginRight:12,
    },
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1, 
        borderBottomColor: colors.border,
        alignItems:'center',
        justifyContent:'space-between',
    },
    nama:{
        fontSize:16, 
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    dec:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    },
    content:{
        flex:1,
        marginLeft:16,
    }
})
