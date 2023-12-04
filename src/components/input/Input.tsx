import styles from "./Input.module.css";
import OpenEye from "./assets/open-eye.svg";
import ClosedEye from "./assets/closed-eye.svg";
import Find from "./assets/find.svg";
import Geo from "./assets/geo.svg";
import { FunctionComponent, useRef, useState } from "react";

interface InputComponentProps {
  className?: string;
  errors?: boolean;
  disabled?: boolean;
  label?: string;
  helperMessage?: string;
  inputStyle?: React.CSSProperties;
  name?: string;
  onChange?: (event: any) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  expires?: boolean;
  type?: string;
  showPasswordToggle?: boolean;
  value?: string;
  container?: React.CSSProperties;
  isLocation?: boolean;
  isFind?: boolean;
}

const Input: FunctionComponent<InputComponentProps> = ({
  className,
  errors,
  label,
  helperMessage,
  disabled,
  inputStyle,
  name,
  onChange,
  expires,
  placeholder,
  readOnly,
  required,
  type,
  showPasswordToggle,
  value,
  isLocation,
  container,
  isFind,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    console.log("State changed");
  };

  return (
    <div
      onClick={handleClick}
      className={styles.inputContainer}
      style={container}
    >
      <div className={styles.labelContainer}>
        {label && (
          <label className={styles.label} htmlFor={label}>
            {label} {required && <span className={styles.required}>*</span>}
          </label>
        )}
        {expires && (
          <label className={styles.label} htmlFor={label}>
            {`Expires in 4:59 min`}
          </label>
        )}
      </div>
      {type === "textarea" ? (
        <textarea
          aria-label={name}
          data-testid={name}
          className={`${className} ${
            errors && required ? styles.errorInput : ""
          }`}
          tabIndex={0}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      ) : showPasswordToggle ? (
        <div className={styles.passwordContainer}>
          <img src={OpenEye} alt="hide" />
          <input
            required
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            className={`${className} ${styles.input} ${
              errors && required ? styles.errorInput : ""
            }`}
            tabIndex={0}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={handleTogglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <img src={OpenEye} alt="hide" />
              ) : (
                <img src={ClosedEye} alt="show" />
              )}
            </button>
          )}
        </div>
      ) : isLocation ? (
        <div className={styles.passwordContainer}>
          <button type="button" className={styles.findButton}>
            <img src={Find} alt="hide" />
          </button>
          <input
            required
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            className={`${className} ${styles.inputIcon} ${styles.input}  ${
              errors && required
                ? (styles.errorInput, styles.input)
                : styles.input
            }`}
            tabIndex={0}
            type={"text"}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
          <button type="button" className={styles.passwordToggle}>
            <img src={Geo} alt="Geo" />
          </button>
        </div>
      ) : isFind ? (
        <div className={styles.passwordContainer}>
          <button type="button" className={styles.findButton}>
            <img src={Find} alt="hide" />
          </button>
          <input
            required
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            className={`${className} ${styles.input}  ${styles.inputIcon} ${
              errors && required
                ? (styles.errorInput, styles.input)
                : styles.input
            }`}
            tabIndex={0}
            type={"text"}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
        </div>
      ) : (
        <input
          required
          ref={inputRef}
          aria-label={name}
          data-testid={name}
          className={`${className} ${styles.input}  ${
            errors && required ? styles.errorInput : ""
          }`}
          tabIndex={0}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      )}
      {errors && !value && required && (
        <p className={styles.errorMessage}>Error message</p>
      )}
      {helperMessage && (
        <label className={styles.helperMessage} htmlFor={label}>
          {helperMessage}
        </label>
      )}
    </div>
  );
};

export default Input;
