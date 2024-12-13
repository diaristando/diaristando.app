import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import ClienteNavigator from './cliente/clienteNavigation';
import DiaristaNavigator from './diarista/diaristaNavigation';
import SignedOffNavigator from './visitante/signedOffNavigation';

import { RootState } from '@/store';

const RoutesMapper = (role: string) => {
    switch (role) {
        case 'diarista':
            return DiaristaNavigator();
        case 'cliente':
            return ClienteNavigator();
        default:
            return SignedOffNavigator();
    }
};

export default function AppNavigation() {
    const user = useSelector((state: RootState) => state.user);
    const role = user.isAuthenticated ? 'diarista' : 'diarista'; // TODO: Ajustar com base na role do usuário pós login

    return <>{RoutesMapper(role)}</>;
}
