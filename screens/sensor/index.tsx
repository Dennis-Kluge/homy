import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/theme';
import {useRoute} from '@react-navigation/native';

const SensorDetailsScreen: React.FC = () => {
  const route = useRoute();
  console.log(route.params);
  const params = route.params;

  return (
    <View style={styles.view}>
      <Image
        source={{uri: `https://picsum.photos/${windowWidth}/200?grayscale`}}
        style={styles.image}
      />
      <View style={styles.detailsView}>
        <Text style={styles.nameText}>
          {params?.sensor?.room.name + ' '}
          {params?.sensor?.name}
        </Text>
        <Text style={styles.valueText}>
          {params?.sensor?.value}
          {params?.sensor?.unit}
        </Text>

        <Text style={styles.descriptionText}>
          {params?.sensor?.description}
        </Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.black,
  },
  detailsView: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  nameText: {
    marginTop: 16,
    color: colors.grey,
    fontSize: 32,
    fontWeight: 'bold',
  },
  valueText: {
    marginTop: 16,
    color: colors.red,
    fontSize: 28,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 16,
    color: colors.grey,
    fontSize: 18,
    fontWeight: '400',
  },
  image: {width: windowWidth, height: 200, resizeMode: 'contain'},
});

export default SensorDetailsScreen;
