// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Dimensions, ScrollView, SafeAreaView, StyleSheet} from "react-native";

// import custom components from component folder 
import FormCategoryButton from "../components/FormCategoryButton";

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import animatable
import * as Animatable from "react-native-animatable";



/* FORM SCREEN  */
export default class HomeScreen extends Component {

    render() {

    // return the following...
    return (
     
      <SafeAreaView style={style.container}>
        <ScrollView>

            <Animatable.View animation="fadeInLeftBig" delay={100 * 1} useNativeDriver={true}>
                <FormCategoryButton
                    height={Dimensions.get('screen').height/3}
                    navigationPath={() => {this.props.navigation.navigate("AppointmentForm"); }}
                    iconImage="ios-time"
                    categoryName="Appointments"
                    backgroundColor="#6e4e4e"                         
                />
            </Animatable.View>

            <Animatable.View animation="fadeInLeftBig" delay={100 * 2} useNativeDriver={true}>
                <FormCategoryButton
                    height={Dimensions.get('screen').height/3}                
                    navigationPath={() => {this.props.navigation.navigate("MedicationForm"); }}
                    iconImage="md-medkit"
                    categoryName="Medications"
                    backgroundColor="#6e6e4e"                                     
                />  
            </Animatable.View>            

            <Animatable.View animation="fadeInLeftBig" delay={100 * 3} useNativeDriver={true}>
                <FormCategoryButton
                    height={Dimensions.get('screen').height/3}                
                    navigationPath={() => {this.props.navigation.navigate("PeopleForm"); }}
                    iconImage="ios-people"
                    categoryName="People"
                    backgroundColor="#4e6e6e"
                />  
            </Animatable.View>   

        </ScrollView>
      </SafeAreaView>
      
    );

  }
  
}

/* STYLESHEET */
const style = StyleSheet.create({

    // container of whole page
    container: {
        flex: 1, 
        marginTop: Constants.statusBarHeight
    }
   
});