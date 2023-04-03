import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  containers,
  stylesCheckout,
  titles,
} from "../../styles/CheckoutScreen/Screen_Checkout";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";

export default function Checkout1({ navigation }) {
  return (
    <View style={containers.bgContainer}>
      <Image
        source={require("../../resources/checkoutNavigator.png")}
        style={titles.image}
      />
      <ScrollView>
        <Text style={titles.maintitle}>Enter your address:</Text>
        <Formik
          initialValues={{
            address: "",
            city: "",
            postalcode: "",
            country: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.address) {
              errors.address = "Required!";
            }
            if (!values.city) {
              errors.city = "Required!";
            }
            if (!values.postalcode) {
              errors.postalcode = "Required!";
            }
            if (!values.country) {
              errors.country = "Required!";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <View style={stylesCheckout.containerFields}>
                <TextInput
                  style={stylesCheckout.input}
                  placeholder="Address"
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                />
                {touched.address && errors.address && (
                  <Text style={styles.error}>{errors.address}</Text>
                )}

                <TextInput
                  style={stylesCheckout.input}
                  placeholder="City"
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  value={values.city}
                />
                {touched.city && errors.city && (
                  <Text style={styles.error}>{errors.city}</Text>
                )}

                <TextInput
                  style={stylesCheckout.input}
                  placeholder="Postal Code"
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  onChangeText={handleChange("postalcode")}
                  onBlur={handleBlur("postalcode")}
                  value={values.postalcode}
                />
                {touched.postalcode && errors.postalcode && (
                  <Text style={stylesCheckout.error}>{errors.postalcode}</Text>
                )}

                <TextInput
                  style={stylesCheckout.input}
                  placeholder="Country"
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  onChangeText={handleChange("country")}
                  onBlur={handleBlur("country")}
                  value={values.country}
                />
                {touched.country && errors.country && (
                  <Text style={stylesCheckout.error}>{errors.country}</Text>
                )}
              </View>
              <TouchableOpacity
                style={stylesCheckout.continueButton}
                onPress={() => navigation.navigate("Checkout2")}
                disabled={isSubmitting}
              >
                <Text style={stylesCheckout.textButton}>Continue</Text>
                <MaterialIcons name="navigate-next" size={30} color="black" />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
