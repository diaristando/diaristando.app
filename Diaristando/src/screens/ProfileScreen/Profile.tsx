import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';

import ProfilePic from '@/components/ProfilePic';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { useCallback, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
const successEdit = require('../../assets/animations/success.json');
import { CustomModal } from '@/components/Modal';
import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTranslation } from 'react-i18next';

export function Profile() {
  const [editInputs, setEditInputs] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editPickerInputs, setEditPickerInputs] = useState(true);

  const animation = useRef<LottieView>(null);

  const name = useSelector((user: RootState) => user.user.nome);
  const email = useSelector((user: RootState) => user.user.email);
  const { imageUrl } = useSelector((state: RootState) => state.user);

  const { t } = useTranslation();

  function handleEdit() {
    setEditInputs(true);
    setEditPickerInputs(false);
  }

  function resetInputsToRead() {
    setEditInputs(false);
    setEditPickerInputs(true);
  }

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#DBEAFE" />
        <CustomModal
          isOpen={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
          duration={3000}
          closable={false}
          maxHeight="25%"
        >
          <View style={styles.modalContent}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.lottieAnimation}
              source={successEdit}
              loop={false}
            />
            <Text style={styles.successMessage}>{t('edit-complete-informacoes-salvas')}</Text>
          </View>
        </CustomModal>
        <View style={styles.headerContainer}>
          {imageUrl && (
            <ProfilePic
              imageUrl={imageUrl}
              isEditable={false}
              handleUpload={() => {}}
              height={90}
              width={90}
            />
          )}

          <View style={styles.headerContent}>
            <Text style={styles.labelName}>{name}</Text>

            <View style={styles.cardView}>
              <View style={styles.cardViewRating}>
                <FontAwesome name="star" color={'#DBEAFE'} size={20} />
                <Text style={styles.ratingLabel}>4.4</Text>
              </View>
              {editInputs === false && editPickerInputs === true && (
                <Pressable style={styles.editView} onPress={handleEdit}>
                  <Feather name="edit" color={'#DBEAFE'} size={20} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <PersonalInfo
          fullName={name}
          email={email}
          editable={editInputs}
          showEmailAndName={false}
          editPicker={editPickerInputs}
          showButtons={editInputs}
          handleOpenModal={() => setIsModalVisible(true)}
          profile
          handleDisableInputs={resetInputsToRead}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 8,
  },
  lottieAnimation: {
    width: 149,
    height: 133,
  },
  successMessage: {
    fontSize: RFValue(16, 800),
    textAlign: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 15,
    flexDirection: 'row',
    gap: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#939393',
    marginTop: 25,
  },
  headerContent: {
    width: '70%',
    justifyContent: 'space-between',
  },
  labelName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardView: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardViewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172554',
    maxWidth: 95,
    height: 40,
    borderRadius: 10,
    gap: 10,
    flex: 1,
  },
  ratingLabel: {
    color: '#DBEAFE',
    fontSize: 22,
  },
  editView: {
    width: 50,
    height: 40,
    backgroundColor: '#1D4ED8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
