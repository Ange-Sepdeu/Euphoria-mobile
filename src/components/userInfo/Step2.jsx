import { useState } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import tw from "twrnc"
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function Step2() {
    const [name, setName] = useState("")
    // const [name, setName] = useState("")
    // const [name, setName] = useState("")
    return (
        <ScrollView style={tw`mt-7`}>
        <View style={tw`ml-5`}>
        <View style={tw`flex flex-row justify-between items-center bg-white p-3 mt-5 border border-gray-300 rounded-md`}>
                <TextInput 
                 value={name}
                 keyboardType="name-phone-pad"
                 onChangeText={(text) => setName(text)}
                 placeholder="Enter city"
                />
                <MaterialCommunityIcons name="pencil" size={24} style={tw`text-green-900`} />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter your state'
                    keyboardType="email-address"
                />
                <MaterialCommunityIcons name="pencil" size={24} style={tw`text-green-900`}/>
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter address line 1'
                    secureTextEntry
                />
                    <MaterialCommunityIcons name="pencil" size={24} style={[{width: "8%"},tw`text-green-900`]}/>
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter address line 2'
                    secureTextEntry
                />
                    <MaterialCommunityIcons name="pencil" size={24} style={tw`text-green-900`} />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-white mt-7  bg-white p-3 border border-gray-300 rounded-md`}>
                <TextInput
                    placeholder='Enter room No'
                    keyboardType="phone-pad"
                />
                    <MaterialCommunityIcons name="pencil" size={24} style={tw`text-green-900`}/>
                </View>
        </View>
    </ScrollView>
    )
}