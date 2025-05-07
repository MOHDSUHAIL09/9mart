import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    
    // Inline CSS styles for the input and label
    const inputStyle = {
        padding: "0.5rem 0.75rem", // Equivalent to px-3 py-2
        borderRadius: "0.5rem", // Equivalent to rounded-lg
        backgroundColor: "white",
        color: "black",
        outline: "none",
        focus: "background-color: #f0f0f0;", // Equivalent to focus:bg-gray-50
        border: "1px solid #d1d5db", // Equivalent to border-gray-200
        width: "100%",
        transition: "background-color 0.2s ease-in-out", // Equivalent to duration-200
    };

    const labelStyle = {
        display: "inline-block",
        marginBottom: "0.25rem", // Equivalent to mb-1
        paddingLeft: "0.25rem", // Equivalent to pl-1
    };

    return (
        <div style={{ width: '100%' }}>
            {label && (
                <label htmlFor={id} style={labelStyle}>
                    {label}
                </label>
            )}
            <input
                type={type}
                style={inputStyle}
                ref={ref}
                {...props}
                id={id}
                className={className}
            />
        </div>
    );
});

export default Input;
