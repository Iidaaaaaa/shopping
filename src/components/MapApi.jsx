import React, { useEffect, useRef, useState } from "react";
import MapToggleCode from "../components/MapToggleCode";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/firebaseConfig";

const MapApi = ({
  setMapTitle,
  setMapScore,
  setMapText,
  setMapImage,
  setIsMapInfoVisible,
}) => {
  const mapRef = useRef(null);
  const markerRefs = useRef([]);
  const [, , setTopPosition] = MapToggleCode();
  const [coordinatesMap, setCoordinatesMap] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const newCoordinatesMap = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          newCoordinatesMap[data.storeName] = {
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng),
            title: data.storeName,
            score: data.score || "0", // スコアがない場合はデフォルト値を使用
            text: data.description,
            img: data.imageUrl,
          };
        });
        setCoordinatesMap(newCoordinatesMap);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    if (!coordinatesMap) {
      fetchMapData();
    }

    if (!mapRef.current && coordinatesMap) {
      const platform = new H.service.Platform({
        apikey: "kHhLUgbO973xZhOrEx1VNlHRUXw8vZOGx5vhCX41rjE",
      });

      const omvService = platform.getOMVService({
        path: "v2/vectortiles/core/mc",
      });
      const baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
      const style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);
      const omvProvider = new H.service.omv.Provider(omvService, style);
      const omvlayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

      const map = new H.Map(document.getElementById("map"), omvlayer, {
        zoom: 12,
        maxZoom: 16,
        minZoom: 10,
        center: { lat: 35.1815, lng: 136.8848 }, // 名古屋市の中心
        pixelRatio: window.devicePixelRatio || 1,
      });

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      mapRef.current = map;

      omvProvider.addEventListener("tileloaderror", (evt) => {
        console.error("Tile load error:", evt);
      });
      Object.values(coordinatesMap).forEach((coordinates) => {
        // 期待されるデータ形式に沿っているかチェック
        if (coordinates.lat && coordinates.lng) {
          const marker = new H.map.Marker({
            lat: coordinates.lat,
            lng: coordinates.lng,
          });
          map.addObject(marker);
          markerRefs.current.push(marker);

          marker.addEventListener("tap", () => {
            const markerPosition = marker.getGeometry();

            map.setCenter(
              {
                lat: markerPosition.lat - 0.01,
                lng: markerPosition.lng,
              },
              true
            );

            map.setZoom(15, true, 300);

            setMapTitle(coordinates.title);
            setMapScore(coordinates.score);
            setMapText(coordinates.text);
            setMapImage(coordinates.img);

            setIsMapInfoVisible(true);
            setTopPosition();
          });
        } else {
          console.error("Invalid coordinates:", coordinates);
        }
      });

      const showCurrentLocation = (position) => {
        const { latitude, longitude } = position.coords;
        const icon = new H.map.Icon("./images/icon.png", {
          size: { w: 24, h: 24 },
        });
        const currentLocationMarker = new H.map.Marker(
          { lat: latitude, lng: longitude },
          { icon }
        );
        map.addObject(currentLocationMarker);
        map.setCenter({ lat: latitude - 0.01, lng: longitude });
      };

      const handleLocationError = (error) => {
        console.error("Error getting current location:", error);
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          showCurrentLocation,
          handleLocationError
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }

      window.addEventListener("resize", () => map.getViewPort().resize());

      map.addEventListener("tap", (evt) => {
        const target = evt.target;
        if (!markerRefs.current.some((marker) => marker === target)) {
          setIsMapInfoVisible(false);
        }
      });
    }
  }, [
    coordinatesMap,
    setMapTitle,
    setMapScore,
    setMapText,
    setMapImage,
    setIsMapInfoVisible,
    setTopPosition,
  ]);

  return <div id="map" style={{ height: "100vh", width: "100vw" }}></div>;
};

export default MapApi;
