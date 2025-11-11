import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image style={{ width: 80, height: 80 }} source={item.image} />
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
          contentContainerStyle={{ gap: 15, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={40} color={"white"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 190, height: 190 }}
        source={require("@/assets/images/emptyIcon.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspiration
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    gap: 5,
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
    paddingTop: 10,
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  emptyTitle: { fontSize: 16, fontWeight: "bold", paddingTop: 15 },
  emptyDesc: {
    fontSize: 16,
    maxWidth: 200,
    textAlign: "center",
    color: "#CBCBCB",
  },
});
