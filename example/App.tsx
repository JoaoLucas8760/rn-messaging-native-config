import { StyleSheet, Text, View } from 'react-native';

import * as RnMessagingNativeConfig from 'rn-messaging-native-config';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RnMessagingNativeConfig.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
