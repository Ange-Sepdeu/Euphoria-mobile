import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import tw from "twrnc";
import onboardingImage from "../assets/onboarding.png"
import bgSplashImage from "../assets/bg-splash.png"
import Buttons from '../components/Buttons/Buttons';
import IconButtons from '../components/Buttons/IconButtons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OnboardingScreen({navigation}) {
  return (
    <>
        <ScrollView contentContainerStyle={{height: "100%"}}>
        <View style={tw`py-4 bg-white h-full`}>
            <Text style={tw`text-[64px] mt-10 leading-[49px] px-6 pt-5 font-semibold w-[90%]`}>
                Define yourself in
            </Text>
            <Text style={tw`text-[64px] leading-[49px] px-6 font-semibold w-[90%]`}
            >your
            </Text>
            <Text style={tw`text-[64px] leading-[49px] px-6 font-semibold w-[90%]`}>unique</Text>
            <Text style={tw`text-[64px] leading-[49px] px-6 font-semibold w-[90%]`}>way.</Text>
            <View style={tw`h-[500px] -mt-[37%] overflow-hidden mb-10`}>
            <Image 
             style={tw`w-full -mt-[25%]`}
             source={bgSplashImage}
             resizeMode='cover'
             />
             <View style={[tw`absolute h-full  w-full right-0`, {elevation:5}]}>
            <Image 
             style={[tw`w-full h-[160%] absolute ml-7`]}
             source={onboardingImage}
             resizeMode='cover'
             />
             </View>
             </View>
             <IconButtons text={"Get Started"} 
             position='right' backgroundColor={"black"} 
             color='white'
              onPress={() => navigation.navigate("Login")} 
             icon={<MaterialCommunityIcons name="arrow-right" size={24} color={"white"} />} />
        </View>
        </ScrollView>
    </>
  )
}
