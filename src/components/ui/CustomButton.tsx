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

    const baseStyles = 'p-2 ';
    const variantStyles =
        variant === 'outline'
            ? 'border border-main text-main bg-transparent hover:bg-main/50'
            : 'bg-main text-white hover:bg-secondary';

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
