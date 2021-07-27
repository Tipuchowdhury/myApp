import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getDishes } from '../redux/actionCreators';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes())
    }
}

const MenuScreen = (props) => {
    useEffect(() => {
        props.getDishes();
    }, []);

    console.log(props);
    return (
        <View>
            <FlatList
                data={props.dishes}
                renderItem={
                    ({ item }) => (<MenuItem item={item} shareDish={() => props.navigation.navigate("Dish Detail", { dish: item })} />)
                }
                keyExtractor={item => item.id.toString()}
            />


        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);