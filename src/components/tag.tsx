import React from "react";

const defaultProps = {
  color: "#ffffff",
  background: "rgba(245,56,56,1)",
};

type DefaultProps = Readonly<typeof defaultProps>;

type IProps = {
  bold: boolean;
} & Partial<DefaultProps>;

const Tag: React.FC<IProps & DefaultProps> = ({
  children,
  color,
  background,
  bold,
}) => {
  return (
    <span
      style={{
        color,
        background,
        fontWeight: bold ? "bolder" : "initial",
        padding: "4px 8px",
        borderRadius: "4px",
      }}
    >
      {children}
    </span>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
