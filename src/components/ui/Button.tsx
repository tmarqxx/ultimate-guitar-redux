import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import style from "../../styles/ui/Button.module.css";

const useStyles = cva(style["btn"], {
  variants: {
    type: {
      primary: style["btn-primary"],
      secondary: style["btn-secondary"],
      pro: style["btn-pro"],
      white: style["btn-white"],
    },
    outlined: {
      true: style["btn__outlined"],
    },
    disabled: {
      true: style["btn__disabled"],
    },
    loading: {
      true: style["btn__loading"],
    },
    fullWidth: {
      true: style["w-full"],
    },
  },
});

type StylesProps = VariantProps<typeof useStyles>;

interface Props extends Omit<StylesProps, "type" | "outlined" | "fullWidth"> {
  type?: NonNullable<StylesProps["type"]>;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
}

export const Button = ({
  type = "primary",
  outlined = false,
  fullWidth,
  disabled = false,
  loading = false,
  children,
  ...props
}: Props) => {
  const styles = useStyles({
    type,
    outlined,
    disabled: disabled && !loading,
    loading,
    fullWidth,
    ...props,
  });

  return (
    <button className={styles} disabled={disabled || loading}>
      {loading ? "Loading..." : children}
    </button>
  );
};
