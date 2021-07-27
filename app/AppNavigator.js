import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import ContactScreen from './screens/ContactScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from './components/Icons';
import { useNavigation } from '@react-navigation/native';
import FavouritesScreen from './screens/FavouritesScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="#fff"
                    size={30}
                    iconStyle={
                        {
                            paddingRight: 15
                        }
                    }
                />),
                headerStyle: {
                    backgroundColor: "#F53B50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }

            }>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} options={({ route }) => ({ title: route.params.dish.name })} />
        </Stack.Navigator>
    )
}

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="#fff"
                    size={30}
                    iconStyle={
                        {
                            paddingRight: 15
                        }
                    }
                />),
                headerStyle: {
                    backgroundColor: "#F53B50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesScreen} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="#fff"
                    size={30}
                    iconStyle={
                        {
                            paddingRight: 15
                        }
                    }
                />),
                headerStyle: {
                    backgroundColor: "#F53B50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const ContactStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="#fff"
                    size={30}
                    iconStyle={
                        {
                            paddingRight: 15
                        }
                    }
                />),
                headerStyle: {
                    backgroundColor: "#F53B50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}>
            <Stack.Screen name="Contact" component={ContactScreen} />

        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Fovourites" component={FavStack} />
            <Drawer.Screen name="Contact" component={ContactStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;