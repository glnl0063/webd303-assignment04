// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Dimensions, StyleSheet, Text, View} from "react-native";



/* CARD to display appointments on calendar */
export default class CalendarAppointment extends Component {

  render() {

    // return the following...
    return (

        <View id={this.props.appointmentId} style={[style.cardContainer, {backgroundColor: this.props.cardColor}]} >  

            <View style={style.dateDetails}>
                <Text style={style.dateText}>{this.props.appointmentDate}</Text>  
                <Text style={style.dateText}>{this.props.appointmentTime}</Text>  
            </View>

            <View style={style.cardDetails}>
                <Text style={style.title}>{this.props.appointmentType} Appointment</Text>               
                <Text style={style.bodyText}>Location: {this.props.appointmentLoc}</Text> 
            </View>  

        </View>        

    );

  }
  
}

/* STYLESHEET */
const style = StyleSheet.create({
  
    // card
    cardContainer: {        
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        borderRadius : 7,        
        elevation: 5,
        margin: 5,         
        overflow: "hidden",  
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: Dimensions.get('screen').width-10
    },

    // date details
    dateDetails: {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        width: "30%"
    },

    dateText: {
        color: "white",
        fontWeight: "bold",
    },

    // card details
    cardDetails: {
        width: "70%"
    },

    title: {
        color: "white",
        fontSize: 22, 
        fontWeight: "bold",
        marginBottom: 10,
        textTransform: "capitalize",
    },   

    bodyText: {
        color: "#d2d2d2",
        fontSize: 16, 
        textTransform: "capitalize",        
    },        

    // container w icon
    iconContainer: {
        alignItems: "center",
        display: "flex",
        height: 40,
        justifyContent: "center",
        marginRight: 5,
        position: "absolute", 
        top: 5,
        right: 0,
        width: 40,
        zIndex: 5
    },

    cardIcon: {
        padding: 5
    }

});