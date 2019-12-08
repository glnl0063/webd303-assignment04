// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {SafeAreaView, StyleSheet, View} from "react-native";

// import custom components from component folder 
import CategoryButton from "../components/CategoryButton";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import animatable
import * as Animatable from "react-native-animatable";


/* PROFILE SCREEN */
export default class ProfileScreen extends Component {

    render() {

    // return the following...
    return (
     
      <SafeAreaView style={style.container}>
        <View style={style.buttonWrapper}>
            
            <Animatable.View animation="fadeIn" delay={100 * 1} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make beer category button
                    navigationPath={() => {this.props.navigation.navigate("AppointmentScreen"); }}
                    iconImage="ios-time"
                    categoryName="Appointments"
                    backgroundColor="#6e4e4e"                         
                />
            </Animatable.View>

            <Animatable.View animation="fadeIn" delay={100 * 2} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make cocktails category button
                    navigationPath={() => {this.props.navigation.navigate("MedicationScreen"); }}
                    iconImage="md-medkit"
                    categoryName="Medications"
                    backgroundColor="#6e6e4e"                                     
                />  
            </Animatable.View>            

            <Animatable.View animation="fadeIn" delay={100 * 3} useNativeDriver={true}>
                <CategoryButton
                    // pass props to child component to make cocktails category button
                    navigationPath={() => {this.props.navigation.navigate("PeopleScreen"); }}
                    iconImage="ios-people"
                    categoryName="People"
                    backgroundColor="#4e6e6e"
                />  
            </Animatable.View>                                                

        </View>
      </SafeAreaView>
      
    );

  }
  
}

/* STYLESHEET */
const style = StyleSheet.create({

    // container of whole page
    container: {
        flex: 1, 
        marginTop: Constants.statusBarHeight,    
    }, 

    buttonWrapper: {
      alignItems: 'flex-start',
      flexDirection:'row',    
      flexWrap: 'wrap', 
    }
   
});