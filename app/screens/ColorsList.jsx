import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

const Item = ({ item, index, separators }) => {
  const textColor = {
    color:
      parseInt(item.hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };

  return (
    <View style={[styles.item, { backgroundColor: item.hexCode }]}>
      <Text style={[{ fontWeight: "bold" }, textColor]}>
        {item.colorName}: {item.hexCode}
      </Text>
    </View>
  );
};

function ColorsList({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={route.params.colors}
        renderItem={Item}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}> Colors List</Text>
        )}
        initialNumToRender={5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 50,
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  listHeader: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ColorsList;
