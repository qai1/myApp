import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/image-1.png"),
  require("@/assets/images/image-2.png"),
  require("@/assets/images/image-3.png"),
  require("@/assets/images/image-4.png"),
];

export default function AddScreen() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor={"#FF5B13"}
        />

        <TextInput
          style={styles.inputContent}
          placeholder="Note Content"
          selectionColor={"#FF5B13"}
          textAlignVertical="top"
          multiline={true}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image style={styles.image} source={img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={{ textAlign: "center", color: "white" }}>Add</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  inputContent: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#828282ff",
    padding: 15,
    marginBottom: 10,
    height: 100,
  },
  boxImage: {
    height: 100,
    width: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: "#828282ff",
    borderRadius: 4,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageSelected: {
    borderColor: "#FF8851",
    borderWidth: 2,
  },
  addButton: {
    marginTop: "auto",
    height: 48,
    backgroundColor: "#FF5B13",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 15,
  },
});
