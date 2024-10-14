import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

type ProfilePicProps = {
  imageUrl: string;
  isEditable: boolean;
  handleUpload: () => void;
};

const ProfilePic = ({ imageUrl, isEditable, handleUpload }: ProfilePicProps) => {
  return (
    <View style={{ borderRadius: 50, overflow: 'hidden' }}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      {isEditable && (
        <TouchableOpacity onPress={handleUpload}>
          <Text style={{ color: 'blue' }}>Editar Foto</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfilePic;
