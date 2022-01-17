import React, { Component } from "react";
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
    Dimensions,
    StatusBar,
    Pressable,
} from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import StatusBarAll from "../components/StatusBar";
import css from "../components/commonCss";

const FirstRoute = ({ navigation }) => (
    <View style={[styles.scene, styles.bookingTabs]}>
        <View style={[styles.bookingTabsContent], { alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
                style={[styles.bookingTabsImage], { width: 150, height: 150, marginVertical: 40 }}
                source={require('../assets/empty-ongoing.png')}
            />
            <Text style={[styles.bookingTabsText], { textAlign: 'center', fontSize: 16, lineHeight: 22, marginVertical: 20, color: '#303030' }} >No Bookings yet. {"\n"}start Booking and {"\n"} Enjoy HomeGenie Services</Text>
            <Pressable style={[styles.button], {
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 10,
                elevation: 3,
                backgroundColor: '#f6b700',
                marginVertical: 80,
                width: '90%'
            }}
            // onPress={() => navigation.navigate('GetGenie')}
            >
                <Text style={[styles.text], {
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: 'white',
                }}>Book Now</Text>
            </Pressable>
        </View>
    </View>
);

const SecondRoute = ({ navigation }) => (
    <View style={[styles.scene, styles.bookingTabs]}>
        <View style={[styles.bookingTabsContent], { alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Image
                style={[styles.bookingTabsImage], { width: 150, height: 150, marginVertical: 40 }}
                source={require('../assets/empty-past.png')}
            />
            <Text style={[styles.bookingTabsText], { textAlign: 'center', fontSize: 16, lineHeight: 22, marginVertical: 20, color: '#303030' }} >No Past Bookings yet. {"\n"}start your journey by {"\n"} Booking a services {"\n"} @ HomeGenie</Text>
            <Pressable style={[styles.button], {
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 10,
                elevation: 3,
                backgroundColor: '#f6b700',
                marginVertical: 80,
                width: '90%'
            }} >
                <Text style={[styles.text], {
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: 'white',
                }}>Book Now</Text>
            </Pressable>
        </View>
    </View>
);



export default function BookingScreen({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Current Bookings' },
        { key: 'second', title: 'Past Bookings' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    const renderTabBar = (props) => (
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            style={{ marginTop: 25, backgroundColor: 'red' }}
        />
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFBFF" }}>
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
                    <Text style={[styles.headerTitle]}>Bookings</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        renderLabel={({ route, color }) => (
                            <Text style={{ color: 'black', margin: 8 }}>
                                {route.title}
                            </Text>
                        )}
                        activeColor={{ color: 'green', backgroundColor: 'yellow' }}
                        indicatorStyle={{ backgroundColor: 'rgba(46,176,228,.2)', height: 4 }}
                        style={{ backgroundColor: 'transparent' }}
                    />
                )}
                onIndexChange={setIndex}
                style={[styles.container]}
            />

        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    scene: {
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