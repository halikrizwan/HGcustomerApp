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
import { Searchbar } from 'react-native-paper';
import css, { alignCenter, spaceT5 } from '../commonCss';
let imgPath = "../../assets/";
let imgPathImages = "../../assets/images/"
export default function GetgenieCategories({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (

        <View style={[css.section]}>
            <View style={[css.container, css.liteBlueBG]}>
                <View style={[css.flexDRSB]}>
                    <View style={[css.flexDRSB, css.img90]}>
                        <TouchableHighlight style={[styles.categoryBtn, styles.activeBtn]}><Text style={[styles.categoryBtnText, styles.activeText]}>Daily Utilities</Text></TouchableHighlight>
                        <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Lifestyle & Decor</Text></TouchableHighlight>
                        <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Health & Wellness</Text></TouchableHighlight>
                        <TouchableHighlight style={[styles.categoryBtn]}><Text style={[styles.categoryBtnText]}>Others</Text></TouchableHighlight>
                    </View>
                    <View style={[css.justifyContentC]}>
                        <Image style={{ width: 25, height: 25 }} source={require(imgPath + 'login-icon.png')} />
                    </View>
                </View>
                <View style={[css.flexDRSB, css.spaceT10]}>
                    <Searchbar
                        placeholder="Search Services"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        IconSource
                        style={{ width: '90%', height: 40, borderRadius: 50, elevation: 0, fontFamily: 'PoppinsM' }}
                    />
                    <TouchableOpacity
                        style={[css.whiteC, css.backButton]}
                        onPress={() => navigation.goBack()}
                    >
                        <Image style={{ width: 15, height: 15 }} source={require(imgPath + 'close.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[css.flexDR], { flexDirection: 'row', height: '100%' }}>
                <View style={{ backgroundColor: '#eff7fc', width: '30%', height: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Getgeniescreen1')} style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d150', borderBottomWidth: 1 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require(imgPathImages + 'acBooking.png')} />
                        <Text style={{ fontFamily: 'PoppinsR', color: '#525252' }}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d150', borderBottomWidth: 1 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require(imgPathImages + 'acBooking.png')} />
                        <Text style={{ fontFamily: 'PoppinsR', color: '#525252' }}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d150', borderBottomWidth: 1 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require(imgPathImages + 'acBooking.png')} />
                        <Text style={{ fontFamily: 'PoppinsR', color: '#525252' }}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d150', borderBottomWidth: 1 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require(imgPathImages + 'acBooking.png')} />
                        <Text style={{ fontFamily: 'PoppinsR', color: '#525252' }}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#d1d1d150', borderBottomWidth: 1 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 5 }} source={require(imgPathImages + 'acBooking.png')} />
                        <Text style={{ fontFamily: 'PoppinsR', color: '#525252' }}>AC</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#fafafa', width: '70%', height: '100%', padding: 10 }}>
                    <Text style={[styles.categoryTite], { fontFamily: 'PoppinsBO', fontSize: 24 }}>AC Title</Text>
                    <View style={[], { flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, flexWrap: 'wrap' }}>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                        <View style={{ marginBottom: 25, width: 100, marginRight: 20 }}>
                            <Image style={{ width: 110, height: 70, borderRadius: 10, marginBottom: 5 }} source={require(imgPathImages + 'acCoolingBooking.png')} />
                            <Text style={[css.fr, css.f12]}>AC Cooling Repair</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    categoryBtn: {
        backgroundColor: '#fff',
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        borderColor: '#d1d1d1',
        borderWidth: 1,
        height: 45,
        width: '23%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryBtnText: {
        flexWrap: 'wrap', fontSize: 12, textAlign: 'center', fontFamily: 'PoppinsM'
    },
    activeBtn: {
        backgroundColor: '#2eb0e4',
        borderColor: '#2eb0e4'
    },
    activeText: {
        color: '#fff',
    }
})