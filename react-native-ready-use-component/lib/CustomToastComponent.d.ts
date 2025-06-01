import React from 'react';
interface CustomToastProps {
    message: string;
    duration?: number;
    backgroundColor?: string;
    textColor?: string;
    position?: 'top' | 'bottom';
    showCloseButton?: boolean;
    onClose?: () => void;
    visible: boolean;
    icon?: React.ReactNode;
    animationType?: 'spring' | 'timing';
    progressBar?: boolean;
}
declare const CustomToast: React.FC<CustomToastProps>;
export default CustomToast;
