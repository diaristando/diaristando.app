import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FeedbackInfo } from '@/components/StepFeedback/info/FeedbackInfo';

export function FeedbackService() {
    const { t } = useTranslation();
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>{t('feedback-title')}</Text>
                <View style={styles.onlyRead}>
                    <Text numberOfLines={1} style={styles.onlyReadName}>
                        dsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdk
                    </Text>
                    <Text style={styles.onlyReadAdress}>
                        dsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdkdsajjjjjjjjdajsjdawadaskdk
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FeedbackInfo />
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
    },
    onlyReadAdress: {
        color: '#767373',
        fontSize: 14,
        width: '80%',
    },
});
