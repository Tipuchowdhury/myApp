import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/Card';



const mapStateToProps = state => {
    return {
        favourites: state.favourites
    }
}
const FavouritesScreen = props => {
    return (
        <View>
            <FlatList
                data={props.favourites}
                renderItem={({ item }) => (<Card item={item} />)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps)(FavouritesScreen);