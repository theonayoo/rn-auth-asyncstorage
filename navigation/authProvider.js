import React,{createContext,useState} from 'react';
import { View,Text,Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider =({children})=> {

    const [user,setUser] = useState(null);

    const SignInError =()=>{
        // Works on both Android and iOS
        Alert.alert(
            'User Name or Password !',
            'The account user name or password provided is incorrect!',
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }

    const ResetPassword =()=>{
        // Works on both Android and iOS
        Alert.alert(
            'Email Wrong!',
            'The account user email provided is incorrect!',
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }

    const ResetSuccess =()=>{
        // Works on both Android and iOS
        Alert.alert(
            'Password Reset!',
            'The account user account password reset. Please check your email!',
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            { cancelable: false }
        );
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login : async (email,password) =>{
                    try {
                        await auth().signInWithEmailAndPassword(email,password);
                    } catch (err) {
                        SignInError()
                    }
                },
                register : async (email,password) =>{
                    try {
                        await auth().createUserWithEmailAndPassword(email,password);
                    } catch (err) {
                        console.log(err);
                    }
                },
                resetPassword: async (email) =>{
                    try {
                        await auth().sendPasswordResetEmail(email);
                        ResetSuccess();
                    } catch (error) {
                        ResetPassword();
                    }
                },
                // deleteUser: async (id) =>{
                //     try {
                //         await auth().currentUser.delete(id);
                //         console.log('Delete Success!')
                //     } catch (error) {
                //         ResetPassword();
                //     }
                // },
                signout : async ()=>{
                    try {
                        await auth().signOut();
                    } catch (err) {
                        console.log(err);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
