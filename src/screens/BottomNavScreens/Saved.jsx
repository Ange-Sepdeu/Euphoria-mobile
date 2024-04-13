import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { MaterialIcons} from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { getSavedProducts } from '../../redux/slices/saved.slice';
import Card from '../../components/Card';

export default function Saved({navigation}) {
 const savedProducts = useSelector(getSavedProducts);
  // console.log(savedProducts)
  return (
    <View style={tw`h-full bg-white`}>
      <View style={tw`flex py-4 mt-13 px-8 flex-row justify-between items-center`}>
            <Text style={tw`text-[24px] font-bold`}>Saved Products</Text>
            <MaterialIcons name="notifications-on" size={20} />
            {
              [...savedProducts]?.map((product, index) => (
                <Card 
                source={product.source} 
                key={index} 
                onPress={() => navigation.navigate("details", {product})}
                articleName={product.name}
                articlePrice={product.price}
                selected={true} 
                />
              ))
            }
      </View>
    </View>
  )
}