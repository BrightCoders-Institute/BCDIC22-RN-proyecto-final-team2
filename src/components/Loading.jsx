import React from "react";
import { ActivityIndicator } from "react-native";
import { loadingStyles } from "../styles/Loading/loadingStyle";
import { View, Text } from "react-native";
export default function Loading() {
  return (
    <View style={[loadingStyles.container, loadingStyles.horizontal]}>
      <ActivityIndicator size="large" color="white" />
      <Text style={loadingStyles.loadingText}>Loading...</Text>
    </View>
  );
}
