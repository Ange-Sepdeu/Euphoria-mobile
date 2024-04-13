import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import tw from "twrnc"

export default function Step1() {
    const [name, setName] = useState("")
    // const [name, setName] = useState("")
    // const [name, setName] = useState("")
    return (
        <ScrollView style={tw`mt-7`} contentContainerStyle={{height: "100%"}}>
            <View style={tw`ml-5 h-full flex flex-col`}>
                <View style={tw`flex flex-row justify-between items-center bg-white p-3 mt-5 border border-gray-300 rounded-md`}>
                <TextInput 
                 value={name}
                 keyboardType="name-phone-pad"
                 onChangeText={(text) => setName(text)}
                 placeholder="Enter your name"
                />
                <MaterialCommunityIcons name="pencil" size={24} style={tw`text-green-900`} />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter email'
                    keyboardType="email-address"
                />
                <MaterialCommunityIcons name="email-outline" size={24} style={tw`text-green-900`} />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter password'
                    secureTextEntry
                />
                    <AntDesign name="eyeo" size={24} style={tw`text-green-900`}/>
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter confirm password'
                    secureTextEntry
                />
                    <AntDesign name="eyeo" size={24} style={tw`text-green-900`}/>
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter phone number'
                    keyboardType="phone-pad"
                />
                    <AntDesign name="phone" size={24} style={tw`text-green-900`}/>
                </View>
            </View>
        </ScrollView>
    )
}