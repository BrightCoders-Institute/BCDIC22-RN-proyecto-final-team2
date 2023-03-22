import React from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import ProductDetailCard from "../components/ProductDetailCard";
import { productDetailCard as style } from "../styles/ProductDetail/ProductDetailCard";

export default function ProductDetail() {
  return (
    <SafeAreaView style={style.containerStyle}>
      <ScrollView>
        <ProductDetailCard />
      </ScrollView>
    </SafeAreaView>
  );
}