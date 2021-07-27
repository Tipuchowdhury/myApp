import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icons from '../components/Icons';
import { addToFavourite } from '../redux/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        favourites: state.favourites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourite: dish => dispatch(addToFavourite(dish))
    }
}

const DishDetailScreen = props => {
    const dish = props.route.params.dish

    const isFovourite = props.favourites.some(item => item.id === dish.id)

    const makeFavourite = dish => {
        if (isFovourite) {
            alert('already added to favourite');
        }
        else {
            props.addToFavourite(dish)
        }

    }
    let iconName = "ios-heart-outline";
    if (isFovourite) {
        iconName = "ios-heart";
    }
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View>
                <Icons name={iconName} color='#F53B50' size={40} iconStyle={{ padding: 10 }} action={() => makeFavourite(dish)} />
                <Text style={styles.text}>{dish.description}</Text>
                <Text style={styles.text}>Price: {dish.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    text: {
        padding: 10,
        fontWeight: "500",
        fontSize: 20,
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen);