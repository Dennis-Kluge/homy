import {StyleSheet} from 'react-native';
import {colors, generalCardStyle} from '../../styles/theme';

const style = StyleSheet.create({
  view: generalCardStyle,
  headline: {},
  message: {
    color: colors.grey,
    fontSize: 16,
  },
});

export default style;
