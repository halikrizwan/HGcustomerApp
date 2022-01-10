// import * as React from 'react';
// import { Button, View, Text, Image, SafeAreaView } from 'react-native';



// export default function OfferScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>AccountScreen Screen</Text>
//             <Button title="Go to Bookings page" onPress={() => navigation.navigate('BookingPage')} />
//             <Button title="Go to Support page" onPress={() => navigation.navigate('SupportPage')} />
//             <Button title="Go to Offers page" onPress={() => navigation.navigate('OfferPage')} />
//             <Button title="Go to Wallet page" onPress={() => navigation.navigate('WalletPage')} />
//             <Button title="Go to Settings page" onPress={() => navigation.navigate('SettingPage')} />
//         </View>
//     );
// }
import React, { Component, useState } from "react";
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
    Pressable,
    Alert,
    Modal,
} from "react-native";
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";

export default function ReferEarnScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <View style={styles.flexRow}>
                    <TouchableOpacity
                        style={[styles.textWhite, styles.backButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            resizeMode="contain"
                            style={{}}
                            source={require("../assets/backArrow.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>REFER and EARN</Text>
                </View>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={[styles.screen]}>
                    <View style={[styles.section]}>

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    section: {
        padding: 20,
    },
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        width: "100%",
        height: 120,
        paddingTop: 36,
        paddingLeft: 20,
        backgroundColor: "#2eb0e4",
        justifyContent: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        shadowColor: "#52006A",
        color: "#fff",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
    },
    flexRow: {
        flexDirection: "row",
    },
    flexRowSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textWhite: {
        color: "#fff",
    },
    backButton: {
        marginRight: 10,
        justifyContent: "center",
    },
    bgLiteBlue: {
        backgroundColor: "#eff7fc",
    },
    flexDirectionColumn: {
        flexDirection: "column",
    },
    padding10: {
        padding: 10,
    },
    padding20: {
        padding: 20,
    },
    padding30: {
        padding: 30,
    },

});