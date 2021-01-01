import React, {useContext,useState,useEffect} from 'react';
import { View, Text, } from 'react-native';

import TabNav from './navigation/tabNav';
import Navigation from './navigation/rootNav';
import { AuthContext, AuthProvider } from './navigation/authProvider';

import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {

  const [initializing,setInitializing] = useState(true);
  const {user,setUser} = useContext(AuthContext);

  const onAuthStateChange = (user)=>{
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return(
    <NavigationContainer>
      {user ? <TabNav />:<Navigation />}
    </NavigationContainer>
    )
}

const MainApp = () =>{
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default MainApp;