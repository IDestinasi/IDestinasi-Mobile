import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

const LoadingScreen  = () =>  {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00C0CA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoadingScreen;
