import React, { FunctionComponent } from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Avi from "../assets/avi/9384699.png"
import { colors } from "../components/colors";
import Greetings from "../components/Header/Greetings";
import Profile from "../components/Header/Profile";
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.gray,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle:{
            padding: 25,
          }
          ,
          headerLeftContainerStyle:{
            paddingLeft:10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{backgroundColor: colors.accent}}
            />
          ) ,
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greetings 
                mainText="Hello Phong"
                subText="How are youtube?"
                {...props} />
            ), 
            headerLeft: () => <></>
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
