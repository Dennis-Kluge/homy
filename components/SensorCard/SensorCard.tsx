import React from 'react';
import {ISensor} from '../../types';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {colors, generalCardStyle} from '../../styles/theme';
import {StackActions, useNavigation} from '@react-navigation/native';

interface SensorCardProps {
  sensor: ISensor;
}

export const SensorCard: React.FC<SensorCardProps> = ({sensor}) => {
  const navigation = useNavigation();
  const presentDetails = () => {
    const pushAction = StackActions.push('Sensor Details', {sensor});
    navigation.dispatch(pushAction);
  };

  return (
    <Pressable onPress={presentDetails}>
      <View style={viewStyle}>
        <Text style={styles.name}>{sensor.name}</Text>
        <View style={styles.valueView}>
          <Text style={styles.valueText}>{sensor.value}</Text>
          <Text style={styles.unitText}>{sensor.unit}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const viewStyle = StyleSheet.compose(generalCardStyle, {
  flex: 1,
  flexDirection: 'column',
});

const styles = StyleSheet.create({
  name: {
    color: colors.violet,
    textTransform: 'uppercase',
    fontSize: 12,
  },
  valueView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
  },
  valueText: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 24,
  },
  unitText: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
