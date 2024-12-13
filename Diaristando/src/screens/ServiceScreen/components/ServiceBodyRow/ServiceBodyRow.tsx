import React from 'react';
import { LucideIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { styles } from './styles';

type TServiceBodyRow = {
    Icon: LucideIcon;
    title: string;
    value: string;
    isScheduledTab: boolean;
};

const ServiceBodyRow = ({ Icon, title, value, isScheduledTab }: TServiceBodyRow) => {
    const iconColor = isScheduledTab ? '#1D2024' : '#767373';
    const titleStyle = {
        fontWeight: isScheduledTab ? ('400' as '400') : ('700' as '700'), // Casting necessário
        color: iconColor,
    };
    const valueStyle = {
        color: isScheduledTab ? '#1D4ED8' : '#767373',
    };

    return (
        <View style={styles.container}>
            <Icon size={20} color={iconColor} style={{ marginRight: 5 }} />
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.value, valueStyle]}>{value}</Text>
        </View>
    );
};

export default ServiceBodyRow;
