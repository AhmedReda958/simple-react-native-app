import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ColorsList from "./screens/ColorsList";

function Index() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ColorsList"
        component={ColorsList}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Index;
