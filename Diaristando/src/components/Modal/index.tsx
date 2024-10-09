import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Modal as NativeModal, TouchableOpacity, StyleSheet } from 'react-native';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
}

export function CustomModal({ children, isOpen, duration, onClose }: ModalProps) {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && duration) {
      timer = setTimeout(onClose, duration);
    }
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  return (
    <NativeModal
      animationType="fade"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          {!duration && (
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="#929292" />
            </TouchableOpacity>
          )}
          {children}
        </View>
      </View>
    </NativeModal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000004d',
  },
  modalContent: {
    width: '83.3333%',
    height: '25%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 16,
  },
});
