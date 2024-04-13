import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { COLORS } from '../../constants';

export default function RoundedButtons({text,backgroundColor=COLORS.primary,onPress, icon, iconPosition="left"}) {
  return (
    <TouchableOpacity 
        style={tw`w-11/12 py-4 bg-${backgroundColor} round-full self-center flex justify-center items-center shadow-lg`}
        onPress={()=>onPress()}>
        <Text style={tw`text-white text-lg font-medium`}>{text}</Text>
    </TouchableOpacity>
  )
}