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
    Modal,
    FlatList
} from "react-native";
import moment from 'moment';
import 'moment-timezone';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import StatusBarAll from "../components/StatusBar";
import css from "../components/commonCss";



export default function OfferScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTermsandCondition, setModalTermsandCondition] = useState(false);
    const [offerData, setOfferData] = useState([]);

    const getOffers = async () => {
        try {
            const response = await fetch('https://api.homegenie.com/api/Webapi/offers?city=Dubai&language=en');
            const json = await response.json();
            let datas = json.data.data;
            let array = [];
            for (obj of datas) {
                var d = new Date(obj.promo.endTime);
                var dm = moment(d).format("DD MMM,  YY")
                array.push({
                    _id: obj._id,
                    validDate: dm,
                    name: obj.name,
                    image: obj.image,
                    promoName: obj.promo.name,
                    trending: obj.trending,
                    soldCount: obj.soldCount,
                    categoryName: obj.categoryName,
                    termsCondition: obj.tnc
                })
            }
            //console.log(array);
            setOfferData(array);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getOffers();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBarAll />
            <View style={css.header}>
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
                    <Text style={css.headerTitle}>OFFERS</Text>
                </View>
            </View>
            <ScrollView style={styles.ScrollView}>
                <View style={[styles.screen]}>
                    <View style={[styles.section]}>
                        <View style={{ backgroundColor: '#fffcf1', padding: 20 }}>
                            <Text>Current Offer you should not miss!</Text>
                            {isLoading ? <Text>Loading...</Text> :
                                (
                                    <FlatList
                                        data={offerData}
                                        keyExtractor={(item, index) => {
                                            return item._id;
                                        }}
                                        renderItem={({ item }) => (
                                            <View style={[styles.offerBoxEach], { borderBottomWidth: 1, borderColor: '#ccc', marginTop: 15 }}>
                                                <Image
                                                    style={[styles.OfferImage], { width: '100%', height: 200, borderRadius: 5, resizeMode: "contain", }}
                                                    source={{
                                                        uri: item.image,
                                                    }}
                                                />
                                                <View style={{ position: 'absolute', top: 10, left: 15, width: '35%', height: 25, backgroundColor: '#f6b700', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ color: '#fff', fontSize: 11, fontFamily: "PoppinsM" }}>{item.soldCount} claimed already! </Text>
                                                </View>
                                                {item.trending ? <Image
                                                    style={{ top: -10, right: -10, position: 'absolute' }}
                                                    source={require("../assets/trending.png")}
                                                /> : null}
                                                <Pressable
                                                    onPress={() => setModalTermsandCondition(true)}
                                                >
                                                    <Text style={{ color: '#2eb0e4' }}>* Terms & Conditions</Text>
                                                </Pressable>
                                                <Text style={{ color: '#2eb0e4', fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ color: '#2eb0e4', fontSize: 14, fontWeight: 'bold', marginTop: 5, marginBottom: 5 }}>{item.promoName}</Text>
                                                <Text>{item.name} </Text>
                                                <Text>Valid till date {item.validDate}</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                                    <Pressable
                                                        style={[styles.button, styles.buttonOpen, styles.offerCopyCode]}
                                                        onPress={() => setModalVisible(true)}
                                                    >
                                                        <Text style={styles.offerCopyCodeText}>Copy Code</Text>
                                                    </Pressable>
                                                    <Pressable style={[styles.offerBooknow]} onPress={() => navigation.navigate('GetgeniePage')}>
                                                        <Text style={[styles.offerBooknowText]}> Book Now</Text>
                                                    </Pressable>
                                                </View>
                                                {/* <Modal
                                                    animationType="fade"
                                                    isVisible={modalTermsandCondition} hasBackdrop={true}
                                                >
                                                    <View >
                                                        <View style={[styles.modalView], { padding: 15 }}>
                                                            <View style={[styles.signupModalContainer], { borderRadius: 10, backgroundColor: '#fff' }}>
                                                                <View style={[styles.modalHeader, styles.flexRow], { backgroundColor: '#F4F4F4', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
                                                                    <Pressable
                                                                        style={[styles.button, styles.buttonClose]}
                                                                        onPress={() => setModalTermsandCondition(!modalTermsandCondition)}
                                                                    >
                                                                        <Image
                                                                            resizeMode="contain"
                                                                            style={{ width: 20, height: 20 }}
                                                                            source={require("../assets/backArrowBlack.png")}
                                                                        />
                                                                    </Pressable>
                                                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 24, }}>T&C - {item.categoryName} Services</Text>
                                                                </View>
                                                                <View style={[styles.modalBody], { alignItems: 'center', padding: 20 }}>
                                                                    <Text>{item.termsCondition}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </Modal> */}
                                            </View>
                                        )}
                                    />
                                )}
                        </View>
                    </View>
                    <Pressable style={[styles.section]} onPress={() => navigation.navigate('ReferEarnPage')}>
                        <View style={[styles.referEarnSection], { flexDirection: 'row' }}>
                            <Image
                                style={{}}
                                source={require("../assets/qualityControl.png")} />
                            <Text style={{ color: '#2eb0e4', marginTop: 7, marginLeft: 5, fontSize: 16 }}> Refer and Earn </Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Promo code copied!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose, styles.offerBooknow]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={[styles.textStyle, styles.offerBooknowText]}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
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
    brand: {
        color: '#2eb0e4'
    },
    offerCopyCode: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        borderColor: '#2eb0e4',
        borderWidth: 1,
        width: '40%',
        marginTop: 10,
        marginBottom: 15
    },
    offerCopyCodeText: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#2eb0e4',
    },
    offerBooknow: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 50,
        backgroundColor: '#f6b700',
        borderColor: '#f6b700',
        borderWidth: 1,
        width: '40%',
        marginTop: 10,
        marginBottom: 15
    },
    offerBooknowText: {
        fontSize: 12,
        lineHeight: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    //ModalCss
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});