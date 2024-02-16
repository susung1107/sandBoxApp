import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    [],
  );

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Text>Open</Text>
          </TouchableOpacity>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}
            bottomInset={46}
            detached={true}
            handleStyle={styles.bottomSheetHandle}
            backgroundStyle={[styles.bottomSheetBackground]}
            style={styles.sheetContainer}>
            <View style={styles.contentContainer}>
              <Text style={[styles.text]}>완성!!</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  bottomSheetHandle: {
    borderWidth: 1,
    height: 30,
    opacity: 0,
  },
  bottomSheetBackground: {
    borderRadius: 45,
  },
  text: {
    fontSize: 20,
    color: '#333',
    letterSpacing: -0.7,
    lineHeight: 25,
  },
});

export default App;
