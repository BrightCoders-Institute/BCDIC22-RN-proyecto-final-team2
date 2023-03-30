import React from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import ProductDetailCard from "../components/ProductDetailCard";
import { productDetailCard as style } from "../styles/ProductDetail/ProductDetailCard";

export default function ProductDetail({ route }) {
  const { id } = route.params;
  return (
    <SafeAreaView style={style.containerStyle}>
      <ScrollView horizontal={false}>
        <ProductDetailCard id={id} />
      </ScrollView>
    </SafeAreaView>
  );
}
