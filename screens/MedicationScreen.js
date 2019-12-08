// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Alert, SafeAreaView, ScrollView, StyleSheet} from "react-native";

// import custom components from component folder 
import MedCard from "../components/MedCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";



/* MEDICATION SCREEN that displays all medication added */ 
export default class ProfileScreen extends Component {

    // set reference to firebase database
    db = firebase.database();

    // initial states and bind functions
    constructor(props) {
        super(props); 
        this.state = {
          isLoading: true,
          medicationList: [], 
        }
        this.deleteMeds=this.deleteMeds.bind(this);    
    }

    // created function that takes data and deletes card
    deleteMeds(medId, medName) {

      // created constant that refers to URL with the medication Id
      const medicationReference = this.db.ref("medications").child(medId); 
      
      // read through the firebase data once
      medicationReference.once("value").then(snapshot => { 

        // if there is a URL with an ID that matches the clicked medication
        if (snapshot.val()) {

          // show alert message
          Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete " + medName + " from your medication list?",
            [
              // if user clicks cancel, return to page
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              // if user clicks okay, delete clicked medication from database
              {
                text: 'OK', 
                onPress: () => this.db.ref("medications/" + medId).set(null)
              },
            ],
            {cancelable: false},
          );

        // if there is no URL with an ID that matches the clicked medication           
        } else {

          // show an alert
          Alert.alert(medName + "does not exist");
        
        }

      })      

    }

    componentDidMount() {

      // listen for data changes in favourites database
      this.db.ref("medications").on("value", medData => {
        
        // declare constant that extracts a JavaScript value from snapshot in firebase 
        const medJSON = medData.val();

        // if there is something in the real time database
        if (medJSON) {

          // convert data from snapshot to a list of items
          const medObjects = Object.keys(medJSON).map(key => ({
            ...medJSON[key],
            uid: key
          })); 

          // set the medication array to the converted list of items
          this.setState({
            medicationList: medObjects
          });           
        
        // if there is nothing in the real time database
        } else {
          
          // set the medication array to empty
          this.setState({
            medicationList: []
          });            
        }

      }); 

    }

  render() {

    // return the following
    return (
    
      <SafeAreaView style={style.container}>
        <ScrollView>
          
          <FlatList style={style.drinksContainer}
            columnWrapperStyle={{justifyContent:'space-between'}}
            numColumns={2}
            data={this.state.medicationList}
            renderItem={({item, index}) =>

              <Animatable.View animation="fadeIn" delay={100 * index} useNativeDriver={true}>
                <MedCard           
                  deleteFunction={() => {this.deleteMeds(item.uid, item.medicationName)}}
                  medId={item.uid}
                  medName={item.medicationName}
                  medDose={item.medicationDose}
                  medFreq={item.medicationFrequency}
                  medDesc={item.medicationDescription}
                />
              </Animatable.View>        

            }
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