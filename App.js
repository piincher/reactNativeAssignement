import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ItemList from "./src/components/ItemList.component";
import SearchBar from "./src/components/SearchBar.component";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([
    { product: "Milk" },
    { product: "Coffee" },
    { product: "Oranges" },
    { product: "Bread" },
  ]);
  const generateString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    let result = " ";

    const characterLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
  };
  const addItem = () => {
    setItems([...items, { product: generateString(4) }]);
  };

  const filteredItems = items.filter((item) =>
    item.product.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <SearchBar
        onTermChange={setSearchField}
        searchField={searchField}
        addItem={addItem}
      />
      <ItemList data={filteredItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
