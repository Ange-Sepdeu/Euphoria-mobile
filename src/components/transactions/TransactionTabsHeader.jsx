import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import TransactionsTab from "./TransactionsTab"
import DetailsTab from "./DetailsTab"
import StatementsTab from "./StatementsTab"
import CardsTab from "./CardsTab"

export default function TransactionTabsHeader() {
    const tabHeaders = [
        {
           name:"Transactions",
           active: true
        },
        {
            name:"Details",
            active: false
         },
         {
            name:"Cards",
            active: false
         },
         {
            name:"Statements",
            active: false
         }
    ]
    const [tabOption, setTabOption] = useState(tabHeaders)
    const handleChangeTab = (val) => {
        const tabs = [...tabOption]
        tabs.forEach(tab => {
            tab.active = false
        })
        tabs.forEach(tab => {
            if (tab.name.toLowerCase() == val.toLowerCase())
            tab.active = true
        })
        setTabOption(tabs)
    }
    return (
        <View style={tw`px-4 py-2`}>
            <View style={tw`flex flex-row justify-between items-center`}>
            {tabOption?.map((tab,index) => (
                    <Pressable onPress={(() => handleChangeTab(tab.name))} style={tw`${tab.active && "border-b-2 border-green-900"} p-2`} key={index}>
                        <Text style={tw`${tab.active && "text-green-900 font-bold"}`}>{tab.name}</Text>
                    </Pressable>
            ))}
            </View>
            <View style={tw`py-2`}>
            {
                tabOption.map((tab, index) => {
                    if (tab.active){
                        switch(tab.name.toLowerCase()){
                            case "transactions":
                                return <TransactionsTab key={index} />
                            case "cards":
                                return <CardsTab key={index} />
                            case "details":
                                return <DetailsTab key={index} />
                            case "statements":
                                return <StatementsTab key={index} />
                        } 
                    }
                })
            }
            </View>
        </View>
    )
}
