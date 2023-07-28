import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeTheme } from '@/helpers/theme/change-theme';
import Container from '@/components/general/container';
import { ProfileCard, CardList } from 'react-native-share';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Content from '@/components/general/content';
import { TextHeader } from '@/components';
import { useTheme } from '@/hooks';
import { Attachments, Notes, Opportunities, Tasks } from '@/helpers/dummy-data';
import { RootState } from '@/store'; // Assuming you have a RootState type in the store

interface MessageProps {
  navigation: any; // Use the appropriate type for 'navigation', e.g., StackNavigationProp from '@react-navigation/stack'
}

const Message: React.FC<MessageProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['heading', 'welcome']);
  const { Colors } = useTheme();
  const isDark = useSelector((state: RootState) => state.theme.darkMode);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#4a91e1',
      },
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <MaterialIcons
            name="arrow-back"
            size={30}
            color="#fff"
            style={styles.icon}
            onPress={() => onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')}
          />
          <Text style={styles.headerText}>Contacts</Text>
        </View>
      ),
      headerRight: () => (
        <MaterialIcons
          name="edit"
          size={24}
          color="#fff"
          style={styles.icon}
          onPress={() => onChangeTheme({ darkMode: !isDark, dispatch })}
        />
      ),
    });
  }, [isDark]);

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <Container>
      <Content>
        <ProfileCard colors={Colors} t={t} />
        <TextHeader title={t('heading:notes')} colors={Colors} />
        <CardList colors={Colors} t={t} data={Notes} />
        <TextHeader title={t('heading:attachments')} colors={Colors} />
        <CardList colors={Colors} t={t} data={Attachments} />
        <TextHeader title={t('heading:opportunity')} colors={Colors} />
        <CardList colors={Colors} t={t} data={Opportunities} />
        <TextHeader title={t('heading:tasks')} colors={Colors} />
        <CardList colors={Colors} t={t} data={Tasks} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Message;
