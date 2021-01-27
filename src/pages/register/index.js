import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import {Fire} from '../../config'

const Register = ({navigation}) => {
    // const [fullname, setFullname] = useState('');
    // const [profession, setProfession] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [form, setForm] = useForm({
        fullname:'',
        profession:'',
        email:'',
        password:''
    });

    const [loading, setLoading] = useState(false)
    const onKontinue = () => {
        console.log (form);
        setLoading(true);

        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading (false);
            setForm('reset')
            console.log('register success: ', success);
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoading (false);
            console.log ('error register: ', errorMessage);
        });

        //()=> navigation.navigate('UploadPhoto')


    }

    return (
        <>
        <View style={styles.page}>
           <Header onPress={()=>navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Input 
                        label="Full Name" 
                        value={form.fullname} 
                        onChangeText={(value)=> setForm('fullname', value)} />
                    <Gap height={24}/>
                    <Input 
                    label="Pekerjaan" 
                    value={form.profession} 
                    onChangeText={(value)=> setForm( 'profession', value)} />
                    <Gap height={24}/>
                    <Input 
                    label="Email" 
                    value={form.email} 
                    onChangeText={(value)=> setForm('email', value)} />
                    <Gap height={24}/>
                    <Input 
                        label="password" 
                        value={form.password} 
                        onChangeText={(value)=> setForm('password', value)} 
                        secureTextEntry
                    />
                    <Gap height={40}/>
                    <Button title="continue" onPress={onKontinue} />
                </ScrollView>

            </View>
            
        </View>
        {loading && <Loading/>  }
        
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
    flex:1

    },
    content:{
        padding:40,
        paddingTop:0,


    }
})
