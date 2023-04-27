import React from 'react';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/home';
import NotificationsScreen from '../screens/notifications';
import SettingsScreen from '../screens/settings';
import {BlurView} from '@react-native-community/blur';
import useHomeContext from '../hooks/useHomeContext';
import {colors} from '../styles/theme';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const blurredTabStyles = StyleSheet.create({
  tab: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.black,
  },
});

const BlurredTab = (props: BottomTabBarProps) => (
  <BlurView style={blurredTabStyles.tab} blurType="dark" blurAmount={20}>
    <BottomTabBar {...props} />
  </BlurView>
);

const TabBar = () => {
  const homeContext = useHomeContext();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={BlurredTab}
      screenOptions={{
        tabBarActiveTintColor: colors.lightBlue,
        tabBarInactiveTintColor: colors.grey,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopColor: colors.black,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="H"
        component={HomeScreen}
        options={{
          tabBarLabel: 'My Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={NotificationsScreen}
        options={{
          tabBarBadge:
            homeContext.notifications.length > 0
              ? homeContext.notifications.length
              : undefined,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="cogs" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
