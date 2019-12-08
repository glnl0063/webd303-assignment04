// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, TouchableHighlight} from "react-native";



/* CALL-TO-ACTION BUTTON */
export default class CTAButton extends Component {
  
  render() {

    // return the following...
    return (

        <TouchableHighlight style={style.submitButton} onPress={this.props.onPressFunction}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Submit</Text>
        </TouchableHighlight>   

    );

  }

}

/* STYLESHEET */
const style = StyleSheet.create({
  
    submitButton: {
        alignItems: "center",
        backgroundColor: "#43435F",
        borderRadius: 4,
        justifyContent: "center",
        height: 52,
        marginTop: 35,
        marginHorizontal: 30,
      }
    
});