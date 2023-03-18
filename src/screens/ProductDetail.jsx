import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import ProductDetailCard from "../components/ProductDetailCard";
import { COLORS } from "../styles/colors";
import Reviews from "../components/DetailScreen/Reviews";
import { productDetailStyle } from "../styles/ProductDetail/ProductDetailStyle";
import { Feather } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
export default function ProductDetail() {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.PURPLE, height: "100%" }}>
      <ProductDetailCard />
      <Collapse isExpanded={isActive} onToggle={() => setIsActive(!isActive)}>
        <CollapseHeader style={productDetailStyle.collapseHeader}>
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              marginLeft: 20,
            }}
          >
            Reviews
          </Text>
          <Feather
            name={isActive ? "chevron-up" : "chevron-down"}
            size={24}
            // color={COLORS.DARK_PURPLE}
            style={{ marginRight: 20, color: "white" }}
          />
        </CollapseHeader>
        <CollapseBody>
          <Reviews />
        </CollapseBody>
      </Collapse>
    </SafeAreaView>
  );
}
