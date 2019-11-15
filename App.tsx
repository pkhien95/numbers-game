import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg from "react-native-svg";
import NumberCircle from "./src/NumberCircle";

export default function App() {

  return (
    <View style={styles.container}>
      <Svg width={'100%'} height={'100%'}>
        <NumberCircle
          cx={200}
          cy={200}
          number={1}
          stroke="purple"
          strokeWidth="2"
          fill="red"
        />
      </Svg>
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
