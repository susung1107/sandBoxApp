import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    paddingTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 5,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonClose: {
    padding: 5,
  },
  textStyle: {
    color: '#007DCC',
    fontSize: 14,
    marginBottom: 5,
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: -0.7,
    color: '#333',
  },
  modalDesception: {
    marginBottom: 15,
    fontSize: 14,
    letterSpacing: -0.7,
    color: '#666',
  },
});
