import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import useAlertModal from './src/hooks/useAlert/useAlert';

const App = () => {
  const {showAlert, AlertModal} = useAlertModal();

  const handleModal = () => {
    showAlert('제목이구요', 'ㅁㄴㅇ', [
      {
        text: '확인',
        action: () => console.log('확인'),
      },
      {
        text: '취소',
        action: () => console.log('취소'),
      },
    ]);
  };

  return (
    <View style={styles.centeredView}>
      <AlertModal />
      <TouchableOpacity style={[styles.button]} onPress={() => handleModal()}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  textStyle: {
    color: '#fff',
  },
});

export default App;
