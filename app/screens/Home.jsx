import { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const Home = ({ navigation, route }) => {
  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColors = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    );
    const palettes = await result.json();
    if (palettes) {
      setColors(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColors();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      fetchColors();
    }, 1000);

    return () => clearTimeout(refreshTimer);
  }, []);

  const newPalette = route.params ? route.params.newPalette : null;
  useEffect(() => {
    if (newPalette) {
      setColors((colors) => [newPalette, ...colors]);
    }
  }, [newPalette]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={"black"} />
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.paletteName}
        ListHeaderComponent={
          <TouchableOpacity>
            <Text
              style={styles.addColorBtn}
              onPress={() => navigation.push("AddNewPaletteModal")}
            >
              Add New Color +
            </Text>
          </TouchableOpacity>
        }
        renderItem={({ item }) => (
          <PalettePreview list={item} navigation={navigation} />
        )}
        ListEmptyComponent={<Text>Loading...</Text>}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </>
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
  addColorBtn: {
    fontSize: 20,
    color: "teal",
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 16,
  },
});
export default Home;
