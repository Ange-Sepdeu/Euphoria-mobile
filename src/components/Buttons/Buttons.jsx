import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { COLORS } from '../../constants';

export default function Buttons({text,backgroundColor=COLORS.primary,onPress}) {
  return (
    <TouchableOpacity 
        style={tw`w-11/12 py-3 bg-${backgroundColor} self-center rounded-md flex justify-center items-center`}
        onPress={()=>onPress()}>
        <Text style={tw`text-white text-lg font-medium`}>{text}</Text>
    </TouchableOpacity>
  )
}