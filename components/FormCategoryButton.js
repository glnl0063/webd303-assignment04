// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

// import icons from Ionicons
import {Ionicons} from "@expo/vector-icons";


/* FORM CATEGORY BUTTON */
export default class FormButton extends Component {

    render() {

    // return the following...
    return (

        // when user clicks button, navigate to specific screen in stack navigation
        <TouchableHighlight onPress={this.props.navigationPath} style={style.backgroundContainer}>
            <View style={[style.buttonContainer, {backgroundColor: this.props.backgroundColor}]}>
                <View style={style.iconContainer}>
                    <Ionicons name={this.props.iconImage} size={32} color="#FFF"/>
                </View>                
                <View style={style.titleContainer}>                    
                    <Text style={style.buttonTitle}>{this.props.categoryName}</Text>
                </View>

                <View style={style.arrowContainer}>
                    <Ionicons name="ios-arrow-forward" size={32} color="#FFF"/>
                </View>                          
            </View>
        </TouchableHighlight>

    );

  }

}

/* STYLESHEET */ 
const style = StyleSheet.create({

    // button background
    backgroundContainer: {
        height: 100, 
        width: "100%"
    }, 

    // button details
    buttonContainer: {
        alignItems: "center", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-start", 
        height: 100, 
        width: "100%"
    },   

    // icon image
    iconContainer: {
        marginLeft: 20
    }, 

    // title section
    titleContainer: {
        marginLeft: 10, 
        width: "70%"
    }, 

    buttonTitle: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 25
    }, 

    // container w arrow
    arrowContainer: {
        marginLeft: 15
    }
 
});