import { View, Text,Pressable, TextInput, KeyboardAvoidingView,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { AntDesign, Ionicons, MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons"
import Buttons from '../components/Buttons/Buttons';
import IconButtons from "../components/Buttons/IconButtons";
import { COLORS, IMAGES } from '../constants';
import {Controller, useForm} from "react-hook-form"
import axiosInstance from '../axiosInstance/axiosInstance';
import { useDispatch } from 'react-redux';
import { setUserLoginState } from '../redux/slices/user.slice';

export default function Login({navigation}) {
  const {control,handleSubmit, formState: { errors }} = useForm();
  const dispatch = useDispatch();
  
  const handleSignIn = (values) => {
    const url="/api/auth/login"
    axiosInstance.post(url, values)
    .then(response => {
      const user = response.data.data.user;
      const token = response.data.data.token;
        dispatch(setUserLoginState({token, _id:user._id, fullName:user.username, email:user.email}));
        navigation.navigate("HomeScreen");
    })
    .catch(error => console.log(error.response.data.message))
  }

  const handleSocialMediaSignIn = (socialMedia) => {}

  return (
    <KeyboardAvoidingView behavior='padding' style={tw`flex-1 bg-white`}>
      <ScrollView>
        <View style={tw`w-full h-full px-1 py-8 flex-col justify-between`}>
          <View style={tw`px-4 py-8`}>
            <Text style={tw`text-[36px] font-semibold text-left leading-[49px] w-full`}>Log in</Text>
            <Text style={tw`text-[16px] text-[${COLORS.primary}] opacity-60 leading-[19.36px]`}>Let’s sign you in</Text>
            </View>
                <View style={tw` mt-4 self-center w-11/12`}>
                <Text style={tw`text-[16px] font-semibold`}>Email</Text>
                      <Controller
                         control={control}
                         rules={{
                          required: "* Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address"
                          }
                         }}
                         render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                          placeholder="Enter your email address"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          style={tw`rounded-[10px] bg-black text-black opacity-60 bg-opacity-5 w-full py-2 h-[53px] px-8 mt-2`}
                          />
                         )}
                         name="email"
                       />
                       {errors.email && <Text style={tw`text-red-600 px-4`}>{errors.email.message}</Text>}
                </View>
                <View style={tw`mt-4`}>
                <Text style={tw`px-4 text-[16px] font-semibold`}>Password</Text>
                <View style={tw`bg-black bg-opacity-5 self-center w-11/12 rounded-[10px] h-[53px] flex mt-2 flex-row justify-between items-center`}>
                <Controller
                         control={control}
                         rules={{
                          required: "* Required",
                          minLength: 4
                         }}
                         render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                          placeholder="Enter your password"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry
                          value={value}
                          style={tw`rounded-[10px]  text-black w-10/12 py-2 h-[53px] px-8 mt-2`}
                          />
                         )}
                         name="password"
                       />
                  <AntDesign name='eyeo'
                  style={tw`pr-4 text-black opacity-40`} size={20}  />
                </View>
                {errors.password && <Text style={tw`text-red-600 px-4`}>{errors.password.message}</Text>}   
                </View> 
              <View style={tw`mt-5 mb-20 w-full items-center`}>
                <Buttons text={"Sign In"} onPress={handleSubmit(handleSignIn)} backgroundColor={"black"} />
                <View style={tw`mt-5 flex flex-row w-11/12 self-center justify-between items-center`}>
                  <View style={tw`border-t border-gray-300 w-5/11`}></View>
                  <Text style={tw`text-[14px] text-black opacity-40`}>or</Text>
                  <View style={tw`border-t border-gray-300 w-5/11`}></View>
                </View>
                <IconButtons text={"Sign In with Google"} onPress={() => handleSocialMediaSignIn("Google")} border='' backgroundColor={"white"} />
                <IconButtons onPress={() => handleSocialMediaSignIn("facebook")} icon={<MaterialCommunityIcons name="facebook" color={"white"} size={24} />} text={"Sign In with Facebook"} color='white' backgroundColor={`[${COLORS.secondary}]`} />
              </View>    
              <View style={tw`flex self-center w-5/12 bottom-0 flex-row justify-between items-center`}>
                <Text style={tw`text-black opacity-60`}>Not a member?</Text>
                <Pressable style={tw`underline`} onPress={() => navigation.navigate("Signup")}>
                  <Text style={tw`underline font-semibold`}> Sign Up</Text>
                </Pressable>  
              </View>         
            </View>
            </ScrollView>
    </KeyboardAvoidingView>
  )
}