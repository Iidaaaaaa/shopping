import React, { useEffect, useRef } from "react";
import MapToggleCode from "../components/MapToggleCode";

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

  useEffect(() => {
    if (!mapRef.current) {
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
        zoom: 14,
        maxZoom: 16,
        minZoom: 14,
        center: { lat: 35.1815, lng: 136.8848 },
        pixelRatio: window.devicePixelRatio || 1,
      });

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      mapRef.current = map;

      const coordinatesMap = {
        tab1: {
          lat: 35.1595,
          lng: 136.9066,
          title: "大須商店街",
          score: "1,023",
          text: "定番の名古屋グルメはもちろんのこと、行列のできるB級グルメや多国籍レストラン、カフェなどの飲食店がずらり。",
          img: "./images/oosu.png",
        },
        tab2: {
          lat: 35.1815,
          lng: 136.8848,
          title: "円頓寺商店街",
          score: "2,345",
          text: "円頓寺商店街の説明",
          img: "./images/endoji.png",
        },
        tab3: {
          lat: 35.1681,
          lng: 136.9076,
          title: "SAKUMACHI商店街",
          score: "3,456",
          text: "SAKUMACHI商店街",
          img: "./images/sakumachi.png",
        },
        tab4: {
          lat: 35.1709,
          lng: 136.9064,
          title: "本町通商店街",
          score: "4,567",
          text: "本町通商店街",
          img: "./images/oosu.png",
        },
        tab5: {
          lat: 35.1682,
          lng: 136.8932,
          title: "せと末広街商店街",
          score: "5,678",
          text: "せと末広街商店街",
          img: "./images/endoji.png",
        },
      };

      Object.values(coordinatesMap).forEach((coordinates, index) => {
        const marker = new H.map.Marker(coordinates);
        map.addObject(marker);
        markerRefs.current.push(marker);
        marker.addEventListener("tap", () => {
          const markerPosition = marker.getGeometry();
          console.log(
            `Marker ${index + 1} clicked at coordinates:`,
            markerPosition
          );
          // マーカーの位置を中心に設定（少し上に調整）
          map.setCenter(
            {
              lat: markerPosition.lat - 0.01, // 調整値を変更
              lng: markerPosition.lng,
            },
            true
          );

          map.setZoom(15, true, 300); // ズームレベルを15に設定し、アニメーションを有効にする

          // 商店街情報を更新
          setMapTitle(coordinates.title);
          setMapScore(coordinates.score);
          setMapText(coordinates.text);
          setMapImage(coordinates.img);

          // MapInfoを表示
          setIsMapInfoVisible(true);

          // MapInfoの位置をtop-1/3に設定
          setTopPosition();
        });
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
        // 現在位置を中心に設定（少し上に調整）
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

      map.addEventListener("mapviewchangeend", () => {
        console.log("Map fully loaded");
      });

      // マップのクリックイベントを追加
      map.addEventListener("tap", (evt) => {
        const target = evt.target;
        if (!markerRefs.current.some((marker) => marker === target)) {
          setIsMapInfoVisible(false);
        }
      });
    }
  }, [
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
