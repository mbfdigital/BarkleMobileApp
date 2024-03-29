import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f2',
    paddingTop: 60
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    marginVertical: 20
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5
  },
  input: {
    fontSize: 14,
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#ebebeb',
    borderColor: '#333',
    borderRadius: 4,
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 10,
    marginTop: 10,
    borderRadius: 10
  }
});

export default function CalenderEvent() {
  const [eventTitle, setEventTitle] = useState('Default event');
  const TIME_NOW_IN_UTC = moment.utc();

  const utcDateToString = momentInUTC => {
	  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
	  return s;
	};
	
  function addEventToCalendar(title, startDateUTC) {
  	console.log(title, startDateUTC);
  const eventConfig = {
    title: eventTitle,
    startDate: utcDateToString(startDateUTC),
    endDate: utcDateToString(moment.utc(startDateUTC).add(1, 'hours')),
    notes: 'Default Event Description'
  };
  console.log(eventConfig,'eventConfig')
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
  .then(eventId => {
    //handle success (receives event id) or dismissing the modal (receives false)
    if (eventId) {
      console.warn(eventId);
    } else {
      console.warn('dismissed');
    }
  })
  .catch((error: string) => {
    // handle error such as when user rejected permissions
    console.warn(error);
  });
}
  return (
    <View style={styles.container}>
   
      <Text style={styles.title}>
        Add Event in device's Calendar from React Native App
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter the Event title:</Text>
        <TextInput
          style={styles.input}
          value={eventTitle}
          onChangeText={text => setEventTitle(text)}
        />
        <Text style={styles.text}>Current Date and Time of the event:</Text>
        <Text style={styles.text}>
          {moment
            .utc(TIME_NOW_IN_UTC)
            .local()
            .format('lll')}
        </Text>
      </View>
			<TouchableOpacity style={styles.button} onPress={addEventToCalendar}>
				<Text style={[styles.text, { color: 'white' }]}>
				Add this event to the calendar
				</Text>
			</TouchableOpacity>
    </View>
  );
}