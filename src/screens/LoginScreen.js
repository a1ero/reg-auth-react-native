import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";


const LoginScreen = ({navigation}) => {
        const [login, setLogin] = useState(null);
        const [password, setPassword] = useState(null);
      
        const val = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text>{val}</Text>
                        <LinearGradient 
                            style={styles.header}
                            colors={['#BDD5EA','#577399']}>
                                <Text style={styles.text}>
                                Login
                                </Text>
                        </LinearGradient>
                    <TextInput 
                        style={styles.input}
                        value={login}
                        setValue={setLogin}
                        placeholder="Login"
                        placeholderTextColor="#456C8B80" 
                        //onChangeText={text => setLogin(text)}
                        />
                        

                    <TextInput 
                        style={styles.input}
                        value={password}
                        setValue={setPassword}
                        //onChangeText={text =>setPassword(text)}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#456C8B80" 
                        />

                    
                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => navigation.navigate('Home')}
                        underlayColor='#fff'>
                        <Text style={styles.logSignText}>Log in</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity style={styles.buttonSignup}
                        onPress={() => navigation.navigate('Reg')}
                        underlayColor='#fff'>
                        <Text style={styles.logSignText}>Sign up</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({

    container:{
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    wrapper:{
        width: '100%',
    },

    input:{
      height: 50,
      marginLeft: '12%',
      marginRight: '13.41%',
      marginBottom: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#9A9A9A',
      padding: 10,
      fontSize: 16,
      
    },

    text:{
        fontSize: 18,
        color: '#FFFFFF',
    },

    buttonLogin:{
        padding: 13,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#0079B8',
        marginLeft: '12%',
        marginRight: '13.41%',
    },

    buttonSignup:{
        padding: 13,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#004366',
        marginTop: 30,
        marginLeft: '12%',
        marginRight: '13.41%'
    },

    logSignText:{
        color:'#fff',
        textAlign:'center',  
        fontSize: 20,    
    },

    header:{
        width: '100%',
        height: 150,
        backgroundColor: '#BDD5EA',
        marginBottom: 64,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

  });

export default LoginScreen;