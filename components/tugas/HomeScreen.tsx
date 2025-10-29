import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notes = [
  {
    id: 1,
    image: "@/assets/images/kodeinNotesLogo.png",
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: "@/assets/images/kodeinNotesLogo.png",
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: "@/assets/images/kodeinNotesLogo.png",
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 4,
    image: "@/assets/images/kodeinNotesLogo.png",
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 5,
    image: "@/assets/images/kodeinNotesLogo.png",
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
];

type Note = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/images/kodeinNotesLogo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/kodeinNotesLogo.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.kodeinText}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={40} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    backgroundColor: "white",
  },
  kodeinText: {
    fontSize: 20,
    fontWeight: 700,
  },
  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },
  content: {
    flex: 1,
    paddingTop: 30,
    gap: 10,
  },
  fab: {
    position: "absolute",
    bottom: 45,
    right: 15,
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    gap: 20,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E5E7EB",
  },
  cardContainer: { gap: 5, flex: 1, padding: 5 },
  cardTitle: { fontWeight: 500, fontSize: 16 },
  cardDesc: { fontWeight: 500, fontSize: 14, color: "#656565ff" },
  cardDate: {
    fontWeight: 500,
    fontSize: 10,
    color: "#bbbbbbff",
    marginTop: 10,
  },
});
