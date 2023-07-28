import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
  NavigationContainer,
  RouteProp,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from '@/navigation/main-navigator';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import Route from '@/navigation/route';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/tabbar'
import Message from '@/screens/message'

export type MainNavigatorParams = {
  [Route.MAIN_STACK_SCREEN]: undefined;
};
const Stack = createStackNavigator<MainNavigatorParams>();

export interface MainTabbarProps {
  navigation: StackNavigationProp<MainNavigatorParams, Route.MAIN_STACK_SCREEN>;
  route: RouteProp<MainNavigatorParams, Route.MAIN_STACK_SCREEN>;
}
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Route.MAIN_STACK_SCREEN} component={ADBMainTabbarNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const Tab = createBottomTabNavigator();

const ADBMainTabbarNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen key={Route.MESSAGE_TAB} name={Route.MESSAGE_TAB} component={Message} />
      <Tab.Screen key={Route.LOCATION_TAB} name={Route.LOCATION_TAB} component={Message} />
      <Tab.Screen  key={Route.BOOKMARK_TAB} name={Route.BOOKMARK_TAB} component={Message} />
      <Tab.Screen key={Route.CALL_TAB} name={Route.CALL_TAB} component={Message} />
      <Tab.Screen key={Route.SETTING_TAB} name={Route.SETTING_TAB} component={Message} />
    </Tab.Navigator>
  );
};
export default ApplicationNavigator;
