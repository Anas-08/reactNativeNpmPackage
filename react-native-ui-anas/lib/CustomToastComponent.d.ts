import React from 'react';
export interface CustomToastMessageProps {
    message: string;
    visible: boolean;
    duration?: number;
    onHide?: () => void;
    backgroundColor?: string;
    textColor?: string;
    textSize?: number;
    borderColor?: string;
    borderWidth?: number;
    progressLineColor?: string;
    progressLineHeight?: number;
    zIndex?: number;
    positionTop?: number;
    positionLeft?: number;
    centerScreen?: boolean;
}
declare const CustomToastMessage: React.FC<CustomToastMessageProps>;
export default CustomToastMessage;
