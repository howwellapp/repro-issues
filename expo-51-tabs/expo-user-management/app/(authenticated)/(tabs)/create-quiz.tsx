import { Button, View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Tab() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Create Quiz</Text>
      <Button title="Save" onPress={() => router.push({
        pathname: 'share-quiz',
      })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
