import { View, Text } from 'react-native'
import React,{useState} from 'react'
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header({isEye=false,setIsEye}) {
  
  return (
    <View style={tw`w-11/12 pt-8 my-8 justify-between flex-row items-center self-center`}>
        <View style={tw`w-1/2 flex flex-row`}>
            <View style={tw`w-12 h-12 rounded-full bg-green-900 justify-center items-center`}>
              <Text style={tw`font-bold text-2xl text-white`}>D</Text>
            </View>
        </View>
        {/* <MaterialCommunityIcons name="dots-vertical" size={24} color="black" /> */}
        <View style={tw`w-1/2 flex flex-row justify-end`}>
          {
            isEye ?
            <Feather name="eye" size={24} color="black" onPress={()=> setIsEye((isEye)=> !isEye)} />
            :
            <Feather name="eye-off" size={24} color="black" onPress={()=> setIsEye((isEye)=> !isEye)} />
          }
          
          <View style={tw`flex flex-row mx-2 ml-4`}>
            <EvilIcons name="bell" size={30} color="black" />
            <View style={tw`w-2 h-2 bg-green-900 rounded-full relative right-2`} />
          </View>
        </View>
        
      </View>
  )
}