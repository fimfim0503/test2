import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1 } from '../../../assests/dummy'
import { colors, fonts } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container} >
            <View style={styles.titleWraper}>
                <Text style={styles.title} >Berita Tentang RSU Dr. Slamet Garut</Text>
                <Text style={styles.date} >Today</Text>
                
            </View>
           <Image source={DummyNews1} style={styles.Image} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        maxWidth:'90%'
    },
    date:{
        fontSize:12,
        fontFamily:fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:4,
    },
    container:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        paddingBottom:12,
        paddingTop:16,
        paddingHorizontal:16.
    },
    Image:{
        width:80,
        height:60,
        borderRadius:11,
    },
    titleWraper:{
        flex:1
    }
})
