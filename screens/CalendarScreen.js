// import react and the component components from react
import React, {Component} from "react";

// import specific components from react native 
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

// // import custom components from component folder 
import ContactCard from "../components/ContactCard";

// import flat list icon from gesture handler library
import {FlatList} from "react-native-gesture-handler";

// import calendar 
import {Calendar} from 'react-native-calendars';

// import constants - provides system information (deviceName, platform & model, statusBarHeight, systemFonts, etc.)
import Constants from "expo-constants";

// import firebase credentials
import firebase from "../firebase"; 

// import animatable
import * as Animatable from "react-native-animatable";


/* CALENDAR SCREEN */ 
export default class CalendarScreen extends Component {

  // set reference to firebase database
  db = firebase.database();

  // initial states and bind functions
  constructor(props) {
      super(props); 
      this.state = {
        isLoading: true,
        appointmentList: [], 
        calendarList: {}
      }  
  }

  componentDidMount() {

    // listen for data changes in appointment database
    this.db.ref("appointments").on("value", appointmentData => {

      // test: display data 
      // console.log(appointmentData.val()); 
      
      // declare constant that extracts a JavaScript value from snapshot in firebase 
      const appointmentJSON = appointmentData.val();

      // if there is something in the real time database
      if (appointmentJSON) {

        // convert data from snapshot to a list of items
        const appointmentObjects = Object.keys(appointmentJSON).map(key => ({
          ...appointmentJSON[key],
          uid: key
        })); 

        // set the fav drink array to the converted list of items
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

    // listen for data changes in calendar database
    this.db.ref("calendar").on("value", calendarData => {

      // test: display data 
      console.log(calendarData.val()); 
      
      // declare constant that extracts a JavaScript value from snapshot in firebase 
      const calendarJSON = calendarData.val();

      // if there is something in the real time database
      if (calendarJSON) {

        // convert data from snapshot to a list of items
        const calendarObjects = Object.keys(calendarJSON).map(key => ({
          ...calendarJSON[key],
          uid: key
        })); 

        // set the fav drink array to the converted list of items
        this.setState({
          calendarList: calendarObjects
        });                 
      
      // if there is nothing in the real time database
      } else {
        
        // set the people array to empty
        this.setState({
          calendarList: {}
        });            
    
      }

    }); 
 
  }

  render() {

    // return the following
    return (

      // pass data from parent to child component (VerticalRestaurantCard.js)          
      <SafeAreaView style={style.container}>
        <Calendar
          // handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // calendar title (http://arshaw.com/xdate/#Formatting)
          monthFormat={'MMMM yyyy'}
          // handler which gets executed when visible month changes in calendar
          onMonthChange={(month) => {console.log('month changed', month)}}
          // hide other days from other months
          hideExtraDays={true}
          // set the beginning of the week to start on Sunday
          firstDay={0}
          // when left arrow pressed, recceives a callback to go back a month
          onPressArrowLeft={substractMonth => substractMonth()}
          // when right arrow pressed, receives a callback to go the next month
          onPressArrowRight={addMonth => addMonth()}
          markedType={"period"}
          markedDates={this.state.calendarList}
          theme={{
            backgroundColor: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#28c794',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#28c794',
            monthTextColor: '#2d4150',
            indicatorColor: '#2d4150',
            textMonthFontWeight: 'bold',
            textDayFontSize: 13,
            textMonthFontSize: 13,
            textDayHeaderFontSize: 16
          }}
        />       

        <ScrollView>

          <FlatList style={style.drinksContainer}
            data={this.state.appointmentList}
            renderItem={({item, index}) =>

              // each card has a delayed animation; data passed from parent to child component
              <Animatable.View animation="fadeInUp" delay={100 * index} useNativeDriver={true}>
                <ContactCard           
                  deleteFunction={() => {this.deleteAppointment(item.uid, item.doctorName)}}
                  personId={item.uid}
                  personImage={item.doctorName}
                  personName={item.doctorDate}
                  personRelation={item.doctorLocation}
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
    marginTop: Constants.statusBarHeight    
  }

});