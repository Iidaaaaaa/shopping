import React from "react";
import { CSSProperties } from "react";

/** Propsの型定義 */
interface PropsType {
  style?: CSSProperties;
  color?: string;
  width?: string | number;
  height?: string | number;
}

const MenuIcon: React.FC<PropsType> = (props) => {
  const { style, color = "#ACACAC", width = 29, height = 24 } = props;

  return (
    <svg
      className="mx-auto"
      width={width}
      height={height}
      viewBox="0 0 29 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H27.1935C27.7458 0 28.1935 0.447715 28.1935 1C28.1935 1.55228 27.7458 2 27.1935 2H1C0.447715 2 0 1.55228 0 1ZM0 11.8387C0 11.2864 0.447715 10.8387 1 10.8387H27.1935C27.7458 10.8387 28.1935 11.2864 28.1935 11.8387C28.1935 12.391 27.7458 12.8387 27.1935 12.8387H1C0.447715 12.8387 0 12.391 0 11.8387ZM1 21.6774C0.447715 21.6774 0 22.1251 0 22.6774C0 23.2297 0.447715 23.6774 1 23.6774H27.1935C27.7458 23.6774 28.1935 23.2297 28.1935 22.6774C28.1935 22.1251 27.7458 21.6774 27.1935 21.6774H1Z"
        fill={color}
      />
    </svg>
  );
};

export default MenuIcon;
