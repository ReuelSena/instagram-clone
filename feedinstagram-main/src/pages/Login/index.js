import React from 'react';
import {StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Text, TextInput, View} from 'react-native';
import logo from '../../../src/assets/logomarca.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Login({navigation}){



    return (
    
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        
        <View style={styles.logo}>
          <Image source={logo} ></Image>
        </View>
  
        <View>
          <Text style={styles.alerta(display)}>Usuário ou senha inválidos</Text>
        </View>
  
        <View style={styles.loginForm}>
        <TextInput style={styles.loginInput} 
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        placeholder= 'Usuário'
        onChangeText={setUsername}
        value= {username}
        />
  
        <TextInput style={styles.loginInput}
        placeholder= 'Senha'
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder= 'Senha'
        onChangeText={setPassword}
        value= {password}/>
          
        <TouchableOpacity style={styles.loginButton}>
           <Text style={styles.txtButton}
           onPress = {() => navigation.navigate('Feed')}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      
    );
  }


  
   
  

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    marginBottom: 30,
    alignItems: 'center',
    width: '30%',
    
  

  },

  alerta:(text='none')=>({
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff0000',
    marginBottom: 25,
    display: text
  }),

   loginForm: {
    width: "70%"
  },

  loginInput: {
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },

  loginButton:{
    height: 60,
    backgroundColor: "#000300",
    alignSelf:"center",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    width: '100%',
   
  },

  txtButton: {
    color: '#fff',
    fontSize: 25
  },

  text: {
    fontSize: 30,
    lineHeight: 33,
    color: "#333333",
    padding: 16,
    paddingTop: 16,
    minHeight: 170,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)"
  },





})
