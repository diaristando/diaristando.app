import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FeedbackInfo } from '@/components/StepFeedback/info/FeedbackInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { CustomModal } from '@/components/Modal';
import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const successEdit = require('../../assets/animations/success.json');

export function FeedbackService() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const { t } = useTranslation();
    const { nome } = useSelector((state: RootState) => state.user);

    const { goBack } = useNavigation();

    const animation = useRef<LottieView>(null);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#DBEAFE" />
            <CustomModal
                isOpen={isModalVisible}
                onClose={() => {
                    setIsModalVisible(false);
                    goBack();
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
                    <Text style={styles.successMessage}>{t('feedback-complete')}</Text>
                </View>
            </CustomModal>
            <View style={styles.container}>
                <Text style={styles.title}>{t('feedback-title')}</Text>
                <View style={styles.onlyRead}>
                    <Text numberOfLines={1} style={styles.onlyReadName}>
                        {nome}
                    </Text>
                    <Text style={styles.onlyReadAdress}>
                        Rua dos bobos, 123, casa 3, Valqueire, Rio de Janeiro, RJ
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FeedbackInfo handleOpenModal={() => setIsModalVisible(true)} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    onlyRead: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#767373',
        borderRadius: 6,
        marginVertical: 20,
        padding: 6,
    },
    onlyReadName: {
        fontSize: 16,
        color: '#767373',
        fontWeight: 'bold',
        marginBottom: 5,
        width: '90%',
    },
    onlyReadAdress: {
        color: '#767373',
        fontSize: 14,
        width: '80%',
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
});
