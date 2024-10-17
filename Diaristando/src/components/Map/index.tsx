import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components/native';

interface Markers {
  latitude: number;
  longitude: number;
}

type MapProps = {
  markers?: Markers[];
};

const MapContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const Map = ({ markers = [] }: MapProps) => {
  return (
    <MapContainer>
      <MapView
        style={{ width: '100%', height: '100%', flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: -22.9121,
          longitude: -43.2302,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          />
        ))}
      </MapView>
    </MapContainer>
  );
};

export default Map;
