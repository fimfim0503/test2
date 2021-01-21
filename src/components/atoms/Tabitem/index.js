import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconDoctor, IconDoctorActive, IconHospiitals, IconHospiitalsActive, IconMessages, IconMessagesActive } from '../../../assests'
import { colors } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = ()=> {
        if (title === 'Doctor'){
            return active ? <IconDoctorActive/> : <IconDoctor/>
        }
        if (title === 'Messages') {
            return active ? <IconMessagesActive/> : <IconMessages/>
        }
        if ( title === 'Hospitals') {
            return active ? <IconHospiitalsActive/> : <IconHospiitals/>
        }
        return <IconDoctor/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
            <Icon/>
            <Text style={styles.text(active)} >{title} </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    text:(active)=>({
        fontSize:10,
        color:active ? colors.text.menuInactive : colors.text.menuInactive,
        marginTop:4.

    }),
})
