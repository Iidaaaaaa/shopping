import React, { useState } from "react";
import MapApi from "../components/MapApi";
import MapInfo from "../components/MapInfo";

const MapLayout = () => {
  const [mapTitle, setMapTitle] = useState("");
  const [mapScore, setMapScore] = useState("");
  const [mapText, setMapText] = useState("");
  const [mapImage, setMapImage] = useState("");
  const [isMapInfoVisible, setIsMapInfoVisible] = useState(false);

  return (
    <div className="overflow-hidden h-5/6 relative">
      <MapApi
        setMapTitle={setMapTitle}
        setMapScore={setMapScore}
        setMapText={setMapText}
        setMapImage={setMapImage}
        setIsMapInfoVisible={setIsMapInfoVisible}
      />
      {isMapInfoVisible && (
        <MapInfo
          title={mapTitle}
          score={mapScore}
          text={mapText}
          img={mapImage}
        />
      )}
    </div>
  );
};

export default MapLayout;
