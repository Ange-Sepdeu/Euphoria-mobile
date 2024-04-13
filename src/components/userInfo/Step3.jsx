import { useState } from "react";
import { ScrollView, Modal, Text, View, TextInput, Pressable, TouchableOpacity } from "react-native";
import tw from "twrnc"
import { Ionicons, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import * as documentPicker from "expo-document-picker"
import { SelectList } from "react-native-dropdown-select-list";

export default function Step3() {
    const [image, setImage] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState("Identification Document")
    const [docs, setDocs] = useState([])
    const [imageFromCamera, setImageFromCamera] = useState(null)
    const documentOptions = [
        {key: '1', value: "Identification Document"},
        {key: '2', value: "Recent Bill"},
        {key: '3', value: "Identity verification"}
    ]
    const billOptionsValues = [
        {key: '1', value: "Water bill"},
        {key: '2', value: "Light Bill"},
        {key: '3', value: "Bank statement"}
    ]
    const openCamera = async() => {
            let cameraResult = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                allowsEditing: true,
                base64: true,
                aspect: [4, 3],
            })
        if (!cameraResult.canceled) {
            setImageFromCamera(cameraResult.assets[0])
            console.log("Image Result: ", cameraResult.assets[0])
        }
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          base64: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
         console.log("Assets: ", result.assets[0])
        }
      };
    const uploadDocs = async() => {
        let result = await documentPicker.getDocumentAsync({
            multiple: true,
            type: ["text/plain", "application/*"]
        })
        setDocs(result.assets)
    }
    const handleSelect = (value) => {
        setSelectedDoc(value)
        setModalVisible(!modalVisible)
    }
    const [billOption, setBillOption] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={tw`mt-7`}>
            <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="formSheet">
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={tw`absolute right-10 top-5`}>
                <MaterialCommunityIcons name="close" size={24} style={tw`text-green-900`} />
            </Pressable>
        <View style={tw`p-4 mt-7`}>
            {
                documentOptions?.map((option, index) => (
                    <TouchableOpacity key={index} style={tw`p-4 border-b-2 border-green-900`} onPress={() => handleSelect(option.value)} >
                        <Text>{option.value}</Text>
                    </TouchableOpacity>  
                ))
            }
         </View>
      </Modal>
            <Pressable style={tw`p-3 rounded-lg border-2 border-green-900 mb-7`} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={tw`text-green-900 text-center font-bold text-lg`}>Choose document type</Text>
            </Pressable>
            {
                selectedDoc.toLowerCase() === "recent bill" && (
                <>
                <Text style={tw`mb-5 text-center text-lg font-semibold`}>{selectedDoc}</Text>
                <SelectList setSelected={setBillOption} save="value" data={billOptionsValues} />
                <Pressable style={tw`flex flex-col mt-5 justify-between items-center self-center w-5/12`} onPress={uploadDocs}>
                <Ionicons name="document-attach-outline" size={60} />
                <Text style={tw`font-semibold text-center`}>Upload document(s)</Text>
                </Pressable>
                </>
                )
            }
            {
                selectedDoc.toLowerCase() === "identification document" && (
                <>
                <Text style={tw`mb-5 text-center text-lg font-semibold`}>{selectedDoc}</Text>
            <View style={tw`ml-5 mt-7 flex flex-row justify-between items-center self-center`}>
                <Pressable onPress={pickImage} style={tw`flex flex-col justify-between items-center w-5/12`}>
                <FontAwesome6 name="upload" size={60} />
                <Text style={tw`font-semibold text-center`}>Upload a picture</Text>
                </Pressable>
            </View>
            </>
                )
            }
            {
                selectedDoc.toLowerCase() === "identity verification" && (
                <>
                <Text style={tw`mb-5 text-center text-lg font-semibold`}>{selectedDoc}</Text>
            <View style={tw`ml-5 flex flex-row justify-between items-center self-center`}>
                <Pressable onPress={openCamera} style={tw`flex flex-col justify-between items-center w-5/12`}>
                <FontAwesome6 name="camera" size={60} />
                <Text style={tw`font-semibold text-center`}>Open camera</Text>
                </Pressable>
            </View>
            </>
                )
            }
        </View>
    )
}