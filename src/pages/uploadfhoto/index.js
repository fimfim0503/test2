import React, {useState} from 'react'
import { Image, ImagePickerIOS, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNulPhoto } from '../../assests'
import { Button, Gap, Header, Link } from '../../components'




const UploadPhoto = ({navigation, route}) => {
    const {fullname, profession} = route.params;
   ;

    const [hasPhoto, setHasPhoto]= useState(false);
    const getImage = ()=> {
        
        
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Fhoto"/>
            <View style={styles.content} >
                <View style={styles.profile} >
                    <TouchableOpacity style={styles.avatarWraper} onPress={getImage} >
                        <Image source={ILNulPhoto} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} /> }
                    </TouchableOpacity>

                    <Text style={styles.name}>{fullname}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>

                <View>
                    <Button 
                        disable
                        title="Upload and continue" 
                        onPress={()=>navigation.replace('MainApp')} />
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
