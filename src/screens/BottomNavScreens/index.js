import Home from "./Home"
import Saved from './Saved'
import Settings from "./Settings"
import Cart from "./Cart"

export const BOTTOM_NAV_SCREENS = [
    {
        route: "Home",
        component:  Home,
        iconName: "home",
        iconLibrary: "Feather"
    },
    {
        route: "Saved",
        component:  Saved,
        iconName:"heart-outline",
        iconLibrary:"MaterialCommunityIcons"
    },
    {
        route: 'Cart',
        component: Cart,
        iconName:'shopping-bag',
        iconLibrary:'Feather'
    },
    {
        route:'Settings',
        component: Settings,
        iconName:'settings-outline',
        iconLibrary:'Ionicons'
    }
]