import { Pressable, Text,View, Image } from "react-native";
import googleIcon from "../../assets/google.png"
import React, { useState } from 'react'
import tw from 'twrnc';
import {MaterialIcons, FontAwesome, AntDesign, Ionicons} from "@expo/vector-icons"

export default function IconButtons({text,border="0",backgroundColor,icon,onPress,color="black",position="left"}){
    return (
        <> 
        {
            position === "left" ?
            <Pressable 
        onPress={() => onPress()}
        style={tw`w-11/12 py-4 mt-5 self-center bg-${backgroundColor} rounded-[10px] border border-gray-300 border-${border}`}>
        <View style={tw` flex flex-row justify-center items-center`}>
            {
                text.includes("Google") ? 
                <Image source={googleIcon} style={tw`w-5 h-5`} resizeMode="contain" />:
                icon
            }            
            <Text style={tw`text-center font-semibold text-${color} ml-2`}>{text}</Text>
        </View>
        </Pressable>
        :
        <Pressable 
        onPress={() => onPress()}
        style={tw`w-11/12 py-3 self-center bg-${backgroundColor} rounded-md border border-${border}`}>
        <View style={tw` flex flex-row justify-center items-center`}>            
            <Text style={tw`text-center text-${color} mr-2`}>{text}</Text>
            {icon}
        </View>
        </Pressable>
        }
        </>
    )
}