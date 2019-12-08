// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

// import date time picker
import DateTimePicker from "react-native-modal-datetime-picker";


/* INPUT FOR DATES */
export default class WordInput extends Component {
  
  render() {

    // return the following...
    return (

        <View style={this.props.marginTopNeeded}>
            <Text style={style.inputTitle}>{this.props.inputTitle}</Text>
            <TouchableHighlight style={style.calendarButton} onPress={this.props.onPresssFunction}>
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Select Date</Text>
            </TouchableHighlight>                
            <DateTimePicker
                mode="datetime"
                is24Hour={false}
                isVisible={this.props.isVisibleFunction}
                onConfirm={this.props.onConfirmFunction}
                onCancel={this.props.onCancelFunction}
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

    calendarButton: {
        alignItems: "center",
        backgroundColor: "#63638d",
        borderRadius: 4,
        justifyContent: "center",
        height: 35,
        marginTop: 15,
        marginHorizontal: 30,
    }      

});