// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, View} from "react-native";


/* HERO CONTENT */ 
export default class FormInstructions extends Component {

    render() {

    // return the following...
    return (

        <View style={style.container}>
            <Text style={style.text}>Select your form</Text>                   
        </View>

    );

  }

}

/* STYLESHEET */ 
const style = StyleSheet.create({

    // container
    container: {
        alignItems: "center",
        display: "flex",
        height: 200,  
        justifyContent: "center",        
        width: "100%"
    },

    // instructions
    text: {
        color: "rgba(0,0,0,.8)",
        fontSize: 35, 
        fontWeight: "bold",
        textAlign: "center",
        width: "85%",
    },  
   
});