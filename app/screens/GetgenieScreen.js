import React, { Component, useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Button,
    Image,
    ViewBase,
    Linking,
    BackHandler,
    TouchableOpacity,
    TouchableHighlight,
    Pressable,
    Alert,
    FlatList,
    SafeAreaViewDecider,
    VirtualizedList,
} from "react-native";
import Modal from 'react-native-modal';
import { Searchbar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import ModalComingSoon from "../components/ModalComingSoon";
import css, { alignCenter, spaceT5 } from '../components/commonCss';
import StatusBarAll from "../components/StatusBar";
import GetgenieCategories from "../components/GetgenieScreens/GetgenieCategories";
let genie = 'cat';
const expr = 'Papayas';
export default function GetgenieScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
            <StatusBarAll />
            {genie == 'cat' ? <View><Text>cat</Text></View> : <View><Text>nocat</Text></View>}
            <GetgenieCategories />

            switch(expr) {
                'case' 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
            case 'Mangoes':
            case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
            default:
            console.log(`Sorry, we are out of ${expr}.`);
                }

        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    activeBtn: {
        backgroundColor: '#2eb0e4',
        borderColor: '#2eb0e4'
    },
    activeText: {
        color: '#fff',
    }
})