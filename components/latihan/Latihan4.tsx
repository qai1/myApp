import { Text, TouchableOpacity, View } from "react-native";
export default function Latihan4() {
  return (
    <View>
      <Text>Latihan 4</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          margin: 20,
          padding: 10,
          alignItems: "center",
        }}
        onPress={() => alert("WOI")}
      >
        <Text style={{ color: "white" }}>Press here</Text>
      </TouchableOpacity>
    </View>
  );
}
