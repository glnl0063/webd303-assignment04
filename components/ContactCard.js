// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Dimensions, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

// import icons from Material Icons
import {MaterialIcons} from "@expo/vector-icons";


/* CARD to display person */
export default class ContactCard extends Component {

  render() {

    // return the following...
    return (

        <View id={this.props.personId} style={style.cardContainer} >  
            
            <Image source={{uri: this.props.personImage}}/>

            <View style={style.cardDetails}>
                <Text style={style.personName}>{this.props.personName}</Text>
                <Text style={style.personRelation}>Relationship: {this.props.personRelation}</Text>                
            </View>  

            <TouchableHighlight style={style.iconContainer} onPress={this.props.deleteFunction}>
                <View style={style.iconContainer}>
                <MaterialIcons name={"delete"} size={32} color="#B4B4B4" style={style.cardIcon}/>
                </View>
            </TouchableHighlight>

        </View>        

    );

  }
  
}

/* STYLESHEET */
const style = StyleSheet.create({
  
    // card
    cardContainer: {        
        alignItems: "center", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        borderRadius : 7,        
        elevation: 5,
        height: 100,
        margin: 5,         
        overflow: "hidden",  
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: Dimensions.get('screen').width-10
    },

    // card details
    cardDetails: {
        width: "75%"
    },

    personName: {
        color: "rgba(0,0,0,0.8)",
        fontSize: 22, 
        fontWeight: "bold",
        marginBottom: 10,
        textTransform: "capitalize",
    },   

    personRelation: {
        color: "#525252",
        fontSize: 16, 
        textTransform: "capitalize",        
    },        

    // container w icon
    iconContainer: {
        alignItems: "center",
        display: "flex",
        height: 40,
        justifyContent: "center",
        marginRight: 10,
        position: "absolute", 
        right: 0,
        width: 40,
        zIndex: 5
    },

    cardIcon: {
        padding: 5
    }

});