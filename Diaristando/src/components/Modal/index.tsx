import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Modal as NativeModal, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
  title: string;
  titleBackgroundColor: string;
  titleTextColor: string;
}

export function CustomModal({
  children,
  isOpen,
  duration,
  onClose,
  title,
  titleBackgroundColor,
  titleTextColor,
}: ModalProps) {
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
          <View style={[styles.titleContainer, { backgroundColor: titleBackgroundColor }]}>
            <Text style={[styles.titleText, { color: titleTextColor }]}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="#929292" />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>{children}</View>
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
    width: '90%',
    padding: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 2,
  },
  titleContainer: {
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginLeft: 10,
  },
  contentContainer: {
    padding: 16,
  },
});
