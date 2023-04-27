import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useMemo} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {defaultHeaderOptions} from '../../styles/theme';
import useHomeContext from '../../hooks/useHomeContext';
import {ISensor} from '../../types';
import SectionHeader from '../../components/SectionHeader';
import SensorCard from '../../components/SensorCard';
import SensorDetailsScreen from '../sensor';

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  useEffect(() => console.log('Hello App'));
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="My Home"
        component={Home}
        options={defaultHeaderOptions}
      />
      <HomeStack.Screen
        name="Sensor Details"
        component={SensorDetailsScreen}
        options={defaultHeaderOptions}
      />
    </HomeStack.Navigator>
  );
};

const Home = () => {
  const {sensors} = useHomeContext();

  const sections = useMemo(() => {
    let sectionNames: {[key: string]: ISensor[]} = {};
    for (const sensor of sensors) {
      if (sectionNames[sensor.room.name]) {
        sectionNames[sensor.room.name].push(sensor);
      } else {
        sectionNames[sensor.room.name] = [];
        sectionNames[sensor.room.name].push(sensor);
      }
    }

    return Object.keys(sectionNames).map(key => {
      return {
        title: key,
        data: sectionNames[key],
      };
    });
  }, [sensors]);

  return (
    <View style={styles.view}>
      <SectionList
        sections={sections}
        renderItem={item => <SensorCard sensor={item.item} />}
        renderSectionHeader={item => (
          <SectionHeader header={item.section.title} />
        )}
        keyExtractor={(item, index) => `${item.room}–${item.name}-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1,
    paddingBottom: 100,
  },
});

export default HomeScreenStack;
