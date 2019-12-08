// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Alert, SafeAreaView, ScrollView, StyleSheet} from "react-native";

// import custom components from component folder 
import AppointmentCard from "../components/AppointmentCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";



/* APPOINTMENT SCREEN that displays all appointments added */ 
export default class AppointmentScreen extends Component {

    // set reference to firebase database
    db = firebase.database();

    // initial states and bind functions
    constructor(props) {
        super(props); 
        this.state = {
          isLoading: true,
          appointmentList: [], 
        }
        this.deleteAppointment=this.deleteAppointment.bind(this);    
    }

    // created function that takes data and deletes card
    deleteAppointment(appointmentId, docName) {

      // created constant that refers to URL with the person's id
      const appointmentReference = this.db.ref("appointments").child(appointmentId); 
      
      // read through the firebase data once
      appointmentReference.once("value").then(snapshot => { 

        // if there is a URL with an ID that matches the person's id
        if (snapshot.val()) {

          // show alert message
          Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete your appointment with " + docName + " from the list?",
            [
              // if user clicks cancel, return to page
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              // if user clicks okay, delete appointment from database
              {
                text: 'OK', 
                onPress: () => this.db.ref("appointments/" + appointmentId).set(null)
              },
            ],
            {cancelable: false},
          );

        // if there is no appointment in the database      
        } else {

          // show an alert
          Alert.alert("Appointment does not exist");
        
        }

      })      

    }

    componentDidMount() {

      // listen for data changes in appointment database
      this.db.ref("appointments").on("value", appointmentData => {

        // test: display data 
        console.log(appointmentData.val()); 
        
        // declare constant that extracts a JavaScript value from snapshot in firebase 
        const appointmentJSON = appointmentData.val();

        // if there is something in the real time database
        if (appointmentJSON) {

          // convert data from snapshot to a list of items
          const appointmentObjects = Object.keys(appointmentJSON).map(key => ({
            ...appointmentJSON[key],
            uid: key
          })); 

          // set the appointment to the converted list of items
          this.setState({
            appointmentList: appointmentObjects
          });                 
        
        // if there is nothing in the real time database
        } else {
          
          // set the people array to empty
          this.setState({
            appointmentList: []
          });            
     
        }

      }); 

    }

  render() {

    // return the following
    return (

      // pass data from parent to child component (VerticalRestaurantCard.js)          
      <SafeAreaView style={style.container}>
        <ScrollView>

          <FlatList style={style.drinksContainer}
            data={this.state.appointmentList}
            renderItem={({item, index}) =>

              // each card has a delayed animation; data passed from parent to child component
              <Animatable.View animation="fadeIn" delay={100 * index} useNativeDriver={true}>
                <AppointmentCard           
                  deleteFunction={() => {this.deleteAppointment(item.uid, item.doctorName)}}
                  appointmentId={item.uid}
                  docName={item.doctorName}
                  appointmentDate={Date(item.doctorDate).toLocaleString()}
                  appointmentTime={item.doctorTime}
                  appointmentLoc={item.doctorLocation}
                  appointmentType={item.appointmentType}                                    
                />
              </Animatable.View>        

            }
            // this gives each card an unique key
            keyExtractor={index => index.toString()}
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
  }

});