import React, { useState } from "react";
import QRCodeReader from "../components/QRCodeReader";

const ScanLayout = () => {
  return (
    <div>
      <QRCodeReader />
    </div>
  );
};

export default ScanLayout;
