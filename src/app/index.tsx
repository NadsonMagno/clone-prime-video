import { View, Text } from "react-native";

import React from "react";

import Home from "../screens/home/Home";
import { styles } from "./styles";

export default function App() {

  return (
  
    <View style = {styles.container}>
        <Home/>
    </View>
    );

}

