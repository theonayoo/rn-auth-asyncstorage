import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/TabScreen/homeScreen';
import PostScreen from '../screens/TabScreen/postScreen';
import MessageScreen from '../screens/TabScreen/messageScreen';
import ProfileScreen from '../screens/TabScreen/profileScreen';
import CategoryScreen from "../screens/TabScreen/categoryScreen";

import Ionic from 'react-native-vector-icons/Ionicons';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const homeStack = createStackNavigator();
const categoryStack = createStackNavigator();
const postStack = createStackNavigator();
const messageStack = createStackNavigator();
const profileStack = createStackNavigator();

const tabNav=()=> {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor:'green',inactiveTintColor:'#252526'}}>
            <Tab.Screen 
                name="Home" 
                component={homeStackScreen}
                options={{tabBarIcon:({color})=>(
                    <Ionic name="home" size={23} color={color}/>
                )}}
            />

            <Tab.Screen 
                name="Category" 
                component={categoryStackScreen}
                options={{tabBarIcon:({color})=>(
                    <IconMater name="category" size={23} color={color}/>
                )}}
            />

            <Tab.Screen 
                name="Post" 
                component={postStackScreen}
                options={{tabBarIcon:({color})=>(
                    <IconEnt name="squared-plus" size={23} color={color}/>
                )}}
            />
            <Tab.Screen 
                name="Message" 
                component={messageStackScreen}
                options={{tabBarIcon:({color})=>(
                    <IconEnt name="new-message" size={23} color={color}/>
                )}}
            />
            <Tab.Screen
                name="Profile" 
                component={profileStackScreen}
                options={{tabBarIcon:({color})=>(
                    <Ionic name="person" size={23} color={color}/>
                )}}
            />
        </Tab.Navigator>
    )
}

const homeStackScreen = ()=>{
    return(
        <homeStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'green',
            headerRight:({tintColor})=>(
                <Icon name="ios-notifications-outline" size={23} color={tintColor} style={{marginHorizontal:15}}/>
            )
        }}>
            <homeStack.Screen name='Home' component={HomeScreen} />
        </homeStack.Navigator>
    )
}

const categoryStackScreen = ()=>{
    return(
        <categoryStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'green',
            headerRight:({tintColor})=>(
                <Icon name="ios-notifications-outline" size={23} color={tintColor} style={{marginHorizontal:15}}/>
            )
        }}>
            <categoryStack.Screen name='Category' component={CategoryScreen} />
        </categoryStack.Navigator>
    )
}

const postStackScreen = ()=>{
    return(
        <postStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'green',
            headerRight:({tintColor})=>(
                <Icon name="ios-notifications-outline" size={23} color={tintColor} style={{marginHorizontal:15}}/>
            )
        }}>
            <postStack.Screen name='Post' component={PostScreen} />
        </postStack.Navigator>
    )
}


const messageStackScreen = ()=>{
    return(
        <messageStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'green',
            headerRight:({tintColor})=>(
                <Icon name="ios-notifications-outline" size={23} color={tintColor} style={{marginHorizontal:15}}/>
            )
        }}>
            <messageStack.Screen name='Message' component={MessageScreen} />
        </messageStack.Navigator>
    )
}

const profileStackScreen = ()=>{
    return(
        <profileStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'green',
            headerRight:({tintColor})=>(
                <Icon name="ios-notifications-outline" size={23} color={tintColor} style={{marginHorizontal:15}}/>
            )
        }}>
            <profileStack.Screen name='Profile' component={ProfileScreen} />
        </profileStack.Navigator>
    )
}


export default tabNav;
