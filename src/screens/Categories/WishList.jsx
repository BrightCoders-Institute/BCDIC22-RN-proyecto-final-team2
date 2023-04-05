import { Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { containers } from "../../styles/WishlistScreen/Screen_Wishlist";
import { titles } from "../../styles/WishlistScreen/Screen_Wishlist";
import WishedCard from "../../components/WishedCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading";

export const WishList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const token = "Token " + (await AsyncStorage.getItem("token"));
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    try {
      const response = await fetch(
        "https://findgure.up.railway.app/api/product/favorite",
        config
      );
      const { favorites } = await response.json();
      setList(favorites);
    } catch (error) {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text style={titles.maintitle}> Wishlist </Text>
      {isLoading ? (
        <View style={{height: '100%'}}>
          <Loading />
        </View>
      ) : (
        <FlatList
          style={containers.listWishlist}
          data={list}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={containers.itemSeparator} />
          )}
          renderItem={({ item }) => (
            <WishedCard
              name={item.name}
              rating={item.rating}
              price={item.price}
              image={item.image}
              franchise={item.franchise.name}
            />
          )}
        />
      )}
    </View>
  );
};