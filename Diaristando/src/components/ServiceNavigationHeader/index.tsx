import { Bell } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const ServiceNavigationHeader = ({
    callBackChangeTab,
}: {
    callBackChangeTab: (newTab: number) => void;
}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['Agendados', 'Realizados', 'Cancelado', 'Não Realizados'];

    const changeSelectedTab = (newTab: number) => {
        setSelectedTab(newTab);
        callBackChangeTab(newTab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeaderLine}>
                <View style={styles.headerLine}>
                    <Text style={styles.headerTitle}>Serviços</Text>

                    <TouchableOpacity activeOpacity={0.6}>
                        <Bell size={20} color="#172554" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {tabs.map((tab, index) => {
                    if (selectedTab === index)
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.tabContainer}
                                activeOpacity={0.7}
                                onPress={() => changeSelectedTab(index)}
                            >
                                <Text style={styles.tabTextSelected}>{tab}</Text>
                                <View style={styles.bottomSelectorTab} />
                            </TouchableOpacity>
                        );
                    else
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.tabContainer}
                                activeOpacity={0.7}
                                onPress={() => changeSelectedTab(index)}
                            >
                                <Text style={styles.tabText}>{tab}</Text>
                            </TouchableOpacity>
                        );
                })}
            </ScrollView>
        </View>
    );
};

export default ServiceNavigationHeader;
