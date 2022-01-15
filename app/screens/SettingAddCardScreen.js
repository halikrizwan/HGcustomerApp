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
    FlatList,
    TouchableHighlight
} from "react-native";
import Modal from 'react-native-modal';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import ModalComingSoon from "../components/ModalComingSoon";
import css from '../components/commonCss';



export default function SettingAddCardScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [modalComingsoon, setModalComingsoon] = useState(false);
    const user = 'card';

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={css.flexDR}>
                    <TouchableOpacity
                        style={[css.whiteC, css.backButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={require("../assets/backArrow.png")} />
                    </TouchableOpacity>
                    <View style={[css.flexDR_ALC]}>
                        <Image style={[styles.titleIcon]} source={require("../assets/iconCardWhite.png")} />
                        <Text style={[css.headerTitle, css.marginL10]}>ADD CARD</Text>
                    </View>
                </View>
            </View>
            {user == "card" ?
                <ScrollView>
                    <View style={[css.section]}>
                        <View style={[css.container]}>
                            <View style={[flexDCSB, css.alignCenter]}>
                                <View><Text style={[css.f18, css.textCenter, css.spaceT20]}>ADD CARD</Text></View>
                                <View style={[css.imgBR150, css.whiteBG, css.alignCenter]}><Image style={css.img100} source={require('../assets/iconAddCard.png')} /></View>
                                <View>
                                    <Pressable style={[css.blueBtn]}>
                                        <Text style={[css.whiteC, css.f16, css.textCenter]}>+ ADD CARD</Text>
                                    </Pressable>
                                    <Pressable style={styles.button}>
                                        <Text style={styles.text}>Add Card</Text>
                                    </Pressable>
                                    <View style={styles.inputsContainer}>
                                        <TouchableHighlight style={styles.fullWidthButton} >
                                            <Text style={styles.fullWidthButtonText}>Submit</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                :
                <ScrollView>
                    <View style={[css.section]}>
                        <View style={[css.container]}>
                            <View style={[flexDCSB, css.alignCenter]}>
                                <View><Text style={[css.f18, css.textCenter, css.spaceT20]}>ADD CARD</Text></View>
                                <View style={[css.imgBR150, css.whiteBG, css.alignCenter]}><Image style={css.img100} source={require('../assets/iconAddCard.png')} /></View>
                                <View>
                                    <Pressable style={[css.blueBtn]}>
                                        <Text style={[css.whiteC, css.f16, css.textCenter]}>+ ADD CARD</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
            {/* <ScrollView>
                <View style={[css.section]}>
                    <View style={[css.container]}>
                        <View style={[flexDCSB, css.alignCenter]}>
                            <View><Text style={[css.f18, css.textCenter, css.spaceT20]}>ADD CARD</Text></View>
                            <View style={[css.imgBR150, css.whiteBG, css.alignCenter]}><Image style={css.img100} source={require('../assets/iconAddCard.png')} /></View>
                            <View>
                                <Pressable style={[css.blueBtn]}>
                                    <Text style={[css.whiteC, css.f16, css.textCenter]}>+ ADD CARD</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    // button: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 12,
    //     paddingHorizontal: 32,
    //     borderRadius: 4,
    //     elevation: 3,
    //     backgroundColor: 'black',
    //     alignSelf: 'stretch',
    //     width: '100%'
    // },
    // text: {
    //     fontSize: 16,
    //     lineHeight: 21,
    //     fontWeight: 'bold',
    //     letterSpacing: 0.25,
    //     color: 'white',
    // },
    // inputsContainer: {
    //     flex: 1
    // },
    // fullWidthButton: {
    //     backgroundColor: 'blue',
    //     height: 70,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignSelf: 'stretch'
    // },
    // fullWidthButtonText: {
    //     fontSize: 24,
    //     color: 'white'
    // }
});