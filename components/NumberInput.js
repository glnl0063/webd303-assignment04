// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, TextInput, View} from "react-native";



/* INPUT THAT TAKES NUMBERS ONLY */
export default class NumberInput extends Component {
  
  render() {

    // return the following...
    return (

        <View style={this.props.marginTopNeeded}>
            <Text style={style.inputTitle}>{this.props.inputTitle}</Text>
            <TextInput
                style={style.input}
                keyboardType="numeric"
                onChangeText={this.props.onChangeTextFunction}
                value={this.props.inputValue}
            />
        </View>

    );

  }

}

/* STYLESHEET */
const style = StyleSheet.create({
  
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 12,
    },
    
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: "#161F3D",
        fontSize: 15,
        height: 40,
    }, 

});