import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import tw from "twrnc";
import IconButtons from '../components/Buttons/IconButtons';

export default function Details({navigation, route}) {
  const {product} = route.params

  const handleAddToCart = () => {

  }
  const handleAddRating = () => {
    product.active = !product.active;
  }

  return (
    <>
      <View style={tw`flex py-4 mt-13 px-8 flex-row justify-between items-center`}>
            <MaterialCommunityIcons onPress={() => navigation.goBack()} name="arrow-left" size={24} />
            <Text style={tw`text-[24px] font-bold`}>Details</Text>
            <MaterialIcons name="notifications-on" size={20} />
      </View>
    <ScrollView contentContainerStyle={{height: "100%"}}>
        <View style={tw`px-8 h-full`}>
            <View style={tw`h-[300px] overflow-hidden w-full`}>
            <Image source={product.source} style={tw`w-full h-[280%] -mt-[55%] rounded-[10px] self-center`} resizeMode="cover" />
            </View>
            <MaterialCommunityIcons onPress={() => handleAddRating()} 
            name={product.active ? "heart":"heart-outline"} 
            style={tw`bg-white shadow-lg absolute right-28 top-6 rounded-[10px] ${product.active ? "text-red-600":"text-black"} p-2`} size={20} />
            <Text style={tw`text-[24px] font-semibold mt-2`}>{product.name}</Text>
            <View style={tw`flex flex-row justify-between items-center w-5/12`}>
              <MaterialCommunityIcons name="star" size={20} color={"orange"} />
              <Text style={tw`font-semibold text-[16px]`}>{product.rating}/5</Text>
              <Text style={tw`opacity-60 ml-1 text-[16px]`}>({Math.floor(Math.random()*100)} reviews)</Text>
            </View>
            <Text style={tw`mt-5 leading-[22px] text-[14px] opacity-60`}>{product.description}</Text>
            <Text style={tw`text-[20px] font-semibold mt-2`}>Choose size</Text>
            <View style={tw`flex flex-row border-gray-200 justify-between items-center w-5/12 mt-3`}>
                <Pressable style={tw`w-3/12 border border-gray-400 rounded-[10px] p-2`}>
                  <Text style={tw`text-center opacity-50`}>S</Text>
                </Pressable>
                <Pressable style={tw`w-3/12 border border-gray-400 border rounded-[10px] p-2`}>
                  <Text style={tw`text-center opacity-50`}>M</Text>
                </Pressable>
                <Pressable style={tw`w-3/12 border border border-gray-400 rounded-[10px] p-2`}>
                  <Text style={tw`text-center opacity-50`}>L</Text>
                </Pressable>
            </View>
        </View>
        </ScrollView>
        <View style={tw`border-t flex flex-row justify-between items-center border-gray-300 px-6 py-2`}>
            <View>
              <Text style={tw`text-[12px] opacity-600`}>Price</Text>
              <Text style={tw`text-[22px] font-semibold`}>PKR {product.price}</Text>
            </View>
            <View style={tw`w-7/12`}>
              <IconButtons onPress={() => handleAddToCart()} icon={<Entypo name='shopping-bag' color={"white"} size={20} />} text={"Add to Cart"} backgroundColor={"black"} color='white' />
            </View>
        </View>
    </>
  )
}
