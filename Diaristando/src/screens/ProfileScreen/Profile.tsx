import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';

import ProfilePic from '@/components/ProfilePic';
import { Separator } from '@/components/Separator';
import { RootState } from '@/store';

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Header com a foto de perfil */}
      <View style={styles.header}>
        <ProfilePic
          imageUrl={user.profileImageUrl || 'default-image-url'}
          isEditable={false}
          handleUpload={() => console.log('Foto carregada')}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.nome}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>★★★★☆</Text>
            <Image source={require('@/assets/icons/user.png')} style={styles.profile} />
            <Text style={styles.genero}>
              {user.genero.charAt(0).toUpperCase() + user.genero.slice(1).toLowerCase()}
            </Text>
          </View>
        </View>
      </View>

      {/* Tags movidas logo abaixo da imagem de perfil */}
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
      {/* Endereço e Informações da Residência */}
      <View style={styles.addressInfo}>
        <Separator />
        <Text style={styles.address}>Rua dos bobos, 123, casa 3, Valqueire, Rio de Janeiro</Text>
        <View style={styles.propertyInfo}>
          <View style={styles.propertyItemUp}>
            <Image source={require('@/assets/icons/bed.png')} style={styles.icon} />
            <Text style={styles.propertyText}>4 quartos</Text>
          </View>
          <View style={styles.propertyItemUp}>
            <Image source={require('@/assets/icons/size.png')} style={styles.icon} />
            <Text style={styles.propertyText}>600 m²</Text>
          </View>
        </View>
        <View style={styles.propertyInfo}>
          <View style={styles.propertyItemDown}>
            <Image source={require('@/assets/icons/outdoor-garden.png')} style={styles.icon} />
            <Text style={styles.propertyText}>2 Varandas</Text>
          </View>
          <View style={styles.propertyItemDown}>
            <Image source={require('@/assets/icons/bathroom.png')} style={styles.icon} />
            <Text style={styles.propertyText}>6 Banheiros</Text>
          </View>
        </View>
      </View>

      {/* Mapa */}
      <View style={styles.mapPlaceholder}>
        {/* Componente do mapa quando estiver pronto */}
        <Text style={styles.mapText}>Futuro mapa</Text>
      </View>

      {/* Botão de Contato via WhatsApp */}
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
    marginTop: 24,
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  rating: {
    fontSize: 20,
    marginRight: 12,
  },
  profile: {
    marginRight: 5,
  },
  genero: {
    fontSize: 14,
    color: '#666',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center', // Centraliza as tags abaixo da foto de perfil
  },
  tag: {
    backgroundColor: '#2E4DC2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 12,
  },
  tagText: {
    color: '#DBEAFE',
    fontSize: 12,
  },
  addressInfo: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
    marginTop: 24,
    marginBottom: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  propertyInfo: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingTop: 24,
  },
  propertyItemUp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    paddingRight: 66,
  },
  propertyItemDown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    paddingRight: 53,
  },
  propertyText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
    fontFamily: 'Roboto',
  },
  icon: {
    width: 24,
    height: 24,
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
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  whatsappButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
