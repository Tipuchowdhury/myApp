import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactScreen = () => {
    return (
        <View style={styles.contact}>
            <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center' }}>Restaurant App</Text>
            <Text>Phone: 01677430707</Text>
            <Text>email: a.h.chowdhury1@gmail.com</Text>
            <Text>Address: Chittagong, Bangladesh </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contact: {
        padding: 15,
        borderRadius: 8,
        borderColor: "#000",
        justifyContent: "center",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default ContactScreen;