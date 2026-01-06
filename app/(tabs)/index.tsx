import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';

const ITEMS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Link href={`/details/${item}`} asChild>
            <Pressable style={styles.item}>
              <Text>Go to Item #{item}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
});
