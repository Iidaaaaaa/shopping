import React, { useEffect, useRef } from "react";
import MapToggleCode from "../components/MapToggleCode";
import { collection, getDocs } from "firebase/firestore"; // Firestoreのインポート
import { db } from "/firebaseConfig"; // FirebaseConfigのインポートパスを修正

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
    const fetchMapData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Maps"));
        const coordinatesMap = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("Fetched data:", data); // デバッグ用ログ
          coordinatesMap[data.title] = {
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng),
            title: data.title,
            score: data.score,
            text: data.text,
            img: data.img,
          };
        });

        if (!mapRef.current) {
          const platform = new H.service.Platform({
            apikey: "kHhLUgbO973xZhOrEx1VNlHRUXw8vZOGx5vhCX41rjE",
          });

          const omvService = platform.getOMVService({
            path: "v2/vectortiles/core/mc",
          });
          const baseUrl =
            "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";
          const style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);
          const omvProvider = new H.service.omv.Provider(omvService, style);
          const omvlayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });

          const map = new H.Map(document.getElementById("map"), omvlayer, {
            zoom: 12, // 初期ズームレベルを低く設定
            maxZoom: 16,
            minZoom: 10, // 最小ズームレベルを調整
            center: { lat: 35.1815, lng: 136.8848 },
            pixelRatio: window.devicePixelRatio || 1,
          });

          // 不要なイベントリスナーを削除
          new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

          mapRef.current = map;

          // タイルキャッシュの設定
          const cache = new H.util.Cache(1024 * 1024 * 10); // 10MBのキャッシュサイズを設定
          omvProvider.setCache(cache);

          // タイル読み込みエラーのハンドリング
          omvProvider.addEventListener("tileloaderror", (evt) => {
            console.error("Tile load error:", evt);
          });

          // マーカーの追加処理
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
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();
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
