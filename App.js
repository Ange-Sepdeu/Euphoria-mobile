import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from './src/routes/index.js'; 
import { BOTTOM_NAV_SCREENS } from './src/screens/BottomNavScreens/index.js'; 
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from './src/constants/index.js';
import { Provider } from 'react-redux';
import {store, persistor} from "./src/redux/store.js";
import { PersistGate } from 'redux-persist/lib/integration/react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarAllowFontScaling: true,
      }}
    >
      {
        BOTTOM_NAV_SCREENS?.map((screen,index)=>
            <Tab.Screen 
              key={screen?.route+index.toString()} 
              name={screen?.route} 
              component={screen?.component}
              options={{
                tabBarIcon: ({ color, size }) => (
                  screen.iconLibrary==='Entypo' ?
                  (<Entypo name={screen.iconName} color={color} size={size} />)
                  :
                  screen.iconLibrary === 'FontAwesome' ?
                  (<FontAwesome name={screen.iconName} color={color} size={size} />)
                  :
                  screen.iconLibrary === 'MaterialCommunityIcons' ?
                  (<MaterialCommunityIcons name={screen.iconName} color={color} size={size} />)
                  : 
                  screen.iconLibrary === 'Ionicons' ?
                  (<Ionicons name={screen.iconName} color={color} size={size} />)
                  :
                  screen.iconLibrary === 'Feather' ?
                  (<Feather name={screen.iconName} color={color} size={size} />)
                  :
                  null
                ),
              }}
            />
        )
      }
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        {
          ROUTES?.map((screen,index)=>
            <Stack.Screen 
              key={screen.route+index.toString()} 
              name={screen.route} 
              component={screen.component} 
              options={{ headerShown: false }} 
            />
          )
        }
        
         {/* Bottom Tab Navigator implemented */}
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}