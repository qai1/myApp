import { FlatList, Text, View } from "react-native";

export default function Latihan3() {
  return (
    <View>
      <Text>Latihan 3</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
}

type ProductItemProps = { name: string };

const ProductItem = ({ name }: ProductItemProps) => {
  return (
    <View
      style={{
        margin: 10,
        padding: 15,
        backgroundColor: "blue",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 16, color: "white" }}>{name}</Text>
    </View>
  );
};

const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 3",
  },
  {
    id: 5,
    name: "Product 3",
  },
  {
    id: 6,
    name: "Product 3",
  },
  {
    id: 7,
    name: "Product 3",
  },
  {
    id: 8,
    name: "Product 3",
  },
  {
    id: 9,
    name: "Product 3",
  },
  {
    id: 10,
    name: "Product 3",
  },
  {
    id: 11,
    name: "Product 3",
  },
  {
    id: 12,
    name: "Product 3",
  },
  {
    id: 13,
    name: "Product 3",
  },
];
