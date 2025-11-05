import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor={"#FF5B13"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: "row",
    padding: 10,
    height: 56,
    alignItems: "center",
    gap: 8,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    padding: 15,
  },
  inputTitle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#828282ff",
    padding: 15,
  },
});
