import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

import ProfilePic from '@/components/ProfilePic';
import { Separator } from '@/components/Separator';
import { RootState } from '@/store';

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const { user: googleUser } = useUser();

  if (!user) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
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

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Futuro mapa</Text>
      </View>

      <TouchableOpacity style={styles.whatsappButton}>
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
  mapPlaceholder: {
    height: 221,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  mapText: {
    fontSize: 16,
    color: '#666',
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
