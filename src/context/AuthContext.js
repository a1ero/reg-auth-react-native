import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  

    const register = (login, email, password, password_confirmation ) => {
        setIsLoading(true);

        axios
        .post(`${BASE_URL}/register`,{
            login, 
            email, 
            password,
            password_confirmation
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
            
        })
        .catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);

        });
    };
    
    return (
        <AuthContext.Provider 
            value={
                register
            }>
            {children}
        </AuthContext.Provider>
    );
};

