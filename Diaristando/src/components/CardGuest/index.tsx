import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import blockNavigation from '@/assets/animations/block-navigation.json';
import { CustomModal } from '@/components/Modal';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';

interface LoginPromptModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  targetRoute: string;
}

export function LoginPromptModal({
  isVisible,
  onRequestClose,
  targetRoute,
}: LoginPromptModalProps) {
  const navigation = useNavigation();

  return (
    <CustomModal
      isOpen={isVisible}
      onClose={onRequestClose}
      titleBackgroundColor="#FFFFFF"
      titleTextColor="#1D4ED8"
      closable
    >
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#DBEAFE" />
      <LottieView
        source={blockNavigation}
        autoPlay
        loop
        style={{ width: 114, height: 84, marginBottom: 8, alignSelf: 'center' }}
      />
      <Text style={styles.messageText}>Seu mundo Diaristando começa aqui!</Text>
      <TouchableOpacity
        onPress={() => {
          onRequestClose();
          navigation.navigate(targetRoute); // Use o targetRoute passado como prop
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Entre ou Cadastre-se</Text>
      </TouchableOpacity>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  messageText: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    color: '#172554',
  },
  loginButton: {
    padding: 10,
    backgroundColor: '#1D4ED8',
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
