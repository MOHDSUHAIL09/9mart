import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "#3182ce",  // Default Blue Color
    textColor = "#ffffff",  // Default White Color
    className = "",
    ...props
}) {
    const buttonStyle = {
        padding: "0.5rem 1rem", // Equivalent to px-4 py-2 in Tailwind
        borderRadius: "0.5rem", // Equivalent to rounded-lg in Tailwind
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out", // Optional: to add a smooth transition
    };

    return (
        <button
            style={buttonStyle}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}
