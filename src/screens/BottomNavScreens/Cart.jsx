import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import tw from "twrnc";
import IconButtons from '../../components/Buttons/IconButtons';
import CartCard from "../../components/CartCard";

export default function Cart() {
  return (
    <View style={tw`h-full bg-white`}>
      <View style={tw`flex py-4 mt-13 px-8 flex-row justify-between items-center`}>
            <MaterialCommunityIcons  name="arrow-left" size={24} />
            <Text style={tw`text-[24px] font-bold`}>My Cart</Text>
            <MaterialIcons name="notifications-on" size={20} />
      </View>
      <View style={tw`h-[48%]`}>
      <ScrollView contentContainerStyle={{height: "100%"}}>
        {
          [1,2,3].map((_,index) => (
            <CartCard key={index} />
          ))
        }
      </ScrollView>
      </View>
      <Pressable style={tw`self-center w-10/12 bg-opacity-5 bg-black p-3 rounded-[10px]`}>
        <Text style={tw`opacity-50`}>Add a voucher</Text>
      </Pressable>
      <View style={tw`w-10/12 self-center mt-5 flex flex-row justify-between items-center`}>
        <Text style={tw`opacity-50`}>Sub-total</Text>
        <Text style={tw`font-bold`}>PKR 5,870</Text>
      </View>
      <View style={tw`w-10/12 self-center mt-3 flex flex-row justify-between items-center`}>
        <Text style={tw`opacity-50`}>VAT (%)</Text>
        <Text style={tw`font-bold`}>PKR 0.00</Text>
      </View>
      <View style={tw`w-10/12 self-center mt-3 flex flex-row justify-between items-center`}>
        <Text style={tw`opacity-50`}>Shipping fee</Text>
        <Text style={tw`font-semibold font-bold`}>PKR 80</Text>
      </View>
      <View style={tw`border-t border-gray-200 w-10/12 mt-5 self-center flex flex-row justify-between items-center py-2 px-1`}>
        <Text style={tw`opacity-60`}>Total</Text>
        <Text style={tw`font-bold`}>PKR 5,950</Text>
      </View>
      <View style={tw`border-b border-gray-200`}></View>
      <View style={tw`w-10/12 self-center mt-5`}>
      <IconButtons text={"Checkout"} position={"right"} backgroundColor={"black"} color={"white"} icon={<MaterialCommunityIcons name="arrow-right" size={20} color={"white"} />} />
      </View>
    </View>
  )
}