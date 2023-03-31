import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegScreen from "../screens/RegScreen";
import CategoryScreen from "../screens/CategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import UploadScreen from "../screens/UploadScreen";
import SearchScreen from "../screens/SearchScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name= "Login" 
                    component={LoginScreen} 
                    options={{headerShown: false}} 
                />
                <Stack.Screen 
                    name= "Reg" 
                    component={RegScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                name= "Category" 
                component={CategoryScreen} 
                options={{headerShown: false}}
                />
                <Stack.Screen 
                    name= "Home" 
                    component={HomeScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name= "Upload" 
                    component={UploadScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name= "Search" 
                    component={SearchScreen} 
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;