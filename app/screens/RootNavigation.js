import * as React from 'react';
import { Button, View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import GetgenieScreen from './GetgenieScreen';
import CategoryScreen from './CategoryScreen';
import LoginScreen from './LoginScreen';
import OfferScreen from './OfferScreen';
import AccountScreen from './AccountScreen';
import SupportScreen from './SupportScreen';
import WalletScreen from './WalletScreen';
import SettingScreen from './SettingScreen';
import NotificationScreen from './NotificationScreen';
import ReferEarnScreen from './ReferEarnScreen';
import SettingAddCardScreen from './SettingAddCardScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const BookingsStack = createNativeStackNavigator();
const GetGenieStack = createNativeStackNavigator();
const OffersStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomePage" component={HomeScreen} />
            <HomeStack.Screen name="BookingPage" component={BookingScreen} />
            <HomeStack.Screen name="CategoryPage" component={CategoryScreen} />
        </HomeStack.Navigator>
    );
}
function BookingsStackScreen() {
    return (
        <BookingsStack.Navigator screenOptions={{ headerShown: false }}>
            <BookingsStack.Screen name="BookingPage" component={BookingScreen} />
        </BookingsStack.Navigator>
    );
}
function GetGenieStackScreen() {
    return (
        <GetGenieStack.Navigator screenOptions={{ headerShown: false }}>
            <GetGenieStack.Screen name="GetgeniePage" component={GetgenieScreen} />
            <GetGenieStack.Screen name="BookingPage" component={BookingScreen} />
            <GetGenieStack.Screen name="CategoryPage" component={CategoryScreen} />
        </GetGenieStack.Navigator>
    );
}
function OffersStackScreen() {
    return (
        <OffersStack.Navigator screenOptions={{ headerShown: false }}>
            <OffersStack.Screen name="OfferPage" component={OfferScreen} />
            <OffersStack.Screen name="BookingPage" component={BookingScreen} />
            <OffersStack.Screen name="ReferEarnPage" component={ReferEarnScreen} />
        </OffersStack.Navigator>
    );
}
function AccountStackScreen() {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen name="AccountPage" component={AccountScreen} />
            <AccountStack.Screen name="SupportPage" component={SupportScreen} />
            <AccountStack.Screen name="BookingPage" component={BookingScreen} />
            <AccountStack.Screen name="GetgeniePage" component={GetgenieScreen} />
            <AccountStack.Screen name="OfferPage" component={OfferScreen} />
            <AccountStack.Screen name="WalletPage" component={WalletScreen} />
            <AccountStack.Screen name="SettingPage" component={SettingScreen} />
            <AccountStack.Screen name="NotificationPage" component={NotificationScreen} />
            <AccountStack.Screen name="SettingAddCardPage" component={SettingAddCardScreen} />
        </AccountStack.Navigator>
    );
}
export default function RootNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                height: 70,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            },
            tabBarOptions: {
                style: {
                    marginTop: 10,
                },
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? "home" : "home";
                } else if (route.name === "Bookings") {
                    iconName = focused ? "calendar" : "calendar";
                } else if (route.name === "GetGenie") {
                    iconName = focused ? "pluscircle" : "pluscircle";
                } else if (route.name === "Offers") {
                    iconName = focused ? "tago" : "tago";
                } else if (route.name === "Account") {
                    iconName = focused ? "user" : "user";
                }
                return <AntDesign name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#2EB0E4",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
                fontSize: 12,
                color: "#2eb0e4",
                padding: 10,
                fontFamily: 'PoppinsM',
            },
        })}>
            <Tab.Screen name="Home" component={HomeStackScreen} style={[styles.tabMenu, styles.homeMenu]} />
            <Tab.Screen name="Bookings" component={BookingsStackScreen} style={[styles.tabMenu, styles.bookingMenu]} />
            <Tab.Screen name="GetGenie" component={GetGenieStackScreen} style={[styles.tabMenu, styles.getGenieMenu]}
                options={{
                    title: "",
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: 70, height: 70 }}
                                source={{
                                    uri: "https://iesoft.nyc3.cdn.digitaloceanspaces.com/homegenie/thumb_D2EwwBi571f8fef784f3f9e7f2779c3.png",
                                }}
                                source={require("../assets/genieNavbar.png")}
                            />
                        );
                    },
                }} />
            <Tab.Screen name="Offers" component={OffersStackScreen} style={[styles.tabMenu, styles.offerMenu]} />
            <Tab.Screen name="Account" component={AccountStackScreen} style={[styles.tabMenu, styles.accountMenu]} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        fontFamily: 'PoppinsM',
    },
});