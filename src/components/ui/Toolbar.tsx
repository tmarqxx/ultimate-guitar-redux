import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";

const useStyles = cva(
  [
    "flex",
    "flex-row",
    "p-4",
    "bg-transparent",
    "items-center",
    "justify-between",
    'w-full'
  ],
  {
    variants: {
      app: {
        true: [
          "bg-neutral-900",
        ],
      },
    },
  }
);

type StylesProps = VariantProps<typeof useStyles>;

interface Props extends Omit<StylesProps, string | number | symbol> {
  app?: boolean;
  nav?: boolean;
  children?: ReactNode;
}

const Root = ({ app = false, children }: Props) => {
  return <header className={useStyles({ app })}>{children}</header>;
};

const Start = ({ nav = false, children }: Props) => {
  const styles = "flex gap-3 justify-self-start";

  if (nav) return <nav className={styles}>{children}</nav>;

  return <div className={styles}>{children}</div>;
};

const End = ({ children }: Props) => {
  return <div className="flex gap-3 justify-self-end">{children}</div>;
};

export const Toolbar = Object.assign(Root, { Start, End });
