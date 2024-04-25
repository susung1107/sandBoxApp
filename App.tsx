import React, {useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

const App = () => {
  const requestGalleryPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const result = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        if (result === RESULTS.DENIED) {
          const requestResult = await request(
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
          );

          if (requestResult === RESULTS.GRANTED) {
            console.log('권한이 허용되었습니다.');
          } else {
            console.log('권한이 허용되지 않았습니다.');
          }
        } else if (result === RESULTS.GRANTED) {
          console.log('권한이 이미 허용되어있습니다.');
        }
      } else {
        return;
      }
    } catch (error) {
      console.log('Permission Error : ', error);
    }
  };

  useEffect(() => {
    // permission
    requestGalleryPermission();
  }, []);

  // const renderItem = ({item}: any) => (
  //   <Image source={{uri: item}} style={styles.photo} />
  // );

  // const buttonColor = cameraPermission ? '#1A63D9' : '#cc3333';

  return (
    <View style={[styles.container]}>
      <View style={[styles.buttonContainer]}>
        {/* <Pressable
          style={[styles.button, {backgroundColor: buttonColor}]}
          onPress={togglePermission}>
          {cameraPermission ? (
            <Text style={[styles.buttonText]}>자유모드</Text>
          ) : (
            <Text style={[styles.buttonText]}>사진촬영 감시중</Text>
          )}
        </Pressable>
      </View>
      <View style={[styles.listContainer]}>
        {cameraPermission && (
          <FlatList
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    includeFontPadding: false,
    letterSpacing: -0.7,
  },
  listContainer: {
    flex: 4,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  photo: {
    width: 100,
    height: 100,
  },
});

export default App;
