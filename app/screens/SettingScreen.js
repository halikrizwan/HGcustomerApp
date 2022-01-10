import * as React from 'react';
import { Button, View, Text, Image, SafeAreaView } from 'react-native';



export default function SettingScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SettingsScreen Screen</Text>
            <Button title="Go to Bookings page" onPress={() => navigation.navigate('BookingPage')} />
            <Button title="Go to Support page" onPress={() => navigation.navigate('SupportPage')} />
            <Button title="Go to Offers page" onPress={() => navigation.navigate('OfferPage')} />
            <Button title="Go to Wallet page" onPress={() => navigation.navigate('WalletPage')} />
            <Button title="Go to Settings page" onPress={() => navigation.navigate('SettingPage')} />
        </View>
    );
}