import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImg from '../components/images/bgi.jpg';
import { tryAuth } from '../redux/actionCreators';
import { connect } from "react-redux";
import { useIsFocused } from '@react-navigation/native';


// const mapStateToProps = state => {
//     isAuth: state.isAuth
// }

const mapDispatchToProps = dispatch => {
    return {
        tryAuth: (email, password, mode) => dispatch(tryAuth(email, password, mode))
    }
}


const LoginScreen = props => {
    const [authStates, setAuthState] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const switchView = () => {
        setAuthState({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    }

    const updateInputs = (value, name) => {
        setAuthState({
            ...authStates,
            inputs: {
                ...authStates.inputs,
                [name]: value
            }
        })
    }
    const isFocused = useIsFocused();
    useEffect(() => {
        setAuthState({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    }, [isFocused])

    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const authHandle = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email != "" && password != "") {
            if (re.test(email)) {
                if (authStates.mode === "login") {
                    props.tryAuth(email, password, "login");

                } else {
                    if (password === confirmPassword) {
                        props.tryAuth(email, password, "signup");

                    } else {
                        alert("Password didn't matched");
                    }
                }
            } else {
                alert("Invalid email");
            }
        } else {
            alert("Please fill up all fields");
        }
    }

    let confirmPass = null;
    if (authStates.mode === "signup") {
        confirmPass = (
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                value={authStates.inputs.confirmPassword}
                secureTextEntry={true}
                onChangeText={value => updateInputs(value, "confirmPassword")}
            />
        );
    }
    return (
        <ImageBackground source={backgroundImg} style={{ width: "100%", flex: 1 }} blurRadius={5}>
            <View style={styles.loginView}>
                <TouchableOpacity style={{ ...styles.btnContainer, width: "85%", backgroundColor: "#1167b1", padding: 8, borderRadius: 8 }}
                    onPress={
                        () => switchView()
                    }
                >
                    <Text style={styles.btnStyle}>{authStates.mode === "login" ? "Switch to SignUp" : "Switch to LogIn"}</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={authStates.inputs.email}
                    onChangeText={value => updateInputs(value, "email")}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={authStates.inputs.password}
                    secureTextEntry={true}
                    onChangeText={value => updateInputs(value, "password")}
                />

                {confirmPass}

                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => {
                        authHandle()
                    }}>
                    <Text style={styles.btnStyle}>{authStates.mode === "login" ? "Login" : "Signin"}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: "85%",
        padding: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#009688",
        borderRadius: 8,
        color: "#fff"
    },
    btnStyle: {
        fontSize: 16,
        alignSelf: "center",
        color: "#fff",
        padding: 5
    },
    btnContainer: {
        flexDirection: "row",
        borderRadius: 8,
        width: 150,
        borderColor: "#009688",
        paddingVertical: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#009688"
    }
})

export default connect(null, mapDispatchToProps)(LoginScreen);