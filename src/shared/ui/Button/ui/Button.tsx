import { ButtonHTMLAttributes, type FC } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

export type ViewProps = "primary" | "secondary" | "transparent" | "outlined";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: ViewProps;
  withoutIndentation?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className: currentClassName,
    type = "button",
    view = "primary",
    disabled = false,
    withoutIndentation = false,
    ...otherProps
  } = props;

  const className = clsx(styles.root, currentClassName, {
    [styles[`root_${view}`]]: view,
    [styles.root_withoutIndentation]: withoutIndentation,
  });

  return (
    <button
      type={type}
      disabled={disabled}
      {...otherProps}
      className={className}
    >
      {children}
    </button>
  );
};
