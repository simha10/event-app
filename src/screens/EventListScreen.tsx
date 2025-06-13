import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEvent } from '../context/EventContext';

const EventListScreen = () => {
  const navigation = useNavigation<any>();
  const { events } = useEvent();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Events</Text>

      {events.length === 0 ? (
        <Text>No events added yet.</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddEvent')}
      >
        <Text style={styles.buttonText}>+ Add New Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16, padding: 10, borderWidth: 1, borderColor: '#ccc' },
  image: { width: '100%', height: 150, marginBottom: 8 },
  button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
});
