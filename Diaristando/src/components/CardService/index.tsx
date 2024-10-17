import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ServiceCardProps = {
  title: string;
  onPress: () => void;
  animationSource: any;
};

const ServiceCard = ({ title, onPress, animationSource }: ServiceCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <LottieView source={animationSource} autoPlay loop style={styles.animation} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Serviços inclusos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 188,
    backgroundColor: '#F9FAFB',
    borderWidth: 2,
    borderColor: '#1D4ED8',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  animation: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#6e6e6e',
    marginVertical: 8,
    textAlign: 'center',
  },
  button: {
    width: 127,
    height: 32,
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#1F2A37',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F9FAFB',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ServiceCard;
