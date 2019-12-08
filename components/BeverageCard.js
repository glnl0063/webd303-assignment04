// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableHighlight, View} from "react-native";

// import linear icon from expo linear gradient library
import {LinearGradient} from 'expo-linear-gradient';

// import icons from Material Icons
import {MaterialIcons} from "@expo/vector-icons";


/* BEVERAGE CARD */
export default class BeverageCard extends Component {
  
  render() {

    // return the following...
    return (

      <ImageBackground id={this.props.drinkId} style={style.cardContainer} source={{uri: this.props.drinkImage}}>  

        <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} style={style.bookmarkGradient}>
          <TouchableHighlight style={style.iconContainer} onPress={this.props.cardFunction}>
            <View style={style.iconContainer}>
              <MaterialIcons name={"bookmark-border"} size={32} color="#CD8900" style={style.cardIcon}/>
            </View>
          </TouchableHighlight>
        </LinearGradient>              
        
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']} style={style.drinkNameGradient}>
            <Text style={style.drinkName}>{this.props.drinkName}</Text>
        </LinearGradient>  

      </ImageBackground>      

    );

  }

}

/* STYLESHEET */
const style = StyleSheet.create({
  
  // card
  cardContainer: {
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
    textAlign: "center", 
    width: Dimensions.get('screen').width/2 - 10
  },

  // top gradient
  bookmarkGradient: {
    height: 40,
    position: "absolute",
    width: "100%"
  },

  // container w icon
  iconContainer: {
    alignItems: "center",
    display: "flex",
    height: 40,
    justifyContent: "center",
    position: "absolute", 
    right: 0,
    width: 40,
    zIndex: 5
  },

  cardIcon: {
    padding: 5
  },

  // bottom gradient
  drinkNameGradient: {
    bottom: 0,
    position: "absolute",
    width: "100%"
  },

  // beverage name
  drinkName: {
    color: "white",
    fontSize: 18, 
    fontWeight: "bold",
    margin: 10,
    padding: 5
  }   

});