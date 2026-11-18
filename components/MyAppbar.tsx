import React from 'react';
import { Appbar } from 'react-native-paper';
import type { StackHeaderProps } from '@react-navigation/stack';

const MyAppbar = ({ navigation, back }: StackHeaderProps) => {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      
      <Appbar.Content title="MD Nav Demo" />

      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      ) : null}
    </Appbar.Header>
  );
};

export default MyAppbar;