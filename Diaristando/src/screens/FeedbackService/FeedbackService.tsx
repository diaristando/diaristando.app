import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

export function FeedbackService() {
    const navigation = useNavigation<PersonalInfoNavigationProp>();
    return (
        <View>
            <Text>Feedback</Text>
        </View>
    );
}
