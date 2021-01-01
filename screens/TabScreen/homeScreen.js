import React,{useContext} from 'react'
import { View, Text , TouchableOpacity,StyleSheet} from 'react-native'
import {AuthContext} from '../../navigation/authProvider';
const homeScreen = () =>{
    const { signout,user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Home Screen </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default homeScreen;