import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { View, Modal as NativeModal, TouchableOpacity } from 'react-native';

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
      <View className="items-center justify-center flex-1 bg-[#0000004d]">
        <View className="flex items-center justify-center w-5/6 p-4 bg-white h-1/4 rounded-2xl">
          {!duration && (
            <TouchableOpacity onPress={onClose} className="absolute right-5 top-4">
              <MaterialIcons name="close" size={24} color="#929292" />
            </TouchableOpacity>
          )}
          {children}
        </View>
      </View>
    </NativeModal>
  );
}
