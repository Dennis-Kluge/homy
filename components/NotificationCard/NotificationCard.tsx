import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {INotification} from '../../types';
import styles from './NotificationCard.styles';
import {colors} from '../../styles/theme';

interface NotificationCardProps {
  notificaton: INotification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notificaton,
}) => {
  return (
    <Pressable>
      <View style={styles.view}>
        <Text
          style={
            notificaton.severity === 'HIGH'
              ? StyleSheet.compose(styles.message, {color: colors.red})
              : styles.message
          }>
          {notificaton.message}
        </Text>
      </View>
    </Pressable>
  );
};
