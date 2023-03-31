import React, { useContext, useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";


const RegScreen = ({navigation}) => {
        const [login, setLogin] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [password_confirmation, setPassword_confirmatiom] = useState('');
        
        const {isLoading, register} = useContext(AuthContext);
        
        
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                   <LinearGradient 
                        style={styles.header}
                        colors={['#BDD5EA','#577399']}>
                             <Text style={styles.text}>
                             Registration
                             </Text>
                    </LinearGradient>
                    <TextInput 
                        style={styles.input}
                        value={login}
                        setValue={setLogin}
                        //onChangeText={text => setLogin(text)}
                        placeholder="Login"
                        placeholderTextColor="#456C8B80" 
                        />
                        
                    <TextInput 
                        style={styles.input}
                        value={email}
                        setValue={setEmail}
                        //onChangeText={text =>setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor="#456C8B80" 
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
                    
                    <TextInput 
                        style={styles.input}
                        value={password_confirmation}
                        setValue={setPassword_confirmatiom}
                        //onChangeText={text =>setPassword_confirmatiom(text)}
                        secureTextEntry
                        placeholder="Confirm password"
                        placeholderTextColor="#456C8B80" 
                        />
                        
                    <TouchableOpacity style={styles.buttonLogin}                    
                        onPress={() => {register(login, email, password, password_confirmation)}}
                        underlayColor='#fff'>
                        <Text style={styles.logSignText}>Sumbit</Text>
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
      borderColor: '#577399',
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
        backgroundColor: '#3A506B',
        marginLeft: '12%',
        marginRight: '13.41%',
        
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

export default RegScreen;