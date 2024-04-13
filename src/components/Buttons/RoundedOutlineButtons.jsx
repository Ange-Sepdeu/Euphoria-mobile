import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { COLORS } from '../../constants';

export default function RoundedOutlineButtons({text,borderColor=COLORS.primary,onPress}) {
  return (
    <TouchableOpacity 
    style={tw`p-3 px-5 rounded-full border border-${borderColor} flex justify-center items-center shadow-lg`}
    onPress={()=> onPress()}>
        <Text style={tw`text-green-700 text-lg font-medium`}>{text}</Text>
    </TouchableOpacity>
  )
}