// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Picker, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

// import custom components from component folder 
import DateInput from "../components/DateInput"; 
import SubmitButton from "../components/SubmitButton";
import WordInput from "../components/WordInput"; 

// import firebase credentials
import firebase from "../firebase"; 



/* APPOINTMENT FORM  */ 
export default class AppointmentForm extends Component {

  // set reference to firebase database
  db = firebase.database();

  // initial states and bind functions
  constructor(props) {
    super(props); 
    this.state = {
      isDateTimePickerVisible: false,
      docName: "",
      docLoc: "", 
      docDate: "",
      docTime: "", 
      docType: "",
      calendarColor: "" 
    }
    this.addAppointment = this.addAppointment.bind(this); 
  }

  // created function that takes data and adds appointment to dataase
  addAppointment(docName, docLoc, docDate, docTime, docType, calendarColor) {

    // if any field is empty
    if (!docName || !docLoc || !docDate || !docTime || !docType) {

      // display alert
      alert("Missing information: Please enter fields");

    } else {

      // push data into firebase database for appointments
      this.db.ref().child("appointments").push({
        doctorName: docName,
        doctorLocation: docLoc, 
        appointmentType: docType, 
        doctorDate: docDate, 
        doctorTime: docTime, 
        appointmentColor: calendarColor
      });

      // push data into firebase database for calendar
      this.db.ref("calendar/" + docDate).set({
        color: calendarColor, 
        startingDay: true, 
        endingDay: true
      });
      
      // test: display data
      // console.log(docName + "\n" + docLoc + "\n" + docDate + "\n" + docTime);

      // clear the state 
      this.setState({ 
        docName: "",
        docLoc: "", 
        docDate: "",
        docTime: "",
        docType: "",
        calendarColor: ""
      });

      // close this active screen and move back in the stack
      this.props.navigation.goBack();

    }

  }

  // show modal for date & time
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  // hide modal for date & time
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  //
  handleDatePicked = date => {

    // test: display clicked date
    // console.log("A date has been picked: ", date);

    // take timestamp and break into date and time
    const clickedDate = date.toISOString().split('T')[0];
    const clickedTime = date.toISOString().slice(11,19);

    // set states for date & time
    this.setState({
      docDate: clickedDate,
      docTime: clickedTime
    })

    // close the time picker modal
    this.hideDateTimePicker();

  };  

  // set the color depending on the appointment type  
  handleChangeOption = val => {
    if (val == "Family Doctor") { 
      this.setState({
        docType: "Family Doctor",
        calendarColor: "#4e6e6e"
      }); 
    } else if (val == "Dentist") { 
      this.setState({
        docType: "Dentist",          
        calendarColor: "#4e4e6e"
      }); 
    } else if (val == "Hospital") { 
      this.setState({
        docType: "Hospital",          
        calendarColor: "#6e4e4e"
      }); 
    } else { 
      this.setState({ 
        docType: "Specialist",          
        calendarColor: "#6e6e4e"
      }); 
    }   
  }  

  render() {

    // return the following...
    return (

      <SafeAreaView style={style.container}>
        <ScrollView style={style.formContent}>

          <WordInput
            marginTopNeeded={{}}
            inputTitle={"Doctor Name"}
            onChangeTextFunction={docName => this.setState({docName})}
            inputValue={this.state.docName}
          />   

          <View style={{ marginTop: 32 }}>
            <Text style={style.inputTitle}>Appointment Type</Text>
            <Picker
              selectedValue={this.state.docType}
              style={{height: 50, width: "100%"}}
              onValueChange={this.handleChangeOption}>
              <Picker.Item label="Select Options" />                  
              <Picker.Item label="Family Doctor" value="Family Doctor"/>
              <Picker.Item label="Dentist" value="Dentist" />
              <Picker.Item label="Hospital" value="Hospital" />
              <Picker.Item label="Specialist" value="Specialist" />                                
            </Picker>                
          </View>            
            
          <WordInput
            marginTopNeeded={{ marginTop: 32 }}
            inputTitle={"Doctor Location"}
            onChangeTextFunction={docLoc => this.setState({docLoc})}
            inputValue={this.state.docLoc}
          />

          <DateInput
            marginTopNeeded={{ marginTop: 32 }}
            inputTitle={"Appointment Date"}
            onPresssFunction={this.showDateTimePicker}
            isVisibleFunction={this.state.isDateTimePickerVisible}
            onConfirmFunction={this.handleDatePicked}
            onCancelFunction={this.hideDateTimePicker}            
          />                

          <SubmitButton 
            onPressFunction={
              () => this.addAppointment(
                this.state.docName, 
                this.state.docLoc, 
                this.state.docDate, 
                this.state.docTime, 
                this.state.docType, 
                this.state.calendarColor
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
  },

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