import React from 'react'
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const IntroScreen =({navigation})=> {
    
    const Dots = ({selected})=>{
        let backgroundColor;
        backgroundColor = selected ? 'rgba(0,0,0, 0.8)': 'rgba(0,0,0,0.2)';
        return(
            <View style={{
                width:5,
                height:5,
                borderRadius:50,
                marginHorizontal:3,
                backgroundColor
            }}>
            </View>
        )
    }

    const Skip =({...props})=>{
        return(
            <TouchableOpacity style={{marginHorizontal:15}} {...props}>
                <Text style={{fontSize:15}}>Skip</Text>
            </TouchableOpacity>
        )
    }

    const Next =({...props})=>{
        return(
            <TouchableOpacity style={{marginHorizontal:15}} {...props}>
                <Text style={{fontSize:15}}>Next</Text>
            </TouchableOpacity>
        )
    }

    const Done =({...props})=>{
        return(
            <TouchableOpacity style={{marginHorizontal:15}} {...props}>
                <Text style={{fontSize:15}}>Finish</Text>
            </TouchableOpacity>
        )
    }


    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={()=>navigation.replace('Login')}
            onDone={()=>navigation.navigate('Login')}
            pages={[
                {
                backgroundColor: '#EEF2FE',
                image: <Image source={require('../../assets/images/learn_01.jpg')} style={styles.image}/>,
                title: 'Test 1',
                subtitle: 'test description 1',
                },
                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/learn_02.png')} style={styles.image}/>,
                title: 'Test 2',
                subtitle: 'test description 2',
                },
                {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/learn_04.png')} style={styles.image}/>,
                title: 'Start',
                subtitle: 'test description 3',
                },
            ]}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:200,
        height:160
    }
})

export default IntroScreen;
