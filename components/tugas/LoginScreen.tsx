import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0ff",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Login
      </Text>
      <View
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
          borderColor: "#d2d2d2ff",
        }}
      >
        <Text style={{ height: 25, marginVertical: 10 }}>Email</Text>
        <TextInput
          placeholder="Insert Email"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            borderColor: "#d2d2d2ff",
            backgroundColor: "#e9e9e9ff",
          }}
        />
        <Text style={{ height: 25, marginVertical: 10 }}>Password</Text>
        <TextInput
          placeholder="Insert Password"
          style={{
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 20,
            borderColor: "#d2d2d2ff",
            backgroundColor: "#e9e9e9ff",
          }}
        />
        <Button title="Login" />
      </View>
    </View>
  );
}
