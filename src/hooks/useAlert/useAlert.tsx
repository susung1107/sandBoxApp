import React, {useState} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

import styles from './useAlert.style';

// types 파일로 분리가능
interface AlertTypes {
  title: string;
  description: string;
  buttons: AlertButtonsTypes[];
}

interface AlertButtonsTypes {
  text: string;
  action: () => void;
}

const useAlertModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertConfig, setAlertConfig] = useState<AlertTypes>({
    title: '',
    description: '',
    buttons: [],
  });

  const showAlert = (
    title: string,
    description: string,
    buttons: AlertButtonsTypes[],
  ) => {
    setAlertConfig({title, description, buttons});
    setModalVisible(true);
  };

  const closeAlert = () => {
    setModalVisible(false);
  };

  const handleButtonPress = (action: any) => {
    closeAlert();
    action();
  };

  // alert 컨트롤 버튼 렌더 함수
  const renderButtons = () => {
    return alertConfig.buttons.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.buttonClose]}
        onPress={() => handleButtonPress(button.action)}>
        <Text style={[styles.textStyle]}>{button.text}</Text>
      </TouchableOpacity>
    ));
  };

  const AlertModal = () => {
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeAlert}>
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView]}>
            <Text style={[styles.modalTitle]}>{alertConfig.title}</Text>
            {alertConfig.description && (
              <Text style={[styles.modalDesception]}>
                {alertConfig.description}
              </Text>
            )}
            {/* modal buttons */}
            <View style={[styles.modalButton]}>
              {alertConfig.buttons && renderButtons()}
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return {showAlert, AlertModal};
};

export default useAlertModal;
