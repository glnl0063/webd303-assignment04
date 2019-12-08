// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from "react-native";

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
                    <Ionicons name={this.props.iconImage} size={40} color="#FFF"/>
                </View>                
                <View style={style.titleContainer}>                    
                    <Text style={style.buttonTitle}>{this.props.categoryName}</Text>
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
        borderRadius : 7,        
        elevation: 5,
        height: 150,
        margin: 5,         
        overflow: "hidden",  
        shadowColor: "#000",
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: Dimensions.get('screen').width/2 - 10 
    }, 

    // button details
    buttonContainer: {
        alignItems: "center", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        height: 150, 
        width: "100%"
    },   

    // icon image
    iconContainer: {
        margin: 10,
    }, 

    // title section
    titleContainer: {

    }, 

    buttonTitle: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 25
    }, 

});