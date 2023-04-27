import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const colors = {
  darkBlue: '#16215B',
  lightBlue: '#0373FF',
  grey: '#E0EAF8',
  black: 'black',
  lightBlack: '#1C1C1E',
  red: '#F25929',
  violet: '#A3A9F5',
};

export const generalCardStyle = {
  borderRadius: 8,
  backgroundColor: colors.lightBlack,
  marginLeft: 24,
  marginRight: 24,
  marginTop: 12,
  padding: 16,
};

export const defaultHeaderOptions: NativeStackNavigationOptions = {
  headerBlurEffect: 'dark',
  headerTintColor: colors.grey,
  headerStyle: {
    backgroundColor: 'black',
  },
};
