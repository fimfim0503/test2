import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { ILcatObat, ILcatPsikiater, ILcatUmum } from '../../../assests'
import { colors, fonts } from '../../../utils'

const Doktercategory = ({category, onPress}) => {
    const Icon = ()=>{
        if (category === 'dokter obat') {
            return <ILcatUmum style={styles.illustration} />;
        }
        if (category === 'psikiater') {
            return <ILcatPsikiater style={styles.illustration} />
        }
        if (category === 'obat')
            return <ILcatObat style={styles.illustration}  />
        return <ILcatUmum style={styles.illustration} />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Icon/>
            <Text style={styles.label}>Saya Butuh </Text>
            <Text style={styles.category} > {category} </Text>
        </TouchableOpacity>
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
