import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

type ProfilePicProps = {
  imageUrl: string;
  isEditable: boolean;
  handleUpload: () => void;
  height?: number;
  width?: number;
};

const ProfilePic = ({
  imageUrl,
  isEditable,
  handleUpload,
  height = 100,
  width = 100,
}: ProfilePicProps) => {
  return (
    <View style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: 'red' }}>
      <Image source={{ uri: imageUrl }} style={{ width, height }} />
      {isEditable && (
        <TouchableOpacity onPress={handleUpload}>
          <Text style={{ color: 'blue' }}>Editar Foto</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfilePic;
