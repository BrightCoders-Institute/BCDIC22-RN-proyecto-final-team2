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
} from "../../styles/CheckoutScreen/Screen_Checkout2";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Checkout2({ navigation }) {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchOrderItems = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        "https://findgure.up.railway.app/api/get_orders/",
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch order items");
      }

      const data = await response.json();
      setOrderItems(data);
    } catch (error) {
      console.error("Error fetching order items:", error);
    }
  };

  useEffect(()=>{
    fetchOrderItems()
  },[])

  useEffect(() => {
    let totalPrice = 0;
    orderItems.forEach(item => {
      totalPrice += item.product_id.price * item.qty;
    });
    setTotalPrice(totalPrice);
  }, [orderItems]);

  return (
    <View style={containers.bgContainer}>
      <Image
        source={require("../../resources/checkoutNavigator2.png")}
        style={titles.image}
      />
      <ScrollView>
        <Text style={titles.maintitle}>Enter your card details:</Text>
        <Formik
          initialValues={{
            cardNumber: "",
            expiration: "",
            cvv: "",
            cardHolder: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.cardNumber) {
              errors.cardNumber = "Required!";
            }
            if (!values.expiration) {
              errors.expiration = "Required!";
            }
            if (!values.cvv) {
              errors.cvv = "Required!";
            }
            if (!values.cardHolder) {
              errors.cardHolder = "Required!";
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
                <View style={stylesCheckout.containerFieldsFirstLast}>
                  <TextInput
                    style={stylesCheckout.input}
                    placeholder="Card number (16 digits)"
                    placeholderTextColor={COLORS.LIGHT_GRAY}
                    onChangeText={handleChange("cardNumber")}
                    onBlur={handleBlur("cardNumber")}
                    value={values.cardNumber}
                  />
                  {touched.cardNumber && errors.cardNumber && (
                    <Text style={stylesCheckout.error}>{errors.cardNumber}</Text>
                  )}
                </View>
                <View style={stylesCheckout.containerFieldsMedium}>
                  <View style={stylesCheckout.containerFieldExpiration}>
                    <TextInput
                      style={stylesCheckout.inputMedium}
                      placeholder={"Expiration\n(mm/yyyy)"}
                      placeholderTextColor={COLORS.LIGHT_GRAY}
                      onChangeText={handleChange("expiration")}
                      onBlur={handleBlur("expiration")}
                      value={values.expiration}
                    />
                    {touched.expiration && errors.expiration && (
                      <Text style={stylesCheckout.error}>{errors.expiration}</Text>
                    )}
                  </View>
                  <View style={stylesCheckout.containerFieldCvv}>
                    <TextInput
                      style={stylesCheckout.inputMedium}
                      placeholder={"CVV\n(XXX)"}
                      placeholderTextColor={COLORS.LIGHT_GRAY}
                      onChangeText={handleChange("cvv")}
                      onBlur={handleBlur("cvv")}
                      value={values.cvv}
                    />
                    {touched.cvv && <errors className="cvv"></errors> && (
                      <Text style={stylesCheckout.error}>{errors.cvv}</Text>
                    )}
                  </View>
                </View>
                <View style={stylesCheckout.containerFieldsFirstLast}>
                  <TextInput
                    style={stylesCheckout.input}
                    placeholder="Card Holder (Full name)"
                    placeholderTextColor={COLORS.LIGHT_GRAY}
                    onChangeText={handleChange("cardHolder")}
                    onBlur={handleBlur("cardHolder")}
                    value={values.cardHolder}
                  />
                  {touched.cardHolder && errors.cardHolder && (
                    <Text style={stylesCheckout.error}>
                      {errors.cardHolder}
                    </Text>
                  )}
                </View>
              </View>
              <View style={stylesCheckout.containerAmount}>
                <View style={stylesCheckout.containerSub}>
                  <View style={stylesCheckout.containerSubtotal}>
                    <Text style={titles.amount}>Subtotal:</Text>
                    <Text style={titles.amount}> {"$" + totalPrice + ".00"}</Text>
                  </View>
                  <View style={stylesCheckout.containerShipping}>
                    <Text style={titles.amount}>Shipping costs:</Text>
                    <Text style={titles.amount}>$0.00</Text>
                  </View>
                </View>
                <View style={stylesCheckout.containerTot}>
                  <View style={stylesCheckout.containerTotal}>
                    <Text style={titles.total}>Total:</Text>
                    <Text style={titles.total}>{"$" + totalPrice + ".00"}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={stylesCheckout.continueButton}
                onPress={() => navigation.navigate("Checkout3")}
                disabled={isSubmitting}
              >
                <Text style={stylesCheckout.textButton}>Place order</Text>
                <MaterialIcons name="navigate-next" size={30} color="black" />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
