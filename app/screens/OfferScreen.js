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



export default function OfferScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [offerData, setOfferData] = useState([]);

    const getOffers = async () => {
        try {
            const response = await fetch('https://api.homegenie.com/api/Webapi/offers?city=Dubai&language=en');
            const json = await response.json();
            let datas = json.data.data;
            setOfferData(datas);
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
                    <Text style={styles.headerTitle}>OFFERS</Text>
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
                                                    style={[styles.OfferImage], { width: '100%', height: 200, borderRadius: 10, resizeMode: "contain", }}
                                                    source={{
                                                        uri: item.image,
                                                    }}
                                                />
                                                <Text style={{ color: '#2eb0e4' }}>* Terms & Conditions</Text>
                                                <Text style={{ color: '#2eb0e4', fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ color: '#2eb0e4', fontSize: 14, fontWeight: 'bold', marginTop: 5, marginBottom: 5 }}>{item.promo.name}</Text>
                                                <Text>{item.name} </Text>
                                                <Text>Valid till date {item.promo.endTime}</Text>
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
            <View style={styles.centeredView}>
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
            </View>
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
        width: '70%'
    },
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2
    // },
    // buttonOpen: {
    //     backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    // textStyle: {
    //     color: "white",
    //     fontWeight: "bold",
    //     textAlign: "center"
    // },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});