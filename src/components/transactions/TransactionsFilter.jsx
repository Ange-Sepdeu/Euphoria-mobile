import React, {useState} from 'react'
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import tw from 'twrnc'
import Buttons from "../Buttons/Buttons"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TransactionsFilter(props) {
    const [filterOptions, setFilterOptions] = useState([
        {
            name: "All",
            active: true
        },
        {
            name: "Inward",
            active: false
        },
        {
            name: "Outward",
            active: false
        }
    ])
    const handleChangeOption = (value) => {
        const options = [...filterOptions]
        options.forEach(option => {
            option.active = false
        })
        options.forEach(option => {
            if (option.name.toLowerCase() == value.toLowerCase()){
                option.active = true
            }
        })
        setSelectedFilterOption(value)
        setFilterOptions(options)
    }
    const initialDateRange = [
        {
        label: "Last 30 Days",
        active: true
        },
        {
            label: "Last 60 Days",
            active: false
        },
        {
            label: "Last 90 Days",
            active: false
        },
        {
            label: "Custom date",
            active: false
        }
    ]
    const [dateRangeOption,setDateRangeOption] = useState(initialDateRange)
    const handleChangeDateOption = (value) => {
        const options = [...dateRangeOption]
        options.forEach(option => {
            option.active = false
        })
        options.forEach(option => {
            if (option.label.toLowerCase() == value.toLowerCase()){
                option.active = true
            }
        })
        setSelectedDate(value)
        setDateRangeOption(options)
    }
    const initialAmountRange = [
        {
        label: "Min",
        active: true
        },
        {
            label: "Max",
            active: false
        },
        {
            label: "Range",
            active: false
        }
    ]
    const [amountRangeOption,setAmountRangeOption] = useState(initialAmountRange)
    const [selectedDate, setSelectedDate] = useState("Last 30 Days")
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [selectedAmountFilter, setSelectedAmountFilter] = useState("Min")
    const [min, setMin] = useState(0.00)
    const [max, setMax] = useState(0.00)

    const handleChangeAmountOption = (value) => {
        const options = [...amountRangeOption]
        options.forEach(option => {
            option.active = false
        })
        options.forEach(option => {
            if (option.label.toLowerCase() == value.toLowerCase()){
                option.active = true
            }
        })
        setSelectedAmountFilter(value)
        setAmountRangeOption(options)
    }
    const [selectedFilterOption, setSelectedFilterOption] = useState("All")
    const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false)
    const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false)
    const showFromDatePicker = () => {
        setFromDatePickerVisibility(true);
      };
    
      const hideFromDatePicker = () => {
        setFromDatePickerVisibility(false);
      };
    
      const handleConfirmFromDate = (date) => {
        setFromDate(date.toDateString())
        hideFromDatePicker();
      };
      const showToDatePicker = () => {
        setToDatePickerVisibility(true);
      };
    
      const hideToDatePicker = () => {
        setToDatePickerVisibility(false);
      };
    
      const handleConfirmToDate = (date) => {
        setToDate(date.toDateString())
        hideToDatePicker();
      };
    const handleApplyFilters = () => {
        const allFilters = {
            filterOption: selectedFilterOption,
            date: {
                selectedDateOption:selectedDate,
                fromDate,
                toDate
            },
            amount: {
                selectedAmountFilter,min,max
            }
        }
        Alert.alert("Applying filters", "Filters applied succesfully !")
        props.setAllFilters(allFilters)
    }
    const clearFilters = () => {
        setFromDate(null)
        setToDate(null)
        setMin(0)
        setMax(0)
        setSelectedAmountFilter("Min")
        setSelectedFilterOption("All")
        setSelectedDate("Last 30 Days")
        setAmountRangeOption(initialAmountRange)
        setDateRangeOption(initialDateRange)
        props.setAllFilters(null)
        Alert.alert("Clearing filters", "Filters cleared succesfully !")
    }
  return (
    <ScrollView>
        <View style={tw`flex flex-row justify-between items-center mt-5`}>
            <Text style={tw`text-gray-700 font-semibold`}>Filter by</Text>
            <Pressable onPress={() => clearFilters()}>
                <Text style={tw`text-green-900 font-bold`}>Clear all filters</Text>
            </Pressable>
        </View>
        <View style={tw`flex flex-row justify-between items-center self-center w-11/12 mt-5`}>
                {
                    filterOptions.map((option, index) => (
                        <Pressable 
                        onPress={() => handleChangeOption(option.name)} 
                        key={index} 
                        style={
                            [tw`${option.active ? "border-2 rounded-xl border-green-900 bg-white" : 
                            "border-2 rounded-xl p-2 border-gray-100 bg-gray-100"} p-2`, 
                            {width: "30%"}]}>
                            <Text style={tw`${option.active ? "text-green-900" : "text-gray-700"} text-center font-semibold`}>{option.name}</Text>
                        </Pressable>
                    ))
                }
        </View>
        <View>
            <Text style={tw`mt-7 text-lg font-semibold text-gray-700`}>Select a date range</Text>
            <View style={tw`flex flex-row justify-between items-center self-center flex-wrap mt-3 w-11/12`}>
                {
                    dateRangeOption.map((option, index) => (
                        <Pressable 
                        onPress={() => handleChangeDateOption(option.label)} 
                        key={index} 
                        style={
                            [tw`${option.active ? "border-2 rounded-xl bg-white border-green-900" : 
                            "border-2 rounded-xl p-2 border-gray-100 bg-gray-100"} 
                            mb-5 p-2`, {width: "47%"}
                            ]}>
                            <Text style={tw`${option.active ? "text-green-900" : "text-gray-700"} text-center font-semibold`}>{option.label}</Text>
                        </Pressable>
                    ))
                }
            </View>
                <DateTimePickerModal
                  isVisible={isFromDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirmFromDate}
                  onCancel={hideFromDatePicker}
                />
                <DateTimePickerModal
                  isVisible={isToDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirmToDate}
                  onCancel={hideToDatePicker}
                    />
             {
                selectedDate.toLowerCase() == "custom date" &&
                    <View style={tw`flex mt-3 flex-row self-center w-10/12 justify-between items-center`}>
                        <Pressable onPress={showFromDatePicker} style={[tw`flex bg-white border-2 border-gray-300 rounded-xl flex-row justify-between items-center p-4`, {width: "48%"}]}>
                        <Text style={tw`text-lg`}>{ fromDate ? fromDate : "From"}</Text>
                        <MaterialCommunityIcons size={24} name="calendar" />
                        </Pressable>
                        <Pressable onPress={showToDatePicker} style={[tw`flex border-2 border-gray-300 bg-white rounded-xl flex-row justify-between items-center p-4`, {width: "48%"}]}>
                        <Text style={tw`text-lg`}>{toDate ? toDate : "To"}</Text>
                        <MaterialCommunityIcons size={24} name="calendar" />
                        </Pressable>
                    </View>
             }
        </View>
        <View>
            <Text style={tw`mt-7 text-lg font-semibold text-gray-700`}>Select an amount range</Text>
            <View style={tw`flex flex-row justify-between items-center self-center flex-wrap mt-3 w-11/12`}>
                {
                    amountRangeOption.map((option, index) => (
                        <Pressable 
                        onPress={() => handleChangeAmountOption(option.label)} 
                        key={index} 
                        style={
                            [tw`${option.active ? 
                                "border-2 rounded-xl border-green-900 bg-white" : 
                                "border-2 rounded-xl p-2 border-gray-100 bg-gray-100"} 
                                mb-5 p-2`, 
                        {width: "32%"}]}>
                            <Text style={tw`${option.active ? "text-green-900" : "text-gray-700"} text-center font-semibold`}>{option.label}</Text>
                        </Pressable>
                    ))
                }
            </View>
            {
               (
                selectedAmountFilter.toLowerCase() == "min" || 
               selectedAmountFilter.toLowerCase() == "max"
               ) ?
                <View style={tw`flex flex-row p-2 mt-2 bg-white justify-between border-2 border-gray-400 rounded-lg items-center`}>
                    <Text style={tw`text-xl font-semibold`}>MUR</Text>
                    <View>
                        <Text style={tw`text-gray-400 font-semibold`}>{selectedAmountFilter.toLowerCase() == "min" ? 
                        "From amount" : "To amount"}
                        </Text>
                        <TextInput 
                        keyboardType="numeric"
                        placeholder='0.00'
                        style={tw`font-bold text-right text-xl`}
                        value= {selectedAmountFilter.toLowerCase() == "min" ? min.toString() : max.toString()}
                        onChangeText={(text) => { selectedAmountFilter.toLowerCase() == "min" ? setMin(text) : setMax(text)}}
                        />
                    </View>
                </View>
                    :
                    <>
                    <View style={tw`flex flex-row p-2 bg-white mt-2 justify-between border-2 border-gray-400 rounded-lg items-center`}>
                    <Text style={tw`text-xl font-semibold`}>MUR</Text>
                    <View>
                        <Text style={tw`text-gray-400 font-semibold`}>From amount</Text>
                        <TextInput 
                        keyboardType="numeric"
                        placeholder='0.00'
                        style={tw`font-bold text-right text-xl`}
                        value= {min.toString()}
                        onChangeText={(text) => setMin(text)}
                        />
                    </View>
                </View>
                <View style={tw`flex flex-row p-2 mt-2 justify-between border-2 border-gray-400 rounded-lg items-center`}>
                    <Text style={tw`text-xl font-semibold`}>MUR</Text>
                    <View>
                        <Text style={tw`text-gray-400 font-semibold`}>To amount</Text>
                        <TextInput 
                        keyboardType="numeric"
                        placeholder='0.00'
                        style={tw`font-bold text-right text-xl`}
                        value= {max.toString()}
                        onChangeText={(text) => setMax(text)}
                        />
                    </View>
                </View>
                    </>
            }
        </View>
            <View style={tw`mb-5`}></View>
            <Buttons text={"Apply Filters"} backgroundColor='green-900' onPress={() => handleApplyFilters()} />
    </ScrollView>
  )
}
