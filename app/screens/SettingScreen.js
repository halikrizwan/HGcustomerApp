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
    Pressable,
    Alert,
    FlatList
} from "react-native";
import Modal from 'react-native-modal';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import ModalComingSoon from "../components/ModalComingSoon";
import css from '../components/commonCss';



export default function SettingScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [modalComingsoon, setModalComingsoon] = useState(false);


    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={[css.whiteBG], { flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <View style={css.flexDR}>
                    <TouchableOpacity
                        style={[css.whiteC, css.backButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={require("../assets/backArrow.png")} />
                    </TouchableOpacity>
                    <Text style={[css.headerTitle]}>SETTINGS</Text>
                </View>
            </View>
            <ScrollView>
                <View style={[css.section]}>
                    <View style={[css.container]}>
                        <View style={[styles.settingShadowBox]}>
                            <View style={[css.flexDRSB, css.line10]}>
                                <View style={[css.flexDR_ALC]}>
                                    <Image
                                        source={require("../assets/iconIndex.png")}
                                        style={[styles.titleIcon]}
                                    />
                                    <Text style={[css.marginL10, css.f16]}>BASIC INFO</Text>
                                </View>
                                <View>
                                    <Image
                                        source={require("../assets/iconEdit.png")}
                                        style={[styles.titleIcon]}
                                    />
                                </View>
                            </View>
                            <View style={[css.flexDR, css.spaceB5]}>
                                <Text style={[styles.settingShadowBoxText], { flex: 1, color: '#60604E' }}>Name</Text>
                                <Text style={[styles.settingShadowBoxText], { flex: 2 }}>Azarudeen</Text>
                            </View>
                            <View style={[css.flexDR, css.spaceB5]}>
                                <Text style={[styles.settingShadowBoxText], { flex: 1, color: '#60604E' }}>Mobile</Text>
                                <Text style={[styles.settingShadowBoxText], { flex: 2 }}>+971 588341424</Text>
                            </View>
                            <View style={[css.flexDR]}>
                                <Text style={[styles.settingShadowBoxText], { flex: 1, color: '#60604E' }}>Email ID</Text>
                                <Text style={[styles.settingShadowBoxText], { flex: 2 }}>azarudeen@gmail.com</Text>
                            </View>
                        </View>
                        <View style={[styles.settingShadowBox]}>
                            <View style={[css.flexDRSB, css.line10]}>
                                <View style={[css.flexDR_ALC]}>
                                    <Image
                                        source={require("../assets/iconLocation.png")}
                                        style={[styles.titleIcon]}
                                    />
                                    <Text style={[css.marginL10, css.f16]}>ADDRESS</Text>
                                </View>
                                <View>
                                    <Image
                                        source={require("../assets/iconEdit.png")}
                                        style={[styles.titleIcon]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={[css.lGreyC, css.f14, css.feb]}>(Home 1)</Text>
                                <Text style={[css.blackC, css.f14]}>1209, Jumeirah village Triangle, Dubai (address)</Text>
                            </View>
                        </View>
                        <View style={[styles.settingShadowBox]}>
                            <View style={[css.flexDRSB, css.line10]}>
                                <View style={[css.flexDR_ALC]}>
                                    <Image
                                        source={require("../assets/iconCard.png")}
                                        style={[styles.titleIcon]}
                                    />
                                    <Text style={[css.marginL10, css.f16]}>CARDS</Text>
                                </View>
                                <View>
                                    <Pressable onPress={() => navigation.navigate('SettingAddCardPage')}>
                                        <Image
                                            source={require("../assets/iconEdit.png")}
                                            style={[styles.titleIcon]}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                                <Text style={[css.lGreyC, css.f14], { color: '#60604E' }}>*****************</Text>
                            </View>
                        </View>
                        <View style={[styles.settingShadowBox]}>
                            <View style={[css.flexDRSB, css.line10]}>
                                <View style={[css.flexDR_ALC]}>
                                    <Image
                                        source={require("../assets/iconFav.png")}
                                        style={[styles.titleIcon]}
                                    />
                                    <Text style={[css.marginL10, css.f16]}>FAVOURITES</Text>
                                </View>
                                <View>
                                    <Pressable onPress={() => setModalComingsoon(true)}>
                                        <Image
                                            source={require("../assets/iconEdit.png")}
                                            style={[styles.titleIcon]}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                                <Text style={[css.lGreyC, css.f14], { color: '#60604E' }}>0 Favourite Genie</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <ModalComingSoon /> */}
                <Modal
                    animationType="fade"
                    isVisible={modalComingsoon}
                    hasBackdrop={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalComingsoon(!modalComingsoon);
                    }}
                >
                    <View style={css.centeredView}>
                        <View style={css.modalView}>
                            <Text style={css.modalText}>Coming soon - stay tuned</Text>
                            <Pressable
                                style={[css.yellowBtn]}
                                onPress={() => setModalComingsoon(!modalComingsoon)}
                            >
                                <Text style={[css.whiteC, css.f16]}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    settingShadowBoxText: { fontSize: 15 },
    settingShadowBox: {
        backgroundColor: "white",
        borderRadius: 5,
        height: 'auto',
        shadowColor: '#00000011',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        padding: 20,
        marginBottom: 20
    },
    titleIcon: { width: 25, height: 25 },
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
});