import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Doktercategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import {
    DummyDoctor1, 
    DummyDoctor2, 
    DummyDoctor3, 
    JSONcategoryDoctor
    } from '../../assests'

const Doctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.wraperSection}>
                        <Gap width={32}/>
                    <HomeProfile onPress={()=> navigation.navigate('UserProfile')} />
                    <Text style={styles.welcome}>Mau Konsultasi dengan Siapa hari ini </Text>

                    </View>
                    
                    <View style={styles.wraperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View style={styles.category}>
                                <Gap width={16} />
                                {
                                    JSONcategoryDoctor.data.map(item=>{
                                        return  <Doktercategory key={item.id} category={item.category} onPress={()=>navigation.navigate('chooseDoctor')} />
                                    })
                                }
                                
                                
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                <View style={styles.wraperSection}>
                    <Text style={styles.sectionLabel} >Top Rated Dokter </Text>
                    <RatedDoctor nama="Dr. Husodo Dewo Adi" des="Orthopedi" avatar={DummyDoctor1} onPress={()=>navigation.navigate('DoctorProfile')}/>
                    <RatedDoctor nama="Dr. Willy Indrawilis" des="Psikiatri" avatar={DummyDoctor2} onPress={()=>navigation.navigate('DoctorProfile')} />
                    <RatedDoctor nama="Dr. Shelvi F" des="Internist" avatar={DummyDoctor3} onPress={()=>navigation.navigate('DoctorProfile')} />
                    <Text style={styles.sectionLabel} >Good News </Text>
                </View>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page:{
       
        backgroundColor:colors.secondary,
        flex:1,
        
    },
    welcome:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:16,
        maxWidth:209
    },
    category:{
        flexDirection:'row',
    },

    wraperScroll:{
        marginHorizontal:-16
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    sectionLabel:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:15
    },
    wraperSection:{
        paddingHorizontal:16,
        paddingTop:20
    }
})
