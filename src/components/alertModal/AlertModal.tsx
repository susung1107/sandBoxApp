import React from 'react';
// import PropTypes from 'prop-types';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

// styles
import styles from './AlertModal.style';

// types
interface AlertTypes {
  title: string;
  description?: string;
  buttons: AlertButtonsTypes[];
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

interface AlertButtonsTypes {
  text: string;
  action: () => void;
}

const AlertModal = ({
  title,
  description,
  buttons,
  modalVisible,
  setModalVisible,
}: AlertTypes) => {
  // render
  const renderButtonGroup = () => {
    return buttons.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.buttonClose]}
        onPress={item.action}>
        <Text style={styles.textStyle}>{item.text}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* modal text */}
          <View style={[styles.modalContent]}>
            <Text style={styles.modalTitle}>{title}</Text>
            {description && (
              <Text style={styles.modalDesception}>{description}</Text>
            )}
          </View>
          {/* modal buttons */}
          <View style={[styles.modalButton]}>{renderButtonGroup()}</View>
        </View>
      </View>
    </Modal>
  );
};

// 프로퍼티에 대한 PropTypes 정의
// AlertModal.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   buttons: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       action: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   modalVisible: PropTypes.bool.isRequired,
//   setModalVisible: PropTypes.func.isRequired,
// };

export default AlertModal;
