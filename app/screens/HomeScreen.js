import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import imageBack from '../components/images/fast.jpg';


const HomeScreen = () => {
    return (
        <ImageBackground source={imageBack} style={{ width: "100%", flex: 1 }}>
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.views}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Welcome to the restaurent</Text>
                        <Text style={styles.text}>Choose your favourite dish now</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    views: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    },
    textView: {
        width: '100%',

    },
    text: {
        color: "white",
        fontSize: 21,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000',
        opacity: 0.2
    },


})

export default HomeScreen;