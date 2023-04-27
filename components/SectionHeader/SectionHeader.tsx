import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/theme';

interface SectionHeaderProps {
  header: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({header}) => (
  <View style={styles.view}>
    <Text style={styles.text}>{header}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 16,
    marginBottom: 4,
    marginLeft: 32,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.grey,
  },
});
