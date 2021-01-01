import React,{useContext} from 'react'
import { View, Text , TouchableOpacity,StyleSheet} from 'react-native'
import {AuthContext} from '../../navigation/authProvider';
const homeScreen = () =>{
    const { signout,user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            {/* <Text>Profile Screen </Text> */}
            <Text>{user.email}</Text>
            <TouchableOpacity 
                style={styles.btnLogout}
                onPress={()=>signout()}>
                <Text style={styles.btnText}>SignOut</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnLogout:{
        paddingHorizontal:50,
        paddingVertical:10,
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


export default homeScreen;