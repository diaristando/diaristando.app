import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CircleCheck, CircleX, Ban } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import ServiceBodyRow from '../ServiceBodyRow/ServiceBodyRow';

import { Banknote, History, MapPin, Newspaper } from '@/assets/svgs';
import { Button } from '@/components/Button';
import { CancelModal, ConfirCancelModal } from '@/components/ContentModal/ContentModal';
import { CustomModal } from '@/components/Modal';
import { TabsEnum } from '@/enums/ServiceProfile';
import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

const ServiceCard = ({ tabSelected }: { tabSelected: TabsEnum }) => {
    const [isConfirmCancelModal, setIsConfirmCancelModal] = useState<boolean>(false);
    const [cancelModal, setCancelModal] = useState<boolean>(false);

    const { navigate } = useNavigation<PersonalInfoNavigationProp>();

    const cardStyles = {
        [TabsEnum.SCHEDULED]: {
            headerColor: '#60A5FA',
            textColor: '#031140',
            bodyColor: '#F9FAFB',
            Icon: () => <History />,
        },
        [TabsEnum.ACCOMPLISHED]: {
            headerColor: '#2E7D324D',
            textColor: '#5A7D60',
            bodyColor: '#E5E5EA',
            Icon: () => <CircleCheck size={24} color="#5A7D60" />,
        },
        [TabsEnum.CANCELLED]: {
            headerColor: '#D32F2F4D',
            textColor: '#A75559',
            bodyColor: '#D32F2F0D',
            Icon: () => <CircleX size={24} color="#A75559" />,
        },
        [TabsEnum.NOT_REALIZED]: {
            headerColor: '#633B4829',
            textColor: '#7E707E',
            bodyColor: '#633B4814',
            Icon: () => <Ban size={24} color="#7E707E" />,
        },
    };

    const defaultStyle = cardStyles[TabsEnum.SCHEDULED];
    const currentStyle = cardStyles[tabSelected] || defaultStyle;

    function confirmRemove() {
        setIsConfirmCancelModal(true);
    }

    function confirmModalRemove() {
        setIsConfirmCancelModal(false);
        setCancelModal(true);
    }

    function removeItem() {
        setCancelModal(false);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: currentStyle.headerColor }]}>
                <Text style={[styles.headerTitle, { color: currentStyle.textColor }]}>
                    Apartamento • Limpeza Padrão
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
                    <currentStyle.Icon />
                    <Text style={[styles.headerSubTitle, { color: currentStyle.textColor }]}>
                        10 Nov 2024, 10:30
                    </Text>
                </View>
            </View>

            <View style={[styles.body, { backgroundColor: currentStyle.bodyColor }]}>
                <Text style={styles.bodyTitle} numberOfLines={1}>
                    Alexandra Beatriz da Silva Campos da Silva
                </Text>
                <ServiceBodyRow
                    Icon={MapPin}
                    title="Local:"
                    value="Rua dos bobos, 123, casa 3, Valqueire, Rio de Janeiro, RJ"
                    isScheduledTab={tabSelected === TabsEnum.SCHEDULED}
                />
                <ServiceBodyRow
                    Icon={Banknote}
                    title="Pagamento: "
                    value="R$ 150,00"
                    isScheduledTab={tabSelected === TabsEnum.SCHEDULED}
                />
                <ServiceBodyRow
                    Icon={Newspaper}
                    title="Observações:"
                    value="Sem Observações"
                    isScheduledTab={tabSelected === TabsEnum.SCHEDULED}
                />
            </View>

            {tabSelected === TabsEnum.SCHEDULED && (
                <View style={[styles.footer, { backgroundColor: currentStyle.bodyColor }]}>
                    <Button text="Cancelar" destructive onPress={confirmRemove} />
                    <Button text="Editar" onPress={() => navigate('Feedback', { update: true })} />
                </View>
            )}
            <CustomModal isOpen={isConfirmCancelModal} onClose={() => {}} closable={false}>
                <ConfirCancelModal
                    confirm={confirmModalRemove}
                    pressable={() => setIsConfirmCancelModal(false)}
                />
            </CustomModal>
            <CustomModal isOpen={cancelModal} onClose={() => {}} closable={false}>
                <CancelModal confirm={removeItem} pressable={() => {}} />
            </CustomModal>
        </View>
    );
};

export default ServiceCard;
