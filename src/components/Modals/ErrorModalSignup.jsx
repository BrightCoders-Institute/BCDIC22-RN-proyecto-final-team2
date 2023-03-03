import { useState, useEffect } from "react";
import { Modal, Text, TouchableOpacity, View, Pressable } from "react-native";
import { stylesErrorModal } from "../../styles/Modals/errorModal";

export default function ErrorModalSignup({
  modalVisible,
  hideModalSignup,
  data,
}) {
  return (
    <View style={stylesErrorModal.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={stylesErrorModal.centeredView}>
          <View style={stylesErrorModal.modalView}>
            <View
              style={{
                marginBottom: 25,
                width: "100%",
                alignItems: "center",
              }}
            >
              {/* Username */}
              {data.username && (
                <View style={{ flexDirection: "row" }}>
                  <Text>Username: </Text>
                  <Text style={{ color: "red" }}>
                    {data.username ?? data.username}
                  </Text>
                </View>
              )}

              {/* Email */}
              {data.email && (
                <View style={{ flexDirection: "row" }}>
                  <Text>Email: </Text>
                  <Text style={{ color: "red" }}>{data.email}</Text>
                </View>
              )}

              {/* Password */}
              {data.password && (
                <View style={{ flexDirection: "row" }}>
                  <Text>Password: </Text>
                  <Text style={{ color: "red" }}>{data.password}</Text>
                </View>
              )}
            </View>

            <Pressable
              style={[stylesErrorModal.button, stylesErrorModal.buttonClose]}
              onPress={() => hideModalSignup()}
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
