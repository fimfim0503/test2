import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconAddPhoto, ILNulPhoto } from '../../assests'
import { Button, Gap, Header, Link } from '../../components'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Fhoto"/>
            <View style={styles.content} >
                <View style={styles.profile} >
                    <View style={styles.avatarWraper} >
                        <Image source={ILNulPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>

                    <Text style={styles.name}>Tutu Gondewa</Text>
                    <Text style={styles.profession}>Project Manager</Text>
                </View>

                <View>
                    <Button title="Upload and continue" onPress={()=>navigation.replace('MainApp')} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={()=>navigation.replace('MainApp')} />

                </View>

            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page : {
        flex:1,
        backgroundColor:'white', 

    },
    content:{
        paddingHorizontal:40, 
        paddingBottom:40,
        flex:1,
        justifyContent:'space-between'
    },
    profile:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    avatar:{
        width:110,
        height:110
    },
    avatarWraper:{
        width:130,
        height:130,
        borderWidth:1, borderColor:'white',
        borderRadius:130/2,
        alignItems:'center',
        justifyContent:'center',
    },
    addPhoto:{
        position:'absolute',
        bottom:8,
        right:6,
        
    }, 
    name:{
        fontSize:24,
        color:'black',
        textAlign:'center'
    },
    profession:{
        fontSize:18,
        textAlign:'center',
        marginTop:4
    }
})
