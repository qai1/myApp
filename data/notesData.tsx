import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/image-1.png"),
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/image-2.png"),
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/image-3.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/image-4.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 5,
    image: require("@/assets/images/image-4.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 6,
    image: require("@/assets/images/image-4.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 7,
    image: require("@/assets/images/image-4.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
  {
    id: 8,
    image: require("@/assets/images/image-1.png"),
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "29 Oktober 2025",
  },
  {
    id: 9,
    image: require("@/assets/images/image-2.png"),
    title: "Belajar mobile app",
    description: "Membuat aplikasi mobile",
    date: "30 Oktober 2025",
  },
  {
    id: 10,
    image: require("@/assets/images/image-3.png"),
    title: "Belajar Backend",
    description: "Membuat aplikasi mobile",
    date: "2 November 2025",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};
