import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DatePicker from './src/components/datePicker/DatePicker';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());

  const formatDate = (value: Date) => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <View style={[styles.container]}>
      <DatePicker
        value={date}
        onChange={(value: React.SetStateAction<Date>) => setDate(value)}
        pointColor="#07ABB7"
        startDate={new Date('2023-04-01')}
        endDate={new Date('2025-11-01')}
      />
      <Text style={[styles.dateText]}>{formatDate(date)}</Text>
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  progressContainer: {
    marginTop: 10,
  },
  containerTest: {
    fontSize: 16,
    color: '#666',
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  dateText: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
