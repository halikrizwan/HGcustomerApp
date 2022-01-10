import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
const city = [
  {
    label: "Dubai",
    value: "dubai",
  },
  {
    label: "Abu Dhabi",
    value: "abudhabi",
  },
];
const Header = (props) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.header}>
      <View style={[styles.searchBoxFull]}>
        <View style={[styles.headerDropDown]}>
          <RNPickerSelect
            placeholder={{}}
            items={city}
            onValueChange={(value) => {
              console.log(value)
            }}
            style={pickerSelectStyles}
          />
        </View>
        <View style={styles.headerSearchInput}>
          <Image
            source={require("../assets/searchIcon.png")}
            style={styles.alignCenter}
            style={[styles.alignCenter, styles.SearchInputIcon]}
          />
          <TextInput
            //onChangeText={onChangeText}
            value={text}
            placeholder="SEARCH FOR ANY SERVICE"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 110,
    paddingTop: 26,
    backgroundColor: "#2eb0e4",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: "#52006A",
    fontFamily: 'Lobster',
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: 'Lobster',
  },
  searchBoxFull: {
    backgroundColor: "#fff",
    width: "90%",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    fontFamily: 'Lobster',
  },
  headerDropDown: {
    width: "33%",
    paddingLeft: 10,
    fontFamily: 'Lobster',
  },
  headerDropdownPicker: {
    borderColor: "rgba(158, 150, 150, .0)",
    width: "100%",
    borderRadius: 30,
    fontFamily: 'Lobster',
  },
  headerSearchInput: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "65%",
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    padding: 10,
    fontFamily: 'Lobster',
  },
  SearchInputIcon: {
    marginRight: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Header;
