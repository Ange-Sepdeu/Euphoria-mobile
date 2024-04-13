import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { COLORS } from '../../constants';

export default function OutlineButtons({text,borderColor=COLORS.primary,onPress, icon, iconPosition="left"}) {
  return (
    <TouchableOpacity 
    style={tw`w-11/12 py-3 border border-${borderColor} rounded-md flex justify-center items-center shadow-lg`}
    onPress={()=> onPress()}>
        <Text style={tw`text-green-700 text-lg font-medium`}>{text}</Text>
    </TouchableOpacity>
  )
}