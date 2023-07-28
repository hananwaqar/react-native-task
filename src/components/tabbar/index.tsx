// import ImageIcon from '@/assets/icons/image.icon';
import { getWordBeforeHyphen } from '@/helpers/strings';
import { useTheme } from '@/hooks';

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
const TabBar = ({ state, descriptors, navigation }: any) => {
  const {
    Colors
  } = useTheme();
  return (
    <View style={[styles.mainContainer,{ backgroundColor: Colors.bottomBarBackground}]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
  
        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <TouchableOpacity onPress={onPress} style={styles.tabbarItem}>
            <MaterialIcons name={getWordBeforeHyphen(route.key)} size={30} color={Colors.bottomBarIcon} style={{marginHorizontal:5}} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
   
    borderRadius: 20,
    paddingBottom: 26,
    paddingHorizontal: 35,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
    
    // paddingBottom: 15,
  },
  tabbarItem: {
    paddingHorizontal: 10,
    flex: 1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: 100,
  },
  label: { color: '#8E8E93', marginTop: 4, fontSize: 10 },
  selectedLabel: { color: '#1B1B1B', marginTop: 4, fontSize: 10 },
});

export default TabBar;
