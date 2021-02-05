import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assests'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import {Fire} from '../../config';
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'


const Login = ({navigation}) => {
    const [form, setForm] = useForm({email:'', password:''})
    const [loading, setLoading] = useState(false);
    
    const login = () => {
        console.log('form : ', form);
        setLoading(true);
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            console.log('success :', res);
            setLoading(false);
        })
        .catch(err => {
            console.log('error :', err);
            showMessage({
                message :err.message,
                type:'default',
                backgroundColor:colors.error,
                color: colors.white
            })
        });

    };

    return (
        <>
        <View style={styles.page}>
            <ScrollView>
                <ILLogo/>
                <Text style={styles.title}>Masuk dan Mulai konsultasi</Text>
                <Input label ="Email Address" value={form.email} onChangeText={(value)=> setForm('email', value)} />
                <Gap height={24} />
                <Input 
                label ="Password" 
                value={form.password} 
                onChangeText={(value)=> setForm('password', value)} 
                secureTextEntry
                />
                <Gap height={10}/>

                <Link title="Forgot my Password" size={12}/>
                <Gap height={30}/>

                <Button title="Sign In" onPress={login} />
                <Gap height={60}/>

                <Link title="create New Account" size={16} align="center" onPress={()=>navigation.navigate('Register')}/>
                
            </ScrollView>
        </View>
        {loading && <Loading/>}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page:
        {   padding:40, 
            backgroundColor:'white', 
            flex:1},
    title: {
            fontSize:20,
            fontFamily:'Nunito-SemiBold',
            color:'#112340',
            marginTop:40,
            marginBottom:40,
            maxWidth:150
    }
})
