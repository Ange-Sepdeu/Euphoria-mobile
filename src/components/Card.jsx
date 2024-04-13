import { Image, Pressable, View,Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Card({source, onPress, articleName, articlePrice, deduction="", selected=false}) {
  return (
    <View style={tw`h-full`}>
    <View style={tw`rounded-[10px] overflow-hidden h-[200px] w-[95%]`}>
       <Image source={source} style={tw`w-full -mt-[80%] h-[300%] rounded-[10px]`} resizeMode="cover" />
        <MaterialCommunityIcons name={selected ? "heart":"heart-outline"} size={18} style={tw` ${!selected ? "text-black":"text-red-600"} bg-white absolute right-5 top-3 shadow-lg rounded-[10px] p-2`} onPress={onPress}  /> 
    </View>
    <View>
      <Text style={tw`font-bold mt-2 text-[16px] leading-[19.36px]`}>{articleName}</Text>
      <Text style={tw`text-[12px] mt-1 font-semibold text-black opacity-60 leading-[14.52px]`}>PKR {articlePrice} {deduction}</Text>
    </View>
    </View>
  )
}