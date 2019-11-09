import React from "react";
import cx from "classnames";

const TextInput = ({
  label,
  type,
  touched,
  error,
  inputClassName,
  className,
  placeholder,
  helpText,
  disabled,
  ...restProps
}) => (
  <div className={className}>
    <input
      {...restProps}
      type={type}
      className={cx(inputClassName, "form-control", {
        error: !!error
      })}
      placeholder={placeholder}
      disabled={disabled}
    />

    {/* {touched && error && (
      <label className="error" htmlFor={input.name}>
        {error}
      </label>
    )} */}

    {helpText && <span className="help-block">{helpText}</span>}
  </div>
);

export default TextInput;
