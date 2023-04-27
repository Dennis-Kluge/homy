import React, {useEffect} from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';
import useHomeContext from '../../hooks/useHomeContext';
import {colors, defaultHeaderOptions} from '../../styles/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationCard from '../../components/NotificationCard';

const NotificationsStack = createNativeStackNavigator();

const ClearButton = () => {
  const {notifications, resetNotification} = useHomeContext();

  if (notifications.length === 0) {
    return null;
  }
  return (
    <Button
      title="Clear"
      color={colors.lightBlue}
      onPress={resetNotification}
    />
  );
};

const NotificationsScreenStack = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerRight: ClearButton,
          ...defaultHeaderOptions,
        }}
      />
    </NotificationsStack.Navigator>
  );
};

const NotificationsScreen = () => {
  const {notifications} = useHomeContext();
  console.log('Notifications');
  console.log(notifications);
  // useEffect(() => resetNotification(), []);

  return (
    <ScrollView style={styles.view}>
      {notifications.map(notification => (
        <NotificationCard key={notification.id} notificaton={notification} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default NotificationsScreenStack;
