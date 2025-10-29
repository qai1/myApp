import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d2d2d2ff",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Personal Data App
      </Text>

      <View
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text style={{ height: 25 }}>Name</Text>
        <TextInput
          placeholder="Insert Name"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
        />
        <Text style={{ height: 25, marginTop: 10 }}>Age</Text>
        <TextInput
          placeholder="Insert Age"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
        />
        <Text style={{ height: 25, marginTop: 10 }}>Class</Text>
        <TextInput
          placeholder="Insert Class"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
        />
        <Text style={{ height: 25, marginTop: 10 }}>Address</Text>
        <TextInput
          placeholder="Insert Address"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
        />
      </View>

      <Text>Thanks</Text>
    </View>
  );
}
