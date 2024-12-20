import React from "react";
import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
  width?: string | number;
  height?: string | number;
}

const ScanIcon: React.FC<PropsType> = (props) => {
  const { style, color = "white", width = 46, height = 46 } = props;

  return (
    <svg
      className="mx-auto"
      width={width}
      height={height}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M17.25 11.5H13.4167C12.9083 11.5 12.4208 11.7019 12.0614 12.0614C11.7019 12.4208 11.5 12.9083 11.5 13.4167V17.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.75 11.5H32.5833C33.0917 11.5 33.5792 11.7019 33.9386 12.0614C34.2981 12.4208 34.5 12.9083 34.5 13.4167V17.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5 28.75V32.5833C34.5 33.0917 34.2981 33.5792 33.9386 33.9386C33.5792 34.2981 33.0917 34.5 32.5833 34.5H28.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 34.5H13.4167C12.9083 34.5 12.4208 34.2981 12.0614 33.9386C11.7019 33.5792 11.5 33.0917 11.5 32.5833V28.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 23H34.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ScanIcon;
