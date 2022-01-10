import * as React from 'react';
import { Button, View, Text, Image, SafeAreaView } from 'react-native';



export default function GetgenieScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', }}>
                <Text>GetgenieScreen</Text>
                <Button title="Go to Bookings page" onPress={() => navigation.navigate('BookingPage')} />
                <Button title="Go to Category" onPress={() => navigation.navigate('CategoryPage')} />
            </View>
        </SafeAreaView>
    );
}