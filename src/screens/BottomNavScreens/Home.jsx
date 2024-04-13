import { View, Text, ScrollView, TextInput, Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header/Header';
import ViewSlider from '../../components/Sliders/ViewSlider';
import Card from '../../components/Card';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, FontAwesome6, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import regularFitSlogan from "../../assets/regular-fit-slogan.png";
import regularFitPolo from "../../assets/regular-fit-polo.png";
import regularFitColorBlack from "../../assets/regular-fit-color-block.png";
import regularFitVNeck from "../../assets/regular-fit-v-neck.png";
import pinkLongSleeves from "../../assets/pink-long-sleeves.png";
import blackLongSleeves from "../../assets/black-long-sleeves.png";
import { addSaveProduct, removeSaveProduct } from '../../redux/slices/saved.slice';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../axiosInstance/axiosInstance';

export default function Home({navigation}) {
  const [activeFilterButton, setActiveFilterButton] = useState("All");
  const dispatch = useDispatch()
  const data = [{
    _id:1,
    name: "Regular fit slogan",
    price: "1,190",
    deduction: "",
    rating: (Math.random()*5).toFixed(1), 
    category: "Men",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    source: regularFitSlogan,
    active: false
  },
  {
    _id:2,
    name: "Regular fit polo",
    price: "1,500",
    deduction: "-52%",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    category: "Men",
    source: regularFitPolo,
    rating: (Math.random()*5).toFixed(1),
    active: false
  },
  {
    _id:3,
    name: "Regular fit color block",
    price: "1,690",
    deduction: "",
    category: "Kids",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    source: regularFitColorBlack,
    rating:(Math.random()*5).toFixed(1),
    active: false
  },
  {
    _id:4,
    name: "Regular fit v-neck",
    price: "1,290",
    deduction: "",
    category: "Kids",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    source: regularFitVNeck,
    rating: (Math.random()*5).toFixed(1),
    active: false
  },
  {
    _id:5,
    name: "Pink long sleeves",
    price: "1,350",
    deduction: "-25%",
    category: "Women",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    source: pinkLongSleeves,
    rating: (Math.random()*5).toFixed(1),
    active: false
  },
  {
    _id:6,
    name: "Black Long Sleeves",
    price: "1,190",
    deduction: "",
    description: "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.",
    category: "Men",
    source: blackLongSleeves,
    rating: (Math.random()*5).toFixed(1),
    active: false
  }
]
  const [articles,setArticles] = useState(data);

  const getAllCategories = () => {
    const url = "/api/admin/getCategories"
    axiosInstance.get(url)
    .then(response => setArticles(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
      getAllCategories();
  })


  const handleFilter = (filter) => {
      setActiveFilterButton(filter);
       if (filter.toLowerCase() === "all")
          setArticles(data);
        else
        {          
          const art = [...data];
          const filtered = art.filter((filt) => filt.category == filter);
          setArticles(filtered);
        }
      }
  const handleModifyProduct = (_id) => {
      const products = [...articles];
      let product;
      products.forEach((pdt) => {
          if (pdt._id === _id)
          {
            product = pdt;
            pdt.active = !pdt.active
          }
      })
      setArticles(products);
      console.log("PDT:", product);
      if (product.active) {
        dispatch(addSaveProduct({data: product}));
      }
      else {
        dispatch(removeSaveProduct(product));
      }
  }
  const handleNavigate = (product) => {
      navigation.navigate("Details", {product})
  }
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
       <View style={tw`px-4 flex flex-row justify-between items-center mt-15`}>
          <Text style={tw`text-[32px] font-semibold`}>Discover</Text>
          <MaterialIcons name="notifications-on" size={20} />
       </View>
       <View style={tw`flex flex-row justify-between items-center self-center mt-4 w-11/12`}>
          <View style={tw`px-4 py-2 rounded-[10px] flex flex-row justify-start items-center bg-black bg-opacity-5 w-10/12`}>
            <AntDesign name="search1" size={16} style={tw`font-bold`} />
            <TextInput 
             placeholder='Search anything'
              style={tw`ml-3`}
            />
          </View>
          <MaterialCommunityIcons name="filter-variant" style={tw`rounded-md bg-black text-white p-2`} size={24} />
       </View>
       <View style={tw`w-11/12 self-center flex mt-5 flex-row justify-between items-center`}>
            <Pressable 
              onPress={() => handleFilter("All")} 
              style={tw`bg-black ${activeFilterButton === "All" ? "":"bg-opacity-5"} rounded-[10px] p-3 w-[23%]`}>
                <Text style={tw`${activeFilterButton === "All" ? "text-white":"text-black"} text-center`}>All</Text>
            </Pressable>
            <Pressable 
            onPress={() => handleFilter("Men")} 
            style={tw`bg-black ${activeFilterButton === "Men" ? "":"bg-opacity-5"} rounded-[10px] p-3 w-[23%]`}>
                <Text style={tw`${activeFilterButton === "Men" ? "text-white":"text-black"} text-center`}>Men</Text>
            </Pressable>
            <Pressable 
            onPress={() => handleFilter("Women")} 
            style={tw`bg-black ${activeFilterButton === "Women" ? "":"bg-opacity-5"} rounded-[10px] p-3 w-[23%]`}>
                <Text style={tw`${activeFilterButton === "Women" ? "text-white":"text-black"} text-center`}>Women</Text>
            </Pressable>
            <Pressable 
            onPress={() => handleFilter("Kids")} 
            style={tw`bg-black ${activeFilterButton === "Kids" ? "":"bg-opacity-5"} rounded-[10px] p-3 w-[23%]`}>
                <Text style={tw`${activeFilterButton === "Kids" ? "text-white":"text-black"} text-center`}>Kids</Text>
            </Pressable>
       </View>
       <ScrollView>
       <View style={tw`w-11/12 -mt-5 mb-7 self-center flex flex-row justify-between items-center flex-wrap`}>
        {
          articles?.map((article, index) => (
            <Pressable key={index} style={tw`w-[49%] h-[200px] mt-25`} onPress={() => handleNavigate(article)}>
            <Card onPress={() => handleModifyProduct(article._id)} selected={article.active}  articleName={article.name} articlePrice={article.price} deduction={article.deduction} source={article.source} />
            </Pressable>
          ))
        }
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}