// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

// import icons from Ionicons
import {Ionicons} from "@expo/vector-icons";



/* BUTTON TO ADD IMAGE */
export default class CTAButton extends Component {
  
  render() {

    // return the following...
    return (

        <View style={style.avatarContainer}>
            <TouchableOpacity style={style.placeholder} onPress={this.props.onPressFunction}>
                <Image source={this.props.imageSource} style={style.avatar} />
                <Ionicons
                    name="ios-add"
                    size={40}
                    color="#FFF"
                    style={style.icon}
                />
            </TouchableOpacity>            
        </View>

    );

  }

}

/* STYLESHEET */
const style = StyleSheet.create({
  
    placeholder: {
        alignItems: "center",
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        height: 100,
        justifyContent: "center",
        marginBottom: 40,    
        marginTop: 10,
        width: 100
    },
    
    avatarContainer: {
        alignItems: "center", 
        width: "100%" 
    },
    
    avatar: {
        borderRadius: 50,
        height: 100,
        position: "absolute",
        width: 100
    },
    
    icons: {
        marginTop: 6,
        marginLeft: 2         
    }, 
    
});