import React from 'react';

interface CustomButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    variant?: 'filled' | 'outline';
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    className = '',
    children,
    variant = 'filled',
}) => {

    const baseStyles = 'px-4 py-2 cursor-pointer ';
    const variantStyles =
        variant === 'outline'
            ? 'border border-main text-main bg-transparent   rounded-xl '
            : 'bg-main text-white rounded-xl';

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;
