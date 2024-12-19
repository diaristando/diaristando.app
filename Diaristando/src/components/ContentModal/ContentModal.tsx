import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ButtonPressableOpacity } from '../ButtonPressableOpacity/ButtonPressableOpacity';

import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';
import { RootState } from '@/store';

type Props = {
    pressable: () => void;
};

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

export function ContentModal({ pressable }: Props) {
    const { navigate } = useNavigation<PersonalInfoNavigationProp>();
    const { nome } = useSelector((state: RootState) => state.user);

    function navigateToFeedback() {
        pressable();
        navigate('Feedback');
    }

    function navigateToHome() {
        pressable();
        navigate('DiaristaTab', { screen: 'Home' });
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                padding: 20,
            }}
        >
            <Text style={{ fontSize: 18, color: '#000', textAlign: 'center' }}>
                {`O agendamento com o ${nome} foi finalizado?`}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    gap: 10,
                }}
            >
                <ButtonPressableOpacity text="Não" onPress={navigateToHome} reverse width={120} />
                <ButtonPressableOpacity
                    width={120}
                    reverse
                    text="Sim"
                    onPress={navigateToFeedback}
                />
            </View>
        </View>
    );
}
