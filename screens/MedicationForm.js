// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

// import custom components from component folder 
import LargeInput from "../components/LargeInput"; 
import NumberInput from "../components/NumberInput"; 
import SubmitButton from "../components/SubmitButton";
import WordInput from "../components/WordInput"; 

// import firebase credentials
import firebase from "../firebase"; 



/* MEDICATION FORM  */ 
export default class MedicationForm extends Component {

    // set reference to firebase database
    db = firebase.database();

    // initial states and bind functions
    constructor(props) {
      super(props); 
      this.state = {
        medName: "",
        medDose: "", 
        medFreq: "", 
        medDesc: ""
      }
      this.addMed = this.addMed.bind(this); 
    }

    // created function that takes data and adds medication to dataase
    addMed(medName, medDose, medFreq, medDesc) {

      // if any field is empty
      if (!medName || !medDose || !medFreq || !medDesc) {

        // display alert
        alert("Missing information: Please enter fields");

      } else {

        // push data into firebase database
        this.db.ref().child("medications").push({
          medicationName: medName,
          medicationDose: medDose, 
          medicationFrequency: medFreq, 
          medicationDescription: medDesc
        });
        
        // test: display data
        // console.log(medName + "\n" + medDose + "\n" + medFreq + "\n" + medDesc);

        // clear the state 
        this.setState({ 
          medName: "",
          medDose: "", 
          medFreq: "", 
          medDesc: ""
        });

        // close this active screen and move back in the stack
        this.props.navigation.goBack();
      
      }

    }

  render() {

    // return the following...
    return (

      <SafeAreaView style={style.container}>
        <ScrollView style={style.formContent}>

          <WordInput
            marginTopNeeded={{}}
            inputTitle={"Medication Name"}
            onChangeTextFunction={medName => this.setState({medName})}
            inputValue={this.state.medName}
          /> 

          <NumberInput
            marginTopNeeded={{marginTop: 32}}
            inputTitle={"Dosage Per Day"}
            onChangeTextFunction={medDose => this.setState({medDose})}
            inputValue={this.state.medDose}
          />                

          <NumberInput
            marginTopNeeded={{marginTop: 32}}
            inputTitle={"Repeat"}
            onChangeTextFunction={medFreq => this.setState({medFreq})}
            inputValue={this.state.medFreq}
          /> 

          <LargeInput
            marginTopNeeded={{marginTop: 32}}
            inputTitle={"Medication Description"}
            onChangeTextFunction={medDesc => this.setState({medDesc})}
            inputValue={this.state.medDesc}
          />                               

          <SubmitButton 
            onPressFunction={
              () => this.addMed(
                this.state.medName, 
                this.state.medDose, 
                this.state.medFreq, 
                this.state.medDesc
              )
            }
          />

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
  }, 

  formContent: {
    padding: 20
  }

});