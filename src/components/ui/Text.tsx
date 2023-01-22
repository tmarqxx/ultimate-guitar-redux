import { cva, type VariantProps } from "class-variance-authority";

import { type ReactNode } from "react";

const useStyles = cva([], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-2xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-orange-500",
      secondary: "text-teal-600",
      pro: "text-orange-800",
      white: "text-neutral-100",
    },
    header: {
      true: "uppercase",
    },
  },
});

type StylesProps = VariantProps<typeof useStyles>;

export interface Props extends Omit<StylesProps, "size" | "weight"> {
  variant: `${NonNullable<StylesProps["size"]>}/${NonNullable<
    StylesProps["weight"]
  >}`;
  header?: boolean;
  color?: NonNullable<StylesProps["color"]>;
  children?: ReactNode;
}

export const Text = ({
  variant = "md/normal",
  color = "white",
  header = false,
  children,
  ...props
}: Props) => {
  const [size, weight] = variant.split("/") as [
    StylesProps["size"],
    StylesProps["weight"]
  ];

  return (
    <div className={useStyles({ size, weight, color, header, ...props })}>
      {children}
    </div>
  );
};
