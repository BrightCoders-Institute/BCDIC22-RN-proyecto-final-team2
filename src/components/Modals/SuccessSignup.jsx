import { Modal, Text, TouchableOpacity, View, Pressable } from "react-native";
import { stylesErrorModal } from "../../styles/Modals/errorModal";

export default function SuccessSignup({
  modalVisibleSuccess,
  hideModalSuccess,
}) {
  return (
    <View style={stylesErrorModal.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSuccess}
      >
        <View style={stylesErrorModal.centeredView}>
          <View style={stylesErrorModal.modalView}>
            <Text style={stylesErrorModal.modalText}>
              You have signed up successfully,{"\n"} you can login now!
            </Text>
            <Pressable
              style={[stylesErrorModal.button, stylesErrorModal.buttonClose]}
              onPress={() => hideModalSuccess()}
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
