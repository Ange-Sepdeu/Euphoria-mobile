
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import tw from "twrnc"

export default function TransactionTopBar(props) {
  return (
    <>
      <View style={tw`p-4 bg-green-800 w-full`}>
          <Entypo style={tw`mt-10`} onPress={() => props.navigation.goBack()} name="chevron-left" size={30} color={"white"} />
          <View style={tw`mt-5 mb-5`}>
              <Text style={tw`text-white text-center font-bold text-2xl`}>ABSA DIGI ACCOUNT</Text>
              <Text style={tw`text-white text-center text-lg`}>1009792</Text>
          </View>
      </View>
      <View style={tw`p-4 bg-green-900`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-gray-300 text-lg font-semibold`}>Current balance</Text>
            <View style={tw`flex flex-row`}>
              <Text style={[tw`text-gray-300 mr-1 mt-4`, {fontSize: 10}]}>MUR</Text>
              <Text style={tw`text-white text-lg font-bold`}>2,436.58</Text>
            </View>
          </View>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-gray-300 text-lg font-semibold`}>Available balance</Text>
            <View style={tw`flex flex-row`}>
              <Text style={[tw`text-gray-300 mr-1 mt-4`, {fontSize: 10}]}>MUR</Text>
              <Text style={tw`text-white text-lg font-bold`}>2,436.58</Text>
            </View>
          </View>
      </View>
    </>
  )
}
