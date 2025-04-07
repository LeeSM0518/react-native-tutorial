import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";
import AppNavigator from "@/app/src/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}
