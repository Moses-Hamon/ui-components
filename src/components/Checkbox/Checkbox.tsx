import { FC, useCallback, useEffect, useState } from "react";

import "./checkbox.css";

// always use native html elements when available but in certain situations custom roles accessible components may be needed.
interface CheckboxProps {
  checked?: boolean;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  className,
  label,
  children,
}) => {
  const [checkedState, setChecked] = useState<boolean>(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleClick = useCallback(() => {
    setChecked(!checkedState);
  }, [checkedState]);

  return (
    <>
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        aria-labelledby="custom-checkbox--label"
        className={[
          className,
          "custom-checkbox",
          checkedState ? "custom-checkbox--checked" : "",
        ].join(" ")}
        onClick={handleClick}
      ></div>
      {children}
      {label && (
        <label id="custom-checkbox--label" onClick={handleClick}>
          {label}
        </label>
      )}
    </>
  );
};
