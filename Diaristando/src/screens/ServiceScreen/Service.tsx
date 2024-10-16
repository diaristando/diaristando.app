import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import defaultCleanAnimation from '@/assets/animations/default-clean.json';
import heavyCleanAnimation from '@/assets/animations/heavy-clean.json';
import ServiceCard from '@/components/CardService';
import { CustomModal } from '@/components/Modal';
import { Separator } from '@/components/Separator';

const ServiceScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Limpeza Padrão',
      animation: defaultCleanAnimation,
      includedItems: [
        'Varrer',
        'Passar pano',
        'Lavar louça',
        'Lavar banheiro',
        'Tirar poeira',
        'Limpar prateleiras',
        'Trocar roupa de cama',
      ],
      extraItems: [
        'Cozinhar',
        'Passar e dobrar roupa(não inclui guardar no armário)',
        'Lavar roupa',
        'Lavar tapete, sapatos',
        'Cuidar das plantas',
        'Arrumar o armário de roupas, mantimentos, cozinha',
        'Limpar parte interna da geladeira',
      ],
      color: '#E5F3FF',
      titleColor: '#1D4ED8',
    },
    {
      title: 'Limpeza Pesada',
      animation: heavyCleanAnimation,
      includedItems: [
        'Lavar cômodos',
        'Limpar vidros',
        'Lavar quintal',
        'Lavar churrasqueira / espaço gourmet',
        '+ Serviços da limpeza padrão',
      ],
      extraItems: [
        'Cozinhar',
        'Passar e dobrar roupa(não inclui guardar no armário)',
        'Lavar tapetes',
        'Cuidar das plantas (aguar)',
        'Arrumar o armário de roupas, mantimentos, cozinha',
        'Limpar parte interna da geladeira',
      ],
      color: '#F0FFF4',
      titleColor: '#1D8348',
    },
  ];

  const handleCardPress = (services) => {
    setSelectedService(services);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços</Text>
      <Text style={styles.subtext}>Entenda os tipos de serviço que você pode realizar</Text>
      <View style={styles.cardsContainer}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            onPress={() => handleCardPress(service)}
            animationSource={service.animation}
          />
        ))}
      </View>

      {selectedService && (
        <CustomModal
          isOpen={isModalVisible}
          onClose={() => setModalVisible(false)}
          title={selectedService.title}
          titleBackgroundColor={selectedService.color}
          titleTextColor="black"
        >
          <Text style={styles.subTitle}>O que está incluso:</Text>
          {selectedService.includedItems.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.listItem,
                item.includes('Serviços da limpeza padrão') ? { fontWeight: 'bold' } : null,
              ]}
            >
              • {item}
            </Text>
          ))}
          <Separator />
          <Text style={styles.subTitle}>Serviços adicionais (cobrados à parte):</Text>
          {selectedService.extraItems.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </CustomModal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  title: {
    paddingTop: 12,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  lottieAnimation: {
    width: 149,
    height: 133,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 7,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ServiceScreen;
