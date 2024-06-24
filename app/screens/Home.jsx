import { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const PalettePreview = ({ list, navigation }) => (
  <View key={list.title}>
    <Text style={styles.sectionTitle}>{list.paletteName}</Text>

    <TouchableOpacity
      onPress={() =>
        navigation.push("ColorsList", {
          paletteName: list.paletteName,
          colors: list.colors,
        })
      }
    >
      <FlatList
        data={list.colors}
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
);

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const fetchColors = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    );
    const palettes = await result.json();
    if (palettes) {
      setColors(palettes);
    }
  }, []);

  useEffect(() => fetchColors(), []);

  return (
    <FlatList
      style={styles.container}
      data={colors}
      renderItem={({ item }) => (
        <PalettePreview list={item} navigation={navigation} />
      )}
      ListEmptyComponent={<Text>Loading...</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
