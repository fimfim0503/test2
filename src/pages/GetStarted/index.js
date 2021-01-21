import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { IlGetStarted, ILLogo } from '../../assests';
import { Button, Gap } from '../../components';


const GetStarted = ({navigation})=>{
    return (
        <ImageBackground source={IlGetStarted} style={styles.page}>
            <View> 
                <ILLogo/>
                <Text style={styles.title}> 
                   Sistem Informasi Pasien RSU dr. Slamet Garut </Text>
            </View>

            <View>
                <Button title="Get Started" onPress={()=> navigation.navigate('Register') } />
                <Gap height={16}/>
                <Button type="secondary" title="Sign In" onPress={()=> navigation.navigate('Login')} />               
            </View>
        </ImageBackground>
       
        
    )
}

export default GetStarted
const styles = StyleSheet.create({
    page: { padding:40,
            justifyContent:'space-between',
            backgroundColor:'white',
        flex:1},
    title: { fontSize:28,   marginTop:91, color:'white',
    fontFamily: 'Nunito-SemiBold',
}
    
})