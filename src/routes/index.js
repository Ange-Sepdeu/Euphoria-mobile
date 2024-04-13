import Login from '../screens/Login'
import Signup from '../screens/Signup'
import OnboardingScreen from "../screens/OnboardingScreen"
import HomeScreen from "../screens/HomeScreen";
import Details from "../screens/Details";

export const ROUTES = [
    {
        route: "Onboarding",
        component:  OnboardingScreen
    },
    {
        route:"Login",
        component:Login
    },
    {
        route:"Signup",
        component:Signup
    },
    {
        route:"Details",
        component:Details
    }    
]