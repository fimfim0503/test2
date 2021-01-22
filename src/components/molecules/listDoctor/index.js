import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconNext } from '../../../assests'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile, name, des, type  }) => {
    return (
        <View style={styles.container}> 
            <Image source={profile} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.nama}>{name}</Text>
                <Text style={styles.dec} >{des}</Text>
            </View>
            {type === 'next' && <IconNext/> }
            
            
        </View>
    )
}

export default ListDoctor

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
        flex:1
    }
})
