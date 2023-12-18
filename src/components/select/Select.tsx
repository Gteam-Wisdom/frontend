import * as React from "react";

import styles from './Select.module.css';

interface SelectComponentProps {
    className?: string;
    disabled?: boolean;
    label: string;
    helperMessage?: string;
    inputStyle?: React.CSSProperties;
    name: string;
    onChange: (event: any) => void;
    placeholder?: string;
    list?: any[] | undefined,
    required?: boolean;
    value: string;
}

const Select: React.FC<SelectComponentProps> = ({
    className,
    label,
    helperMessage,
    disabled,
    inputStyle,
    name,
    onChange,
    list = [],
    placeholder,
    required,
    value,
}) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef && inputRef.current) inputRef.current.focus();
    };

    return (
        <div
            onClick={handleClick}
            className={styles.selectContainer}
        >
            <label className={styles.label} htmlFor={label}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            <select
                aria-label={name}
                data-testid={name}
                tabIndex={0}
                id={name}
                name={name}
                className={className}
                // @ts-ignore
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                style={inputStyle}
                disabled={disabled}
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {list && list.map((item: any) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {helperMessage &&
                <label className={styles.helperMessage} htmlFor={label}>
                    {helperMessage}
                </label>
            }
        </div>
    );
};

export default Select;