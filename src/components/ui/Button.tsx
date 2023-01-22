import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";

const useStyles = cva(
  [
    "font-semibold",
    "py-1",
    "px-4",
    "text-lg",
    "rounded-lg",
    "border-transparent",
    "text-center",
    "box-content",
    "transition",
    "ease-out",
    "duration-300",
    "disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      type: {
        primary: [],
        secondary: [],
        pro: [],
        white: [],
      },
      outlined: {
        true: ["bg-transparent", "border"],
        false: ["text-neutral-100"],
      },
      loading: {
        true: "cursor-wait hover:bg-none active:bg-none",
        false: "cursor-pointer",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        type: "primary",
        outlined: false,
        loading: false,
        class: [
          "bg-orange-500",
          "enabled:hover:bg-orange-400",
          "enabled:active:bg-orange-600",
        ],
      },
      {
        type: "primary",
        outlined: true,
        loading: false,
        class: [
          "border-orange-500",
          "enabled:hover:bg-orange-500/25",
          "enabled:active:bg-orange-500/10",
          "text-orange-500",
        ],
      },
      {
        type: "primary",
        outlined: false,
        loading: true,
        class: ["bg-orange-500"],
      },
      {
        type: "primary",
        outlined: true,
        loading: true,
        class: ["border-orange-500", "text-orange-500"],
      },
      {
        type: "secondary",
        outlined: false,
        loading: false,
        class: [
          "bg-teal-600",
          "enabled:hover:bg-teal-500",
          "enabled:active:bg-teal-700",
        ],
      },
      {
        type: "secondary",
        outlined: true,
        loading: false,
        class: [
          "border-teal-600",
          "enabled:hover:bg-teal-600/25",
          "enabled:active:bg-teal-600/10",
          "text-teal-600",
        ],
      },
      {
        type: "secondary",
        outlined: false,
        loading: true,
        class: ["bg-teal-600"],
      },
      {
        type: "secondary",
        outlined: true,
        loading: true,
        class: ["border-teal-600", "text-teal-600"],
      },
      {
        type: "pro",
        outlined: false,
        loading: false,
        class: [
          "bg-orange-800",
          "enabled:hover:bg-orange-700",
          "enabled:active:bg-orange-900",
        ],
      },
      {
        type: "pro",
        outlined: true,
        loading: false,
        class: [
          "border-orange-800",
          "hover:bg-orange-800/25",
          "active:bg-orange-800/10",
          "text-orange-800",
        ],
      },
      {
        type: "pro",
        outlined: false,
        loading: true,
        class: ["bg-orange-800"],
      },
      {
        type: "pro",
        outlined: true,
        loading: true,
        class: ["border-orange-800", "text-orange-800"],
      },
      {
        type: "white",
        outlined: false,
        loading: false,
        class: [
          "bg-neutral-100",
          "enabled:hover:bg-orange-700",
          "enabled:active:bg-orange-900",
          'text-neutral-900'
        ],
      },
      {
        type: "white",
        outlined: true,
        loading: false,
        class: [
          "border-neutral-100",
          "hover:bg-neutral-100/25",
          "active:bg-neutral-100/10",
          "text-neutral-100",
        ],
      },
      {
        type: "white",
        outlined: false,
        loading: true,
        class: ["bg-neutral-100", 'text-neutral-900'],
      },
      {
        type: "white",
        outlined: true,
        loading: true,
        class: ["border-neutral-100", "text-neutral-100"],
      },
    ],
  }
);

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
  const styles = useStyles({ type, outlined, loading, fullWidth, ...props });

  return (
    <button className={styles} disabled={disabled}>
      {loading ? "Loading..." : children}
    </button>
  );
};
