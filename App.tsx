import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// import components
import AlertModal from './src/components/alertModal/AlertModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // alert 모달 오픈 함수
  const openModal = () => {
    setModalVisible(true);
  };

  // alert 모달 버튼 액션
  const handleModalButtonPress = () => {
    console.log('Button pressed');
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      {/* Show Modal 버튼 */}
      <TouchableOpacity style={[styles.button]} onPress={openModal}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>

      <AlertModal
        title="존재하지 않는 페이지입니다."
        description="다시 시도해주세요!"
        buttons={[
          {text: '확인', action: handleModalButtonPress},
          {text: '닫기', action: handleModalButtonPress},
        ]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
