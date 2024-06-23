import {
  Button,
  Text,
  View,
  StyleSheet,
  SectionList,
  FlatList,
  TouchableOpacity,
} from "react-native";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
];

const RAINBOW = [
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];
const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];

const colors = [
  { title: "Solarized", data: COLORS },
  { title: "Rainbow", data: RAINBOW },
  { title: "Frontend Masters", data: FRONTEND_MASTERS },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {colors.map((list) => (
        <View key={list.title}>
          <Text style={styles.sectionTitle}>{list.title}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.push("ColorsList", {
                paletteName: list.title,
                colors: list.data,
              })
            }
          >
            <FlatList
              data={list.data}
              keyExtractor={(item) => item.hexCode}
              renderItem={({ item }) => (
                <View
                  style={[styles.colorItem, { backgroundColor: item.hexCode }]}
                ></View>
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionTitle}>{section.title}</Text>
              )}
              horizontal
            />
          </TouchableOpacity>
        </View>
      ))}

      {/* <Button
        onPress={() => navigation.push("ColorsList")}
        color={"gray"}
        title="go to color list"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  colorItem: {
    height: 50,
    width: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
export default Home;
