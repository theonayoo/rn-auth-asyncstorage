import React,{useState,useContext} from 'react';
import { View, Text,StyleSheet ,TextInput,TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AuthContext} from '../../navigation/authProvider';

const loginScreen =({navigation})=> {

    const {login,register} = useContext(AuthContext);

    const [email,setEmail] = useState();
    const [password,setPassword]=useState();

    const [fontSize,setFontSize] =useState({
        loginText:true,
        registerText:false,
        backgroundColor:true
    })

    const [isClick,setIsClick] = useState({
        loginClick:true,
        registerClick:false,
        checkText:false,
        secureTextEntry:true,
        conSecureEntry:true,
    })

    const loginClick=()=>{
        setIsClick({
            ...isClick,
            loginClick:true,
            registerClick:false,
        })
        setFontSize({
            ...fontSize,
            loginText:true,
            registerText:false,
            backgroundColor:true
        })
    }
    const registerClick=()=>{
        setIsClick({
            ...isClick,
            loginClick:false,
            registerClick:true,
        })
        setFontSize({
            ...fontSize,
            loginText:false,
            registerText:true,
            backgroundColor:false
        })
    }

    const onChangeText=(val)=>{
        if(val.length !=0){
            setIsClick({
                ...isClick,
                checkText:true,
                email:val,
            })
        }else{
            setIsClick({
                ...isClick,
                checkText:false
            })
        }
    }

    const checkSecureText=()=>{
        setIsClick({
            ...isClick,
            secureTextEntry:!isClick.secureTextEntry
        })
    }

    const conSecureEntryCheck=()=>{
        setIsClick({
            ...isClick,
            conSecureEntry:!isClick.conSecureEntry
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerLogin}>
                <TouchableOpacity onPress={()=>loginClick()} 
                    style={styles.loginBack}>
                    <Text 
                        style={[styles.loginText,{fontSize:fontSize.loginText?23:11,color:fontSize.loginText?'#E85C83':'#FFB6C7'}]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>registerClick()} 
                    style={styles.registerBack}>
                    <Text style={[styles.registerText,{fontSize:fontSize.registerText?23:11,color:fontSize.registerText?'#E85C83':'#FFB6C7'}]}>Register</Text>
                </TouchableOpacity>
            </View>

            <View 
                style={[styles.footerLogin,
                {backgroundColor:fontSize.backgroundColor?'#FFC107':'#70C1CB',
                borderTopRightRadius:fontSize.backgroundColor?hp(18):null,
                borderTopLeftRadius:fontSize.backgroundColor?null:hp(18)}]}>
                <View style={[styles.inputText,{marginTop:50}]}>
                    <Ionic name="person" size={23} color='#000'/>
                    <TextInput 
                        placeholder="Email" 
                        style={styles.inputContent} 
                        value={email}
                        onChangeText={(email)=>{
                            setEmail(email)
                            onChangeText(email)
                        }}
                    />
                    {isClick.checkText? 
                        <Ionic name="ios-checkmark-done" size={23} color='green'/>
                    :null}
                </View>

                <View style={styles.inputText}>
                    <Ionic name="key" size={23} color='#000'/>
                    <TextInput 
                        placeholder="Password" 
                        style={styles.inputContent} 
                        value={password}
                        onChangeText={(password)=>setPassword(password)}
                        secureTextEntry={isClick.secureTextEntry}
                    />
                    <TouchableOpacity onPress={()=>checkSecureText()}>
                        {isClick.secureTextEntry?
                            <Ionic name="eye-off" size={23} color='#000'/>
                            :
                            <Ionic name="eye" size={23} color='#000'/>
                        }
                    </TouchableOpacity>
                </View>
                <View style={{width:wp(75)}}>
                    {
                        isClick.loginClick? 
                            <TouchableOpacity style={styles.resetPsw} onPress={()=>navigation.navigate('Reset')}>
                                <Text 
                                    style={styles.forgoPas}>Forgot password?</Text>
                            </TouchableOpacity>
                        :null
                    }
                </View>

                {
                    isClick.registerClick ?
                    <View style={styles.inputText}>
                        <Ionic name="key" size={23} color='#000'/>
                        <TextInput 
                            placeholder="Confirm Password" 
                            style={styles.inputContent} 
                            // value={password}
                            onChangeText={(password)=>setPassword(password)}
                            secureTextEntry={isClick.conSecureEntry}
                        />
                        <TouchableOpacity onPress={()=>conSecureEntryCheck()}>
                            {isClick.conSecureEntry?
                                <Ionic name="eye-off" size={23} color='#000'/>
                                :
                                <Ionic name="eye" size={23} color='#000'/>
                            }
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
                {isClick.loginClick ?
                        <TouchableOpacity 
                            style={[styles.btnContent,{backgroundColor:'#FFEB3B'}]}
                            onPress={()=>(login(email,password))}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#000'}}>Login</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={styles.btnContent} 
                            onPress={()=> (register(email,password))}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>Register</Text>
                        </TouchableOpacity> 
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2A2939'
    },
    headerLogin:{
        flex: 1,
        width:wp(100),
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'row',
        overflow:'hidden'
    },
    footerLogin:{
        flex: 4,
        alignItems:'center'
    },
    inputText:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:wp(75),
        borderBottomWidth:0.6,
        borderBottomColor:'#1E1E1E',
        marginTop:20
    },
    inputContent:{
        width:wp(60),
        marginHorizontal:10,
    },
    btnContent:{
        padding:hp(2),
        width:wp(60),
        borderRadius:wp(40),
        justifyContent: 'center',
        alignItems:'center',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.5,
        shadowColor:'#000',
        elevation:5,
        backgroundColor:'red',
        marginTop:70
    },
    loginText:{
        fontFamily:'pretty',
        fontWeight:'bold',
    },
    registerText:{
        fontFamily:'pretty',
        fontWeight:'bold',
    },
    loginBack:{
        flex: 1,
        width:wp(50),
        paddingVertical:hp(20),
        justifyContent:'center',
        alignItems:'center'
    },
    registerBack:{
        width:wp(50),
        paddingVertical:hp(20),
        justifyContent:'center',
        alignItems:'center'
    },
    resetPsw:{
        marginTop:20
    },
    forgoPas:{
        alignSelf:'flex-end',
        textDecorationLine:'underline',
        color:'red',
        fontWeight:'bold'
    }
})

export default loginScreen;
