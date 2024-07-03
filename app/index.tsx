import { Text, View, StyleSheet, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddNewPaletteModal from "./screens/AddNewPaletteModal";
import Home from "./screens/Home";
import ColorsList from "./screens/ColorsList";

const RootStack = createStackNavigator();
function Index() {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="ColorsList"
          component={ColorsList}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="AddNewPaletteModal"
          component={AddNewPaletteModal}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Index;
