import React, { Component, useState, useEffect } from "react";
import {
    StatusBar,
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
} from "react-native";
import Modal from 'react-native-modal';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import ModalComingSoon from "../components/ModalComingSoon";
import css, { alignCenter } from '../components/commonCss';


export default function GetgenieScreen({ navigation }) {
    var [isPress, setIsPress] = React.useState(false);

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'blue',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar animated={true}
                backgroundColor="#2eb0e4"
                barStyle='dark-content'
                showHideTransition='fade'
            />
            <View style={[css.section]}>
                <View style={[css.container, css.liteBlueBG, css.flexDRSE]}>
                    <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Daily Utilities</Text></TouchableHighlight>
                    <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Lifestyle & Decor</Text></TouchableHighlight>
                    <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Health & Wellness</Text></TouchableHighlight>
                    <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Others</Text></TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    categoryBtn: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        height: 60,
        width: '24%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryBtnText: {
        flexWrap: 'wrap', fontSize: 18, textAlign: 'center'
    }
})