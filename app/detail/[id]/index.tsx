import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const note = notes.find((note) => note.id === Number(id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView>
        <Image style={{ width: "100%", height: 190 }} source={note?.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{note?.title}</Text>
          <Text style={styles.date}>{note?.date}</Text>
          <Text style={styles.description}>{note?.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.cardButton}>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => router.push(`/update/${note?.id}`)}
        >
          <Text style={styles.textButton}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
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
  content: {
    padding: 15,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    color: "#828282ff",
    textAlign: "justify",
  },
  cardButton: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
    textAlign: "center",
  },
  updateButton: {
    width: 170,
    height: 48,
    backgroundColor: "#FF5B13",
    justifyContent: "center",
    borderRadius: 10,
  },
  deleteButton: {
    width: 170,
    height: 48,
    backgroundColor: "#FF3530",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
