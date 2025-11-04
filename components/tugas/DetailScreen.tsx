import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <ScrollView>
        <Image
          style={{ width: "100%", height: 190 }}
          source={require("@/assets/images/image-1.png")}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Belajar Programming</Text>
          <Text style={styles.date}>Selasa, 13 Mei 2025</Text>
          <Text style={styles.description}>
            Mulailah dengan memahami dasar JavaScript seperti fungsi, array, dan
            async/await. Pelajari konsep component di React dan gunakan
            functional component serta hooks seperti useState dan useEffect.
            Bangun proyek kecil seperti to-do list untuk latihan. Gunakan
            dokumentasi resmi React dan manfaatkan React Developer Tools untuk
            debugging. Terakhir, bergabunglah dengan komunitas agar semangat
            belajar tetap terjaga.
          </Text>
        </View>
      </ScrollView>
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
    textAlign: "justify",
  },
});
