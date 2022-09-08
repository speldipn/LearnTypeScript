import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  children: React.ReactNode;
}

function Profile({
  name,
  isActive,
  image = 'https://picsum.photos/200',
  children,
}: Props) {
  return (
    <View style={[isActive && styles.activeStyle]}>
      <Image style={styles.image} source={{uri: image}} />
      <Text>{name}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
  image: {
    height: 200,
  },
});

export default Profile;
