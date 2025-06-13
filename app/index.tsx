import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../src/navigation/AppNavigator';
import { EventProvider } from '../src/context/EventContext';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <EventProvider>
        <AppNavigator />
      </EventProvider>
    </View>
  );
}
