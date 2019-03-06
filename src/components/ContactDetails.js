import React from "react";
import { View, Text } from "react-native";
import Link from "./Link";
export default ({ phone, email }) => (
  <View>
    <Text>{phone} </Text>
    <Link href={`mailto:${email}`}>{email}</Link>
  </View>
);
