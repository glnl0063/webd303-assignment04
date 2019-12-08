// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {Alert, SafeAreaView, ScrollView, StyleSheet} from "react-native";

// // import custom components from component folder 
import ContactCard from "../components/ContactCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";



/* PEOPLE SCREEN that displays all people added */ 
export default class ProfileScreen extends Component {

    // set reference to firebase database
    db = firebase.database();

    // initial states and bind functions
    constructor(props) {
        super(props); 
        this.state = {
          isLoading: true,
          peopleList: [], 
        }
        this.deletePerson=this.deletePerson.bind(this);    
    }

    // created function that takes data and deletes card
    deletePerson(personId, personName) {

      // created constant that refers to URL with the person's id
      const personReference = this.db.ref("people").child(personId); 
      
      // read through the firebase data once
      personReference.once("value").then(snapshot => { 

        // if there is a URL with an ID that matches the person's id
        if (snapshot.val()) {

          // show alert message
          Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete " + personName + " from your people list?",
            [
              // if user clicks cancel, return to page
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              // if user clicks okay, delete person from database
              {
                text: 'OK', 
                onPress: () => this.db.ref("people/" + personId).set(null)
              },
            ],
            {cancelable: false},
          );

        // if there is no person in the database      
        } else {

          // show an alert
          Alert.alert("Person does not exist");
        
        }

      })      

    }

    componentDidMount() {

      // listen for data changes in people database
      this.db.ref("people").on("value", peopleData => {

        // test: display data 
        // console.log(peopleData.val()); 
        
        // declare constant that extracts a JavaScript value from snapshot in firebase 
        const peopleJSON = peopleData.val();

        // if there is something in the real time database
        if (peopleJSON) {

          // convert data from snapshot to a list of items
          const peopleObjects = Object.keys(peopleJSON).map(key => ({
            ...peopleJSON[key],
            uid: key
          })); 

          // set the fav drink array to the converted list of items
          this.setState({
            peopleList: peopleObjects
          });                 
        
        // if there is nothing in the real time database
        } else {
          
          // set the people array to empty
          this.setState({
            peopleList: []
          });            
     
        }

      }); 

    }

  render() {

    // return the following...
    return (

      <SafeAreaView style={style.container}>
        <ScrollView>

          <FlatList style={style.drinksContainer}
            data={this.state.peopleList}
            renderItem={({item, index}) =>

              // each card has a delayed animation; data passed from parent to child component
              <Animatable.View animation="fadeIn" delay={100 * index} useNativeDriver={true}>
                <ContactCard           
                  deleteFunction={() => {this.deletePerson(item.uid, item.personName)}}
                  personId={item.uid}
                  personImage={item.personImage}
                  personName={item.personName}
                  personRelation={item.personRelation}
                />
              </Animatable.View>        

            }
            // this gives each card an unique key
            keyExtractor={({id}, index) => index.toString()}
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