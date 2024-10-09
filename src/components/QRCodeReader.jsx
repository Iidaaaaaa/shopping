import React, { useRef, useEffect } from "react";
import { QrReader } from "react-qr-reader";

const QRCodeReader = () => {
  const videoRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const handleError = (err) => {
    console.error("QRコードの読み取り中にエラーが発生しました:", err);
  };

  useEffect(() => {
    const videoElement = videoRef.current?.querySelector("video");
    if (videoElement) {
      videoElement.setAttribute("playsinline", "true");
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result);
          }

          if (!!error) {
            handleError(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        containerStyle={{ width: "100%", height: "100%" }}
        videoContainerStyle={{ width: "100%", height: "100%" }}
        videoStyle={{ width: "100%", height: "100%" }}
        ref={videoRef}
      />
    </div>
  );
};

export default QRCodeReader;
