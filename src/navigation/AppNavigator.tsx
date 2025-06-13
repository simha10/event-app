import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddEventScreen from "../screens/AddEventScreen";
import EventListScreen from "../screens/EventListScreen";

export type RootStackParamList = {
  EventList: undefined;
  AddEvent: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="EventList">
      <Stack.Screen
        name="EventList"
        component={EventListScreen}
        options={{ title: "Events" }}
      />
      <Stack.Screen
        name="AddEvent"
        component={AddEventScreen}
        options={{ title: "Add Event" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
