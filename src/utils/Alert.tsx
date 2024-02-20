import React, {useState} from 'react';
import AlertModal from '../components/alertModal/AlertModal';

const Alert = ({title, description, buttons}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AlertModal
      title={title}
      description={description}
      buttons={buttons}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Alert;
