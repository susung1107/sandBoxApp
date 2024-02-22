import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// codepush
import CodePush, {DownloadProgress, LocalPackage} from 'react-native-code-push';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// components
import SyncProgressView from './src/components/syncProgressView/SyncProgressView';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  // codepush
  const [hasUpdate, setHasUpdate] = useState(true);
  const [syncProgress, setSyncProgress] = useState<DownloadProgress>();

  useEffect(() => {
    // func
    const checkCodePush = async () => {
      try {
        const update = await CodePush.checkForUpdate();
        if (update) {
          update
            .download((progress: DownloadProgress) => setSyncProgress(progress))
            .then((newPackage: LocalPackage) =>
              newPackage
                .install(CodePush.InstallMode.IMMEDIATE)
                .then(() => CodePush.restartApp()),
            );
          return;
        }
        setHasUpdate(false);
      } catch {
        setHasUpdate(false);
      }
    };

    checkCodePush();
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.progressContainer]}>
        <Text style={[styles.containerTest]}>Code push Test!!!</Text>
      </View>
      {hasUpdate && syncProgress && (
        <SyncProgressView syncProgress={syncProgress} />
      )}
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
});

export default CodePush(App);
