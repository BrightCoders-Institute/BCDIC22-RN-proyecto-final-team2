import { Modal, Text, TouchableOpacity, View, Pressable } from "react-native";
import { stylesErrorModal } from "../../styles/Modals/errorModal";

export default function ErrorModalLogin({ modalVisible, hideModal }) {
  return (
    <View style={stylesErrorModal.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={stylesErrorModal.centeredView}>
          <View style={stylesErrorModal.modalView}>
            <Text style={stylesErrorModal.modalText}>
              Invalid credentials, try again!
            </Text>
            <Pressable
              style={[stylesErrorModal.button, stylesErrorModal.buttonClose]}
              onPress={() => hideModal()}
            >
              <Text style={stylesErrorModal.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[stylesErrorModal.button, stylesErrorModal.buttonOpen]}>
        <Text style={stylesErrorModal.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}
