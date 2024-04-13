import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React,{useState} from 'react'
import { View,Text, Pressable, Image } from 'react-native'
import tw from "twrnc";
import regularFitSlogan from "../assets/regular-fit-slogan.png";

export default function CartCard() {
    const [quantity, setQuantity] = useState(Math.floor(Math.random()*5));
    const addQuantity = () => {
        setQuantity(() => quantity+1);
    }
    const removeQuantity = () => {
        if (quantity > 1){
            setQuantity(() => quantity-1)
        }
    }
  return (
    <>
        <View style={tw`p-3 mb-4 w-10/12 h-[100px] self-center rounded-[10px] flex flex-row justify-between items-center bg-black bg-opacity-5`}>
            <View style={tw`w-3/12 h-[80px] overflow-hidden rounded-[10px] border border-gray-300`}>
                <Image source={regularFitSlogan} style={tw`w-full h-[270%] -mt-[60%] rounded-[10px] self-center`} resizeMode="cover" />
            </View>
            <View style={tw`w-9/12 p-2`}>
            <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`text-[14px] font-semibold`}>Regular fit slogan</Text>
            <AntDesign name="delete" size={14} color={"red"} style={tw`text-right`} />
            </View>
            <Text style={tw`text-[12px] opacity-60`}>Size L</Text>
            <View style={tw`mt-2 flex flex-row justify-between w-11/12 items-center`}>
                <Text style={tw`text-[16px] font-semibold`}>PKR 1, 290</Text>
            <View style={tw`flex flex-row justify-between items-center w-4/12`}>
                    <Pressable onPress={() => removeQuantity()} style={tw`border border-gray-300 px-3 py-1 rounded-[10px]`}>
                        <Text style={tw`text-center`}>-</Text>
                    </Pressable>
                    <Text style={tw`ml-2`}>{quantity}</Text>
                    <Pressable onPress={() => addQuantity()} style={tw`border ml-2 border-gray-300 px-3 py-1 rounded-[10px]`}>
                        <Text style={tw`text-center`}>+</Text>
                    </Pressable>
            </View>
            </View>
            </View>
        </View>
    </>
  )
}
