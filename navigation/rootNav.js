import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import IntroScreen from '../screens/splash/IntroScreen';
import LoginScreen from '../screens/splash/loginScreen';
import ResetPassword from "../screens/splash/resetPswScreen";
import TabNav from "./tabNav";

import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

const rootNav = ()=>{

    const [lunch,setLunch] = useState(null)

    useEffect(()=>{
        AsyncStorage.getItem('Alreadylunched!').then((value)=>{
            if(value == null){
                AsyncStorage.setItem('Alreadylunched!','true');
                setLunch(true);
            }else{
                setLunch(false);
            }
        })
    },[])

    if(lunch == null){
        return null
    }else if(lunch == true){
        return(
            // <NavigationContainer>
                <stack.Navigator initialRouteName="Intro">
                    <stack.Screen name="Intro" component={IntroScreen} options={{header:()=>null}}/>
                    <stack.Screen name="Login" component={LoginScreen} options={{header:()=>null}}/>
                    <stack.Screen name="TabNav" component={TabNav}/>
                </stack.Navigator>
            // </NavigationContainer>
        )
    }else{
        return(
            // <NavigationContainer>
                <stack.Navigator initialRouteName="Login">
                    <stack.Screen name="Login" component={LoginScreen} 
                        options={{header:()=>null}}/>
                    <stack.Screen name="Reset" component={ResetPassword} 
                        options={{
                            headerTitleAlign:'center',
                            headerLeft:false,
                            headerTitle:'Reset Password'
                        }}/>
                    <stack.Screen name="TabNav" component={TabNav}/>
                </stack.Navigator>
            // </NavigationContainer>
        ) 
    }
}

export default rootNav;