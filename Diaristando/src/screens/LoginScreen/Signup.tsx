import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { Index } from '@/components/StepsIndicator/Step';
import { SignedOffRootStackParamList } from '@/navigation/visitante/signedOffNavigation';

type SignupRouterProp = RouteProp<SignedOffRootStackParamList, 'Signup'>;

const renderStep = (
    currentStep: number,
    props: { email: string; fullName: string; isToggled: string; imageUrl: string },
) => {
    switch (currentStep) {
        case 1:
            return (
                <PersonalInfo
                    email={props.email}
                    fullName={props.fullName}
                    isToggled={props.isToggled}
                    imageUrl={props.imageUrl}
                />
            );
        default:
            return null;
    }
};

export function Signup() {
    const route = useRoute<SignupRouterProp>();
    const { email, fullName, isToggled, imageUrl } = route.params || {
        email: '',
        fullName: '',
        isToggled: '',
        imageUrl: '',
    };

    console.log(isToggled);

    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
        >
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.indexContainer}>
                <Index currentStep={1} totalSteps={1} />
            </View>
            {renderStep(1, { email, fullName, isToggled, imageUrl })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 24,
    },
    indexContainer: {
        marginVertical: 16,
    },
});
