import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// progress
import * as Progress from 'react-native-progress';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const interval = setInterval(() => {
      if (progress < 1.0) {
        setProgress(progress + 0.01);
        console.log(progress);
      } else {
        clearInterval(interval);
        setLoading(true);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.progressContainer]}>
        <Progress.Bar progress={progress} width={null} height={13} />
      </View>
      {loading && <Text>완료!</Text>}
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
});

export default App;
