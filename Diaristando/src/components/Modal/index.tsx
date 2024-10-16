import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import {
  View,
  Modal as NativeModal,
  TouchableOpacity,
  StyleSheet,
  Text,
  DimensionValue,
} from 'react-native';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
  title?: string;
  titleBackgroundColor?: string;
  titleTextColor?: string;
  closable?: boolean;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  borderWidth?: number;
  borderColor?: string;
}

export function CustomModal({
  children,
  isOpen,
  duration,
  onClose,
  title,
  titleBackgroundColor = 'white',
  titleTextColor = 'black',
  closable = true,
  minHeight = 'auto',
  maxHeight = 'auto',
  borderWidth = 0,
  borderColor = 'transparent',
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
        <View
          style={[{ ...styles.modalContent }, { maxHeight, minHeight, borderWidth, borderColor }]}
        >
          {closable && (
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="#929292" />
            </TouchableOpacity>
          )}
          {title && (
            <View style={[styles.titleContainer, { backgroundColor: titleBackgroundColor }]}>
              <Text style={[styles.titleText, { color: titleTextColor }]}>{title}</Text>
            </View>
          )}
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
    width: '83.3333%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 16,
    zIndex: 99,
  },
  contentContainer: {
    padding: 16,
  },
});
