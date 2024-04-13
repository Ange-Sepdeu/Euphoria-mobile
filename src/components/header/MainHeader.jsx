import { View, Text, ScrollView, TouchableOpacity,Pressable, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import {MaterialIcons, FontAwesome, AntDesign, Ionicons} from "@expo/vector-icons"

export default function MainHeader(){
    return (
      <View style={tw`flex mt-10 flex-row justify-between items-center w-full`}>
        <Text style={tw`font-bold text-green-900 text-lg ml-4`}>LOGO</Text>
        <MaterialIcons name='more-vert' style={tw`text-lg text-green-900 mr-4`} size={24} />
      </View>
    )
}