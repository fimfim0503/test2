import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
           <Header onPress={()=>navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Input label="Full Name"/>
                    <Gap height={24}/>
                    <Input label="Pekerjaan"/>
                    <Gap height={24}/>
                    <Input label="Email"/>
                    <Gap height={24}/>
                    <Input label="password"/>
                    <Gap height={40}/>
                    <Button title="continue" onPress={()=> navigation.navigate('UploadPhoto')} />
                </ScrollView>

            </View>
            
        </View>
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
