import React from "react";
import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
  width?: string | number;
  height?: string | number;
  ClassName?: string;
}

const MapIcon: React.FC<PropsType> = (props) => {
  const {
    style,
    color = "#ACACAC",
    width = 30,
    height = 24,
    ClassName = "mx-auto",
  } = props;

  return (
    <svg
      className={ClassName}
      width={width}
      height={height}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M1.725 9H28.2703C29.2219 9 29.9953 8.22656 29.9953 7.275C29.9953 6.93281 29.8922 6.6 29.7047 6.31875L26.1656 1.00312C25.7484 0.375 25.05 0 24.2953 0H5.70469C4.95469 0 4.25156 0.375 3.83438 1.00312L0.290625 6.31406C0.103125 6.6 0 6.93281 0 7.27031C0 8.22656 0.773438 9 1.725 9ZM3 10.5V18V21.75C3 22.9922 4.00781 24 5.25 24H15.75C16.9922 24 18 22.9922 18 21.75V18V10.5H15V18H6V10.5H3ZM24 10.5V22.5C24 23.3297 24.6703 24 25.5 24C26.3297 24 27 23.3297 27 22.5V10.5H24Z"
        fill={color}
      />
    </svg>
  );
};

export default MapIcon;
