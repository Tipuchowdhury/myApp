import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

const MenuItem = props => {
    return (
        <TouchableHighlight onPress={props.shareDish} >
            <View style={styles.container}>
                {props.item.image && <Image source={{ uri: props.item.image }} style={styles.image} />}
                <View style={styles.detailes}>
                    <Text style={styles.name}>{props.item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
    },

    detailes: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontWeight: "500",
    },
    description: {
        color: "#6e6969"
    }

})

export default MenuItem;