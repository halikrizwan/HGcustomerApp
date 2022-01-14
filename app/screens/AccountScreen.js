import React, { Component, useState, useRef, useEffect } from "react";
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
    TextInput,
} from "react-native";
import { useForm } from 'react-hook-form';
import Modal from 'react-native-modal';
import SocialMedia from "../components/SocialMedia";
import Whatsapp800 from "../components/Whatsapp800";
import CountryPicker from 'rn-country-picker';
import { Ionicons } from '@expo/vector-icons';

// const user = 'inn';

const AccountScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [userName, setUserName] = useState(null);
    const [nameCheck, setNameCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [phone, setPhone] = useState(null);
    const [otp, setOtp] = useState(null);
    const [user, setUser] = useState('inn');
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [otpModal, setOtpModal] = useState(false);
    const [OtpCodeOne, setOtpCodeOne] = useState(null);
    const [OtpCodeTwo, setOtpCodeTwo] = useState(null);
    const [OtpCodeThree, setOtpCodeThree] = useState(null);
    const [OtpCodeFour, setOtpCodeFour] = useState(null);
    const [displayName, setDisplyName] = useState(null);
    const [displayEmail, setDisplayEmail] = useState(null);
    const [otpSend, setOtpSend] = useState(true);

    const [show, setShow] = useState(true);
    const [countryCode, setCountryCode] = useState('');
    const [selectedCallingCode, setSelectedCallingCode] = useState('');
    const [countryCodeNew, setCountryCodeNew] = useState('971')
    const [countryPlus, setCountryPlus] = useState('+')
    const firtOtp = useRef();
    const secondOtp = useRef();
    const thirdOtp = useRef();
    const fourthOtp = useRef();

    const LoginApi = () => {
        // https://api.homegenie.com/api/customer/validatePhoneNo
        let data = new FormData();
        data.append('phoneNo', phone);
        data.append('countryCode', countryPlus + countryCodeNew)
        console.log(countryPlus + countryCodeNew);
        console.log(phone);

        fetch('https://api.homegenie.com/api/customer/validatePhoneNo', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: data
        })
            .then(response => response.json())
            .then(res => {
                console.log(res.data.isRegistered)
                if (res.data.isRegistered) {
                    setLoginModal(false)
                    setOtpCodeOne(null);
                    setOtpCodeTwo(null);
                    setOtpCodeThree(null);
                    setOtpCodeFour(null);
                    setOtpModal(true);
                } else {
                    setLoginModal(false)
                    setOtpCodeOne(null);
                    setOtpCodeTwo(null);
                    setOtpCodeThree(null);
                    setOtpCodeFour(null);
                    setRegisterModal(true);
                }
            })
    }

    const ResetOtpApi = () => {
        console.log('resend Api call')
        let data = new FormData();
        data.append('phoneNo', phone);
        data.append('countryCode', countryPlus + countryCodeNew)
        fetch('https://api.homegenie.com/api/customer/validatePhoneNo', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: data
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setOtpSend(false)
            })
    }

    const OtpVrifyApi = () => {
        let otpData = String(OtpCodeOne) + String(OtpCodeTwo) + String(OtpCodeThree) + String(OtpCodeFour);
        let data = new FormData();
        data.append("deviceType", "WEBSITE");
        data.append("deviceToken", "151");
        data.append("phoneNo", phone);
        data.append("OTPCode", otpData);
        data.append('countryCode', countryPlus + countryCodeNew)
        data.append("timezone", "Asia/Calcutta");
        data.append("latitude", "17.3753");
        data.append("longitude", "78.4744");
        //console.log(data)
        fetch('https://api.homegenie.com/api/customer/verifyOTP1', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
            },
            body: data
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.message == "Success") {
                    setOtpModal(false)
                    setUser('in')
                    setOtpCodeOne(null);
                    setOtpCodeTwo(null);
                    setOtpCodeThree(null);
                    setOtpCodeFour(null);
                    setDisplayEmail(res.data.userDetails.email);
                    setDisplyName(res.data.userDetails.name);
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    const signUpApi = () => {
        if (userName == null) {
            setNameCheck(true)
        } if (email == null) {
            setEmailCheck(true)
        } else {
            setNameCheck(false)
            setEmailCheck(false)
            let params = new FormData();
            params.append("name", userName);
            params.append("email", email);
            params.append("phoneNo", phone);
            params.append("countryCode", countryPlus + countryCodeNew)
            params.append("deviceType", "WEBSITE");
            params.append("appVersion", "100");
            params.append("timezone", "Asia/Calcutta");
            params.append("country", "Dubai");
            params.append("latitude", "17.3753");
            params.append("longitude", "78.4744");
            params.append("deviceToken", '151');
            fetch('https://api.homegenie.com/api/customer/registerViaPhone', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: params
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.message == 'Success') {
                        setRegisterModal(false);
                        setOtpModal(true);
                    } if (res.message != 'Success') {
                        console.log('already loggedin');
                    }
                })
        }
    }

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
                    <Text style={[styles.headerTitle]}>My Accounts</Text>
                </View>
            </View>
            {(() => {
                if (user == 'in') {
                    return (
                        <ScrollView style={styles.ScrollView}>
                            <View style={[styles.screen]}>
                                <View style={[styles.bgLiteBlue]}>
                                    <View
                                        style={[
                                            styles.flexRowSpace,
                                            { padding: 15, paddingTop: 5, paddingBottom: 5 },
                                        ]}
                                    >
                                        <View
                                            style={
                                                ([styles.flexStarts],
                                                    { justifyContent: "flex-start", flexDirection: "row" })
                                            }
                                        >
                                            <View style={{ borderRadius: "50%" }}>
                                                <Image
                                                    resizeMode="contain"
                                                    style={{ borderRadius: 50, width: 50, marginRight: 15 }}
                                                    source={require("../assets/genieicon.png")}
                                                />
                                            </View>
                                            <View style={[styles.flexDirectionColumn]}>
                                                <Text
                                                    style={[
                                                        styles.accountName,
                                                        { fontWeight: "bold", marginTop: 15 },
                                                    ]}
                                                >
                                                    {displayName}
                                                </Text>
                                                <Text style={[styles.accountEmail]}>
                                                    {displayEmail}
                                                </Text>
                                            </View>
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.notificationBell,
                                                { paddingTop: 20, paddingBottom: 10 },
                                            ]}
                                            onPress={() => navigation.navigate('NotificationPage')}
                                        >
                                            <Image
                                                resizeMode="contain"
                                                style={{}}
                                                source={require("../assets/notify.png")}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={[styles.section]}>
                                    <View style={[styles.container]}>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                {
                                                    borderBottomColor: "#C9C9C920",
                                                    borderBottomWidth: 1,
                                                    paddingTop: 20,
                                                    paddingBottom: 10,
                                                },
                                            ]}
                                            onPress={() => navigation.navigate('Bookings')}
                                        >
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require("../assets/booking-history.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1 },
                                                ]}
                                            >
                                                Bookings
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                {
                                                    borderBottomColor: "#C9C9C920",
                                                    borderBottomWidth: 1,
                                                    paddingTop: 20,
                                                    paddingBottom: 10,
                                                },
                                            ]}
                                            onPress={() => navigation.navigate('Offers')}
                                        >
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require("../assets/offer-icon.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1 },
                                                ]}
                                            >
                                                Offers
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                {
                                                    borderBottomColor: "#C9C9C920",
                                                    borderBottomWidth: 1,
                                                    paddingTop: 20,
                                                    paddingBottom: 10,
                                                },
                                            ]}
                                            onPress={() => navigation.navigate('WalletPage')}
                                        >
                                            <Image
                                                style={{
                                                    marginRight: 10,
                                                    width: 18,
                                                    height: 18,
                                                    resizeMode: "contain",
                                                }}
                                                source={require("../assets/wallet.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1 },
                                                ]}
                                            >
                                                Wallet
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                {
                                                    borderBottomColor: "#C9C9C920",
                                                    borderBottomWidth: 1,
                                                    paddingTop: 20,
                                                    paddingBottom: 10,
                                                },
                                            ]}
                                            onPress={() => navigation.navigate('SettingPage')}
                                        >
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require("../assets/settings.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1 },
                                                ]}
                                            >
                                                Settings
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                {
                                                    borderBottomColor: "#C9C9C920",
                                                    borderBottomWidth: 1,
                                                    paddingTop: 20,
                                                    paddingBottom: 10,
                                                },
                                            ]}
                                            onPress={() => navigation.navigate('SupportPage')}
                                        >
                                            <Image
                                                style={{ marginRight: 10 }}
                                                source={require("../assets/Support.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1 },
                                                ]}
                                            >
                                                Support
                                            </Text>
                                        </Pressable>
                                        <Pressable
                                            style={[
                                                styles.accountLinks,
                                                styles.flexRow,
                                                { paddingTop: 20, paddingBottom: 10 },
                                            ]}
                                            onPress={() => setLoginModal(true)}
                                        >
                                            <Image
                                                style={{
                                                    marginRight: 10,
                                                    width: 18,
                                                    height: 18,
                                                    resizeMode: "contain",
                                                }}
                                                source={require("../assets/signin.png")}
                                            />
                                            <Text
                                                style={[
                                                    styles.accountLinkText,
                                                    { fontSize: 14, justifyContent: "center", flex: 1, color: '#2eb0e4' },
                                                ]}
                                                onPress={() => { setUser('inn') }}
                                            >
                                                Logout
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <SocialMedia />
                                <View style={styles.section}>
                                    <View style={styles.flexRowSpace}>
                                        <Whatsapp800 />
                                    </View>
                                    <View>
                                        <Text
                                            style={
                                                ([styles.copyrightsText],
                                                {
                                                    fontSize: 12,
                                                    color: "#d3d3d3",
                                                    fontWeight: "bold",
                                                    paddingLeft: 5,
                                                    marginTop: 5,
                                                })
                                            }
                                        >
                                            VERSION 2.0.0 Copyright HomeGenie
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }

                return (
                    <ScrollView style={styles.ScrollView}>
                        <View style={[styles.screen]}>
                            <View style={[styles.bgLiteBlue]}>
                                <View
                                    style={[
                                        styles.flexRowSpace,
                                        { padding: 15, paddingTop: 5, paddingBottom: 5 },
                                    ]}
                                >
                                    <View
                                        style={
                                            ([styles.flexStarts],
                                                { justifyContent: "flex-start", flexDirection: "row" })
                                        }
                                    >
                                        <View style={{ borderRadius: 50 }}>
                                            <Image
                                                resizeMode="contain"
                                                style={{ borderRadius: 50, width: 50, marginRight: 15 }}
                                                source={require("../assets/genieicon.png")}
                                            />
                                        </View>
                                        <View style={[styles.flexDirectionColumn], { marginVertical: 10 }}>
                                            <Text
                                                style={[
                                                    styles.accountName,
                                                    { fontWeight: "bold", marginTop: 15, fontSize: 20 },
                                                ]}
                                            >
                                                Guest
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <View style={[styles.container]}>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            {
                                                borderBottomColor: "#C9C9C920",
                                                borderBottomWidth: 1,
                                                paddingTop: 20,
                                                paddingBottom: 10,
                                            },
                                        ]}
                                        onPress={() => navigation.navigate('Bookings')}
                                    >
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={require("../assets/booking-history.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Bookings
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            {
                                                borderBottomColor: "#C9C9C920",
                                                borderBottomWidth: 1,
                                                paddingTop: 20,
                                                paddingBottom: 10,
                                            },
                                        ]}
                                        onPress={() => navigation.navigate('Offers')}
                                    >
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={require("../assets/offer-icon.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Offers
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            {
                                                borderBottomColor: "#C9C9C920",
                                                borderBottomWidth: 1,
                                                paddingTop: 20,
                                                paddingBottom: 10,
                                            },
                                        ]}
                                        onPress={() => navigation.navigate('WalletPage')}
                                    >
                                        <Image
                                            style={{
                                                marginRight: 10,
                                                width: 18,
                                                height: 18,
                                                resizeMode: "contain",
                                            }}
                                            source={require("../assets/wallet.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Wallet
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            {
                                                borderBottomColor: "#C9C9C920",
                                                borderBottomWidth: 1,
                                                paddingTop: 20,
                                                paddingBottom: 10,
                                            },
                                        ]}
                                        onPress={() => navigation.navigate('SettingPage')}
                                    >
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={require("../assets/settings.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Settings
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            {
                                                borderBottomColor: "#C9C9C920",
                                                borderBottomWidth: 1,
                                                paddingTop: 20,
                                                paddingBottom: 10,
                                            },
                                        ]}
                                        onPress={() => navigation.navigate('SupportPage')}
                                    >
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={require("../assets/Support.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Support
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={[
                                            styles.accountLinks,
                                            styles.flexRow,
                                            { paddingTop: 20, paddingBottom: 10 },
                                        ]}
                                        onPress={() => setLoginModal(true)}
                                    >
                                        <Image
                                            style={{
                                                marginRight: 10,
                                                width: 18,
                                                height: 18,
                                                resizeMode: "contain",
                                            }}
                                            source={require("../assets/signin.png")}
                                        />
                                        <Text
                                            style={[
                                                styles.accountLinkText,
                                                { fontSize: 14, justifyContent: "center", flex: 1 },
                                            ]}
                                        >
                                            Login/Signup
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                < Whatsapp800 />
                            </View>
                        </View>
                    </ScrollView>
                );
            })()}
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    isVisible={loginModal} hasBackdrop={true}
                >
                    <View >
                        <View style={[styles.modalView], { padding: 15 }}>
                            <View style={[styles.signupModalContainer], { borderRadius: 10, backgroundColor: '#fff' }}>
                                <View style={[styles.modalHeader], { backgroundColor: '#F4F4F4', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setLoginModal(!loginModal)}
                                    >
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 20, height: 20 }}
                                            source={require("../assets/backArrowBlack.png")}
                                        />
                                    </Pressable>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 24, marginTop: 20 }}>Login/Signup to HomeGenie</Text>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 14, color: '#7e7e7e', marginTop: 10 }}>Login/Signup to access your stored addressess and service booking details.</Text>
                                    {/* <CountryPicker
                                            show={show}
                                            pickerButtonOnPress={(item) => {
                                                console.log(item)
                                                setCountryCode(item.dial_code);
                                                setShow(false);
                                            }}
                                            style={{
                                                modal: {
                                                    height: 500,
                                                },
                                                textInput: {
                                                    height: 80,
                                                    borderRadius: 0,
                                                },
                                                countryButtonStyles: {
                                                    height: 80
                                                },
                                            }}
                                        /> */}

                                </View>
                                <View style={[styles.modalBody], { alignItems: 'center', padding: 20 }}>
                                    <View style={[styles.flexRow]}>
                                        <CountryPicker
                                            disable={false}
                                            animationType={'slide'}
                                            containerStyle={styles.pickerStyle}
                                            pickerTitleStyle={styles.pickerTitleStyle}
                                            selectedCountryTextStyle={styles.selectedCountryTextStyle}
                                            countryNameTextStyle={styles.countryNameTextStyle}
                                            pickerTitle={'Country Picker'}
                                            searchBarPlaceHolder={'Search......'}
                                            hideCountryFlag={false}
                                            hideCountryCode={false}
                                            searchBarStyle={styles.searchBarStyle}
                                            countryCode={countryCodeNew}
                                            //selectedValue={(index) => setCountryCodeNew('+' + index)}
                                            selectedValue={(index) => setCountryCodeNew(index)}
                                        />
                                        <TextInput
                                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 5, width: '60%', padding: 10, height: 60 }}
                                            placeholder="Enter Mobile number"
                                            keyboardType="numeric"
                                            value={phone}
                                            onChange={(text) => setPhone(text.nativeEvent.text)}
                                        />
                                    </View>

                                    <Pressable
                                        style={[styles.offerBooknow]}
                                        //onPress={() => onSubmitLogin()}
                                        onPress={() => LoginApi()}
                                    >
                                        <Text style={[styles.textStyle, styles.offerBooknowText]}>Login/Signup</Text>
                                    </Pressable>


                                </View>
                                {/* <View style={[styles.modalFooter], { backgroundColor: '#F4F4F4', padding: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Pressable
                                        onPress={() => { setLoginModal(false), setRegisterModal(true) }}
                                    ><Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 14, color: '#7e7e7e' }}>Don't have an account? <Text style={{ color: '#2eb0e4' }}>Signup</Text></Text></Pressable>
                                </View> */}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    isVisible={registerModal} hasBackdrop={true}
                >
                    <View>
                        <View style={[styles.modalView], { padding: 15 }}>
                            <View style={[styles.signupModalContainer], { borderRadius: 10, backgroundColor: '#fff' }}>
                                <View style={[styles.modalHeader], { backgroundColor: '#F4F4F4', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setRegisterModal(!registerModal)}
                                    >
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 20, height: 20 }}
                                            source={require("../assets/backArrowBlack.png")}
                                        />
                                    </Pressable>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 24, marginTop: 20 }}>SIGNUP</Text>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 14, color: '#7e7e7e', marginTop: 10 }}>Signup and enjoy all the features including our amazing offers.</Text>
                                </View>
                                <View style={[styles.modalBody], { alignItems: 'center', padding: 20 }}>
                                    <TextInput
                                        style={[styles.input], { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, width: '90%', height: 40, marginBottom: 20, padding: 5 }}
                                        id="Name"
                                        placeholder="Name"
                                        keyboardType="default"
                                        required
                                        autoCapitalize="none"
                                        errorMessage="please enter your name."
                                        onChange={(text) => setUserName(text.nativeEvent.text)}
                                        value={userName}
                                    />
                                    {nameCheck && <Text style={{ color: 'red' }}>Please enter your name</Text>}
                                    <TextInput
                                        style={[styles.input], { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, width: '90%', height: 40, marginBottom: 20, padding: 5 }}
                                        id="Email"
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        required
                                        autoCapitalize="none"
                                        errorMessage="please enter your email-id."
                                        onChange={(text) => setEmail(text.nativeEvent.text)}
                                        value={email}
                                    />
                                    {emailCheck && <Text style={{ color: 'red' }}>Please enter your Email</Text>}
                                    <Pressable
                                        style={[styles.offerBooknow]}
                                        onPress={() => signUpApi()}
                                    >
                                        <Text style={[styles.textStyle, styles.offerBooknowText]}>SIGNUP</Text>
                                    </Pressable>
                                </View>
                                <View style={[styles.modalFooter], { backgroundColor: '#F4F4F4', padding: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Pressable
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            setLoginModal(!loginModal);
                                        }}
                                        onPress={() => { setRegisterModal(!registerModal), setLoginModal(true) }}
                                    >
                                        <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 14, color: '#7e7e7e' }}>Already have an account? <Text style={{ color: '#2eb0e4' }}>Login</Text></Text></Pressable>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    isVisible={otpModal} hasBackdrop={true}
                >
                    <View >
                        <View style={[styles.modalView], { padding: 15 }}>
                            <View style={[styles.signupModalContainer], { borderRadius: 10, backgroundColor: '#fff' }}>
                                <View style={[styles.modalHeader], { backgroundColor: '#F4F4F4', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20 }}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setOtpModal(!otpModal)}
                                    >
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 20, height: 20 }}
                                            source={require("../assets/backArrowBlack.png")}
                                        />
                                    </Pressable>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 24, marginTop: 20 }}>ONE TIME PASSCODE (OTP)</Text>
                                    <Text style={{ alignItems: 'center', textAlign: 'center', fontSize: 14, color: '#7e7e7e', marginTop: 10 }}>Please enter 4 digit code sent via SMS</Text>
                                </View>
                                <View style={[styles.modalBody], { alignItems: 'center', padding: 20 }}>
                                    <View style={styles.flexRow}>
                                        <TextInput
                                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, width: '15%', padding: 10, marginRight: 10, textAlign: 'center' }}
                                            placeholder=""
                                            keyboardType="numeric"
                                            value={OtpCodeOne}
                                            maxLength={1}
                                            onChange={(text) => {
                                                setOtpCodeOne(text.nativeEvent.text);
                                                secondOtp.current.focus();
                                            }}
                                        />
                                        <TextInput
                                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, width: '15%', padding: 10, marginRight: 10, textAlign: 'center' }}
                                            placeholder=""
                                            keyboardType="numeric"
                                            value={OtpCodeTwo}
                                            maxLength={1}
                                            onChange={(text) => {
                                                setOtpCodeTwo(text.nativeEvent.text);
                                                thirdOtp.current.focus();
                                            }}
                                            ref={secondOtp}
                                        />
                                        <TextInput
                                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, width: '15%', padding: 10, marginRight: 10, textAlign: 'center' }}
                                            placeholder=""
                                            keyboardType="numeric"
                                            value={OtpCodeThree}
                                            maxLength={1}
                                            onChange={(text) => {
                                                setOtpCodeThree(text.nativeEvent.text);
                                                fourthOtp.current.focus();
                                            }}
                                            ref={thirdOtp}
                                        />
                                        <TextInput
                                            style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, width: '15%', padding: 10, marginRight: 10, textAlign: 'center' }}
                                            placeholder=""
                                            keyboardType="numeric"
                                            value={OtpCodeFour}
                                            maxLength={1}
                                            onChange={(text) => setOtpCodeFour(text.nativeEvent.text)}
                                            ref={fourthOtp}
                                        />
                                    </View>

                                    <Pressable
                                        style={[styles.offerBooknow]}
                                        //onPress={() => onSubmitLogin()}
                                        onPress={() => OtpVrifyApi()}
                                    >
                                        <Text style={[styles.textStyle, styles.offerBooknowText]}>CONFIRM</Text>
                                    </Pressable>
                                    {/* <Text style={{ color: 'green' }}>{otpSend ? 'OTP Sent' : 'OTP Sent Again'}</Text> */}
                                    <Text style={{ color: 'green' }}>{otpSend ? 'OTP Sent' : 'OTP Sent Again'}</Text>


                                </View>
                                <View style={[styles.modalFooter], { padding: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Pressable
                                        style={[styles.brand]}
                                        //onPress={() => onSubmitLogin()}
                                        onPress={() => ResetOtpApi()}
                                    >
                                        <Text style={[styles.brand, styles.textCenter]}>Resend OTP</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};
export default AccountScreen;
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
        fontFamily: 'PoppinsSB',
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
    textCenter: {
        textAlign: 'center'
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
        width: '90%',
        height: 40,
        marginTop: 10,
        marginBottom: 15,
    },
    offerBooknowText: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#fff',
    },
    //ModalCss
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
        width: '100%'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalContentContainer: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    //country picker style
    titleText: {
        color: '#000',
        fontSize: 25,
        marginBottom: 25,
        fontWeight: 'bold',
    },
    pickerTitleStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    pickerStyle: {
        height: 60,
        width: '30%',
        marginBottom: 10,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
    },
    selectedCountryTextStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        color: '#000',
        textAlign: 'right',
    },

    countryNameTextStyle: {
        paddingLeft: 10,
        color: '#000',
        textAlign: 'right',
    },

    searchBarStyle: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 10,
    },
});



