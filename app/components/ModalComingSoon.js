import { StatusBar } from "expo-status-bar";
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
import css from '../components/commonCss';

const ModalComingSoon = (props) => {
    const [modalComingsoon, setModalComingsoon] = useState(false);
    return (
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
    );
};

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
    },
    flexRowSpace: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textCenter: {
        textAlign: "center",
    },
});

export default ModalComingSoon;