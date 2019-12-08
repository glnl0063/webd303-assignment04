// import react and the component components from react
import React from "react";

// import create app container from react navigation library 
import {createAppContainer} from "react-navigation";

// import stack navigtor from react navigation library 
import {createStackNavigator} from "react-navigation-stack"; 

// import bottom tab navigator from react navigation for tabs library 
import {createBottomTabNavigator} from "react-navigation-tabs";

// import icons from Ionicons
import {Ionicons} from "@expo/vector-icons";

// import screens for calendar
import CalendarScreen from './screens/CalendarScreen';

// import screens that will be stack in form screen
import FormScreen from "./screens/FormScreen";
import AppointmentForm from "./screens/AppointmentForm";
import MedicationForm from "./screens/MedicationForm"; 
import PeopleForm from "./screens/PeopleForm"; 


// import screens that will be stack in profile screen
import ProfileScreen from './screens/ProfileScreen';
import AppointmentScreen from "./screens/AppointmentScreen";
import MedicationScreen from "./screens/MedicationScreen"; 
import PeopleScreen from "./screens/PeopleScreen"; 


// combined all screens used for stack navigation and assign to constant
const FormStack = createStackNavigator({

  Form: {
    // navigate to homepage for forms
    screen: FormScreen,
    navigationOptions: {
      // hide header by default
      header: null
    }    
  },

  AppointmentForm: {
    // navigate to form for appointments
    screen: AppointmentForm,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Appointment Form",
      // header background 
      headerStyle: {
        backgroundColor: "#6e4e4e"
      }      
    }
  },

  MedicationForm: {
    // navigate to form for medications
    screen: MedicationForm,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB", 
      headerTitle: "Medication Form",
      // header background 
      headerStyle: {
        backgroundColor: "#6e6e4e"
      }
    }
  }, 

  PeopleForm: {
    // navigate to form for people
    screen: PeopleForm,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "People Form",
      // header background
      headerStyle: {
        backgroundColor: "#4e6e6e"
      }
    }
  }  

});


const CollectionStack = createStackNavigator({

  Profile: {
    // navigate to profile
    screen: ProfileScreen,
    navigationOptions: {
      // hide header by default
      header: null
    }    
  },

  AppointmentScreen: {
    // navigate to collection of appointments
    screen: AppointmentScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "Appointment History",
      // header background 
      headerStyle: {
        backgroundColor: "#6e4e4e"
      }      
    }
  },

  MedicationScreen: {
    // navigate to collection of medications
    screen: MedicationScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB", 
      headerTitle: "Medication History",
      // header background 
      headerStyle: {
        backgroundColor: "#6e6e4e"
      }
    }
  }, 

  PeopleScreen: {
    // navigate to collection of people
    screen: PeopleScreen,
    navigationOptions: {
      // header text
      headerTintColor: "#FFFAFB",       
      headerTitle: "People History",
      // header background
      headerStyle: {
        backgroundColor: "#4e6e6e"
      }
    }
  }    

});

// create a bottom tab navigator and assign it to constant
const TabNavigator = createBottomTabNavigator ({

  // Calender
  Calendar: CalendarScreen, 

  // Calender
  Add: FormStack,

  // Profile: ProfileScreen,
  Profile: CollectionStack,  

}, 

{
  // options for navigation
  defaultNavigationOptions: ({navigation}) => ({

    // for the tab bar icons, do the following...
    tabBarIcon: ({tintColor}) => {

      // declared variable and assign the navigation state
      const {routeName} = navigation.state; 

      // declared variable for icon component and set it to font awesome
      let IconComponent = Ionicons; 

      // declared variable
      let iconName; 

      // if the Calender tab is active
      if (routeName === "Calendar") {

        // set the icon's name to calender 
        iconName = "md-calendar"; 

      // if the Calender tab is active
      } else if (routeName === "Add") {

        // set the icon's name to calender 
        iconName = "ios-add-circle";         

      // else if the Profile tab is active
      } else if (routeName === "Profile") {

        // set the icon's name to user
        iconName = "ios-person"; 

      }

      // return icon component with attributes
      return <IconComponent name={iconName} size={25} color={tintColor}/>
    }

  }),

  // option for tab bar 
  tabBarOptions: {
    activeTintColor: "#FFFAFB", 
    labelStyle: {
      fontSize: 12, 
      fontWeight: "bold"
    },
    inactiveTintColor: "#B4B4B4",
    showIcon: true, 
    style: {
      backgroundColor: "#4e4e6e"
    }
  }

}

);

// export the app container and pass in the tab navigator
export default createAppContainer(TabNavigator);