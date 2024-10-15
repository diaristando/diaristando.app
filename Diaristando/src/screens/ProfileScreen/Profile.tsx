import { useUser } from '@clerk/clerk-expo';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '@/components/Button';
import Map from '@/components/Map';
import { CustomModal } from '@/components/Modal';
import ProfilePic from '@/components/ProfilePic';
import { Separator } from '@/components/Separator';
import { RootState } from '@/store';

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const { user: googleUser } = useUser();

  const [confirmModal, setConfirmModal] = useState(true);

  if (!user) {
    return <Text>Carregando...</Text>;
  }

  const markers = [{ latitude: -22.9121, longitude: -43.2302 }];

  return (
    <View style={styles.container}>
      <CustomModal
        isOpen={confirmModal}
        onClose={() => {
          setConfirmModal(false);
        }}
      >
        <View
          style={{ justifyContent: 'center', alignItems: 'center', gap: 12, paddingHorizontal: 36 }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}>
            Ótimo! Você estará em contato com clientes que buscam seus serviços
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 14 }}>
            Clique em 'Continuar' para ser direcionada ao WhatsApp.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Button text="Cancelar" onPress={() => setConfirmModal(false)} reverse />
            <Button text="Continuar" onPress={() => setConfirmModal(false)} />
          </View>
        </View>
      </CustomModal>

      <View style={styles.header}>
        <View style={styles.profilePicContainer}>
          <ProfilePic
            imageUrl={googleUser?.imageUrl || 'default-image-url'}
            isEditable={false}
            handleUpload={() => console.log('Foto carregada')}
            height={63}
            width={63}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.nome}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>★★★★☆</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('@/assets/icons/user.png')} style={styles.profile} />
              <Text style={styles.genero}>
                {user.genero.charAt(0).toUpperCase() + user.genero.slice(1).toLowerCase()}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.tags}>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}>Apartamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}>Limpeza Padrão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}>Semanal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addressInfo}>
        <Separator color="#00000033" height={1} />
        <Text style={styles.address}>Rua dos bobos, 123, casa 3, Valqueire, Rio de Janeiro</Text>
        <View style={styles.propertyInfo}>
          <View style={styles.propertyItem}>
            <Image source={require('@/assets/icons/bed.png')} style={styles.icon} />
            <Text style={styles.propertyText}>4 quartos</Text>
          </View>
          <View style={styles.propertyItem}>
            <Image source={require('@/assets/icons/size.png')} style={styles.icon} />
            <Text style={styles.propertyText}>600 m²</Text>
          </View>
          <View style={styles.propertyItem}>
            <Image source={require('@/assets/icons/outdoor-garden.png')} style={styles.icon} />
            <Text style={styles.propertyText}>2 Varandas</Text>
          </View>
          <View style={styles.propertyItem}>
            <Image source={require('@/assets/icons/bathroom.png')} style={styles.icon} />
            <Text style={styles.propertyText}>6 Banheiros</Text>
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <Map markers={markers} />
      </View>

      <TouchableOpacity style={styles.whatsappButton} onPress={() => setConfirmModal(true)}>
        <Text style={styles.whatsappButtonText}>Contato via WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    marginTop: 8,
    minHeight: 70,
  },
  profilePicContainer: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  rating: {
    fontSize: 20,
    color: '#1D4ED8',
  },
  profile: {
    marginRight: 5,
    height: 16,
    width: 16,
    color: '#1D4ED8',
  },
  genero: {
    fontSize: 14,
    color: 'black',
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 10,
  },
  tag: {
    height: 26,
    backgroundColor: '#172554',
    padding: 4,
    borderRadius: 4,
  },
  tagText: {
    color: '#DBEAFE',
    fontSize: 14,
    lineHeight: 18,
  },
  addressInfo: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#000000',
    marginTop: 24,
    marginBottom: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  propertyInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  propertyItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  propertyText: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  icon: {
    width: 24,
    height: 24,
    color: '#1D4ED8',
  },
  mapContainer: {
    height: 221,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 24,
  },
  whatsappButton: {
    height: 48,
    backgroundColor: '#1D4ED8',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsappButtonText: {
    color: '#DBEAFE',
    fontSize: 14,
    fontWeight: 'semibold',
  },
});

export default UserProfile;
