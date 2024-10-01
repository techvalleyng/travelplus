import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import * as Location from "expo-location";
import { calculateRegion, generateMarkersFromData } from "@/helpers/map";
import { MarkerData } from "@/types/type";
import { icons } from "@/constants/assets";

type Props = {};

const drivers = [
  {
    car_image_url: "",
    car_seats: 2,
    first_name: "muhammed",
    last_name: "ladan",
    id: 1,
    profile_image_url: "",
    rating: 5,
  },
  {
    car_image_url: "",
    car_seats: 2,
    first_name: "Abba",
    last_name: "Haruna",
    id: 2,
    profile_image_url: "",
    rating: 5,
  },
  {
    car_image_url: "",
    car_seats: 2,
    first_name: "Ishaq",
    last_name: "umar",
    id: 3,
    profile_image_url: "",
    rating: 5,
  },
  {
    car_image_url: "",
    car_seats: 2,
    first_name: "Ibrahim",
    last_name: "Bakari",
    id: 4,
    profile_image_url: "",
    rating: 5,
  },
];

const CustomMap = (props: Props) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [userlocation, setUserLocation] = useState({
    latitude: 9.0669056,
    longitude: 7.45472,
    address: "",
  });
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedDriver, setSelectedDriver] = useState(0);

  const { latitude: userLatitude, longitude: userLongitude } = userlocation;

  useEffect(() => {
    //effect for getting and setting user location
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        setHasPermission(true);
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      console.log("address", address);

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${address[0].name} ${address[0].region}`,
      });
    };
    requestLocation();
  }, []);

  useEffect(() => {
    //effect for creating passenger marker
    if (Array.isArray(drivers)) {
      if (!userLatitude || !userLongitude) return;
      const newMarkers = generateMarkersFromData({
        data: drivers,
        userLatitude,
        userLongitude,
      });

      setMarkers(newMarkers);
    }
  }, []);

  console.log("logged", userlocation);

  const region = calculateRegion({
    userLatitude: userLatitude,
    userLongitude: userLongitude,
  });

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-full"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Marker
        image={icons.pin}
        coordinate={{ latitude: userLatitude, longitude: userLongitude }}
        title="me"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          image={
            selectedDriver === marker.id ? icons.selectedMarker : icons.marker
          }
        />
      ))}
    </MapView>
  );
};

export default CustomMap;
