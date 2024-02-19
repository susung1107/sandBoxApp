// Alert.ts
import React, {useState} from 'react';
import AlertModal from '../components/alertModal/AlertModal';

let modalVisibilitySetter: (modalVisible: boolean) => void;

const Alert = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertData, setAlertData] = useState<{
    title: string;
    description?: string;
    buttons: {text: string; action: () => void}[];
  }>({
    title: '',
    description: '',
    buttons: [],
  });

  const showAlert = (
    title: string,
    description?: string,
    buttons?: {text: string; action: () => void}[],
  ) => {
    setAlertData({
      title,
      description,
      buttons: buttons || [{text: '확인', action: handleModalButtonPress}],
    });
    setModalVisible(true);
  };

  const handleModalButtonPress = () => {
    setModalVisible(false);
  };

  modalVisibilitySetter = setModalVisible;

  return (
    <AlertModal
      title={alertData.title}
      description={alertData.description}
      buttons={alertData.buttons}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

// Typeof로 AlertModal 타입 가져오기
type AlertModalProps = React.ComponentProps<typeof AlertModal>;

export const alert = (
  title: string,
  description?: string,
  buttons?: {text: string; action: () => void}[],
) => {
  if (modalVisibilitySetter) {
    modalVisibilitySetter(true);
  }
  return <Alert />;
};
