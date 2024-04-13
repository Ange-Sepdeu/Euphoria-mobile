import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useEffect, useState } from "react"
import { Modal, Pressable, ScrollView, Text, View } from "react-native"
import tw from "twrnc"
import TransactionsFilter from "./TransactionsFilter"

export default function TransactionsTab(){
    const data = [
        {
            date: new Date("2024-02-13").toDateString(),
            amount: 21.00,
            info: "E-BANKING BILL PAYMENT 23055197144 EMTEL Recharge"
        },
        {
            date: new Date("2024-01-14").toDateString(),
            amount: 400.00,
            info: "SUNDRIES MCB LA LOUISE"
        },
        {
            date: new Date("2023-12-14").toDateString(),
            amount: 200.00,
            info: "SUNDRIES MCB LA LOUISE"
        },
        {
            date: new Date().toDateString(),
            amount: 475.58,
            info: "SUNDRIES MCB LA LOUISE"
        }
    ]
    const [transactionData, setTransactionData] = useState(data)
    const [filteredTransactionData, setFilteredTransactionData] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [allFilters, setAllFilters] = useState(null)

    const handleApplyAmountFilter = () => {
        const amountFilter = allFilters?.amount?.selectedAmountFilter
        var filteredData = []
        var dataFromTransaction = [...data]
        switch(amountFilter?.toLowerCase()) {
            case "min":
                const minimumAmount = allFilters?.amount?.min
                filteredData = dataFromTransaction.filter((data) => (data.amount >= Number(minimumAmount)))
                break;
            case "max":
                const maximumAmount = allFilters?.amount?.max
                filteredData = dataFromTransaction.filter((data) => (data.amount <= Number(maximumAmount)))
                break;
            case "range":
                let min = allFilters?.amount?.min
                let max = allFilters?.amount?.max
                filteredData = dataFromTransaction.filter((data) => ((data.amount <= Number(max)) && (data.amount >= Number(min))))
                break;
        }
         setTransactionData(filteredData)
         return filteredData
    }
    const handleApplyDateFilter = (dataTransaction) => {
        const selectedDateOption = allFilters?.date?.selectedDateOption
        const fromDate = new Date(allFilters?.date?.fromDate)
        let currentDate = new Date()
        var filteredTransaction = []
        // var dataTransaction = []
        // dataTransaction = [...transactionData]
        console.log("Transaction data after handleApplyDate is called: ", dataTransaction)
        const toDate = new Date(allFilters?.date?.toDate)
        switch(selectedDateOption?.toLowerCase()) {
            case "last 30 days":
                filteredTransaction = dataTransaction.filter(data => (Math.round((currentDate.getTime() - new Date(data.date).getTime())/(1000*3600*24)) <= 30))
                break
            case "last 60 days":
                filteredTransaction = dataTransaction.filter(data => (Math.round((currentDate.getTime() - new Date(data.date).getTime())/(1000*3600*24)) <= 60))
                break
            case "last 90 days":
                filteredTransaction = dataTransaction.filter(data => (Math.round((currentDate.getTime() - new Date(data.date).getTime())/(1000*3600*24)) <= 90))
                break
            default: 
                filteredTransaction = dataTransaction.filter(data => ((new Date(data.date).getTime() >= fromDate.getTime()) && (new Date(data.date).getTime() <= toDate.getTime())))
        }
            setTransactionData(filteredTransaction)
    }
    const handleApplyAllFilters = () => {
        if (allFilters){
            const filtered = handleApplyAmountFilter()
            handleApplyDateFilter(filtered)
        }
        else 
        setTransactionData(data)
    }
    useEffect(() => {
        handleApplyAllFilters()
    }, [allFilters])
    return (
        <View>
            <Modal visible={modalVisible}>
                <View style={tw`px-6 py-4`}>
                    <View style={tw`flex flex-row justify-between items-center w-9/12`}>
                     <MaterialCommunityIcons name='chevron-left' size={30} onPress={() => setModalVisible(!modalVisible)}/>
                     <Text style={tw`font-bold text-center text-lg`}>Filter Transactions</Text>
                    </View>
                    <TransactionsFilter allFilters={allFilters} setAllFilters={setAllFilters} />
                </View>
            </Modal>
            <View style={tw`flex bg-gray-100 flex-row items-center w-full`}>
                <View style={tw`w-9/12`}></View>
                <View style={tw`w-3/12 flex flex-row justify-between items-center`}>
                <Text style={tw`font-bold text-green-900`}>Filter by</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Ionicons name='filter' size={24} style={tw`text-green-900 ml-3`} />
                </Pressable>
                </View>
            </View>
            <View style={{height: "80%"}}>
            <ScrollView>
            {transactionData.length > 0 ? transactionData.map((transaction, index) => (
              <View style={tw`border-b border-gray-300 mt-5 w-full`} key={index}>
                    <View style={tw`bg-gray-300 py-4`}> 
                        <Text style={tw`text-center text-gray-500`}>{transaction.date}</Text>
                    </View>
                    <View style={tw`w-full flex p-4 flex-row justify-between items-center`}>
                        <Text style={tw`w-5/12`}>{transaction.info}</Text>
                        <View style={tw`flex w-3/12 flex-row justify-between`}>
                            <Text style={{fontSize: 10,marginTop:15, fontWeight: 500}}>MUR</Text>
                            <Text style={tw`text-lg font-bold w-10/12`}>-{transaction.amount}</Text>
                        </View>
                    </View>
              </View>
            ))
                : 
                <Text style={tw`text-center mt-7 font-semibold text-green-900 text-xl`}>No data to display</Text>
        }
            </ScrollView>
            </View>
        </View>
    )
}