import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const successEdit = require('../../assets/animations/success.json');

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

export function EditCompleted() {
  const animation = useRef<LottieView>(null);
  const { t } = useTranslation();
  const { navigate } = useNavigation<PersonalInfoNavigationProp>();

  function handleCompleted() {
    navigate('DiaristaTab', { screen: 'Profile' });
  }

  return (
    <>
      <Pressable style={styles.closeView} onPress={handleCompleted}>
        <MaterialCommunityIcons name="close" size={25} color={'#000'} />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>{t('edit-complete-informacoes-salvas')}</Text>
        <LottieView
          autoPlay
          ref={animation}
          style={styles.lottieAnimation}
          source={successEdit}
          loop={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 24,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },

  lottieAnimation: {
    width: 149,
    height: 133,
  },
});
