import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

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

function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={COLORS}
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

export default Index;
