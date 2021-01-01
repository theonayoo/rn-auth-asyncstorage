import React,{useContext,useState} from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AuthContext} from '../../navigation/authProvider';

export default function resetPswScreen() {

    const {resetPassword,ResetSuccess} = useContext(AuthContext);
    const [email,setEmail] =useState();

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Email Address" 
                style={styles.inputText}
                value={email}
                onChangeText={(email)=>setEmail(email)}
                />
            <TouchableOpacity 
                style={styles.btnReset}
                onPress={()=>{(
                    resetPassword(email),
                    ResetSuccess
                )}}
                >
                <Text style={styles.btnText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    inputText:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:wp(75),
        borderBottomWidth:0.6,
        borderBottomColor:'#1E1E1E',
        // marginTop:-120,
    },
    btnReset:{
        paddingHorizontal:50,
        paddingVertical:12,
        backgroundColor:'green',
        borderRadius:50,
        marginTop:30,
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:15,
        color:'#fff'
    }
})


