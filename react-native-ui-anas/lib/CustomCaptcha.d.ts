import React from 'react';
import { ViewStyle } from 'react-native';
type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';
export interface CustomCaptchaProps {
    onValidate: (isValid: boolean) => void;
    operation?: Operation;
    questionPrompt?: string;
    validateButtonText?: string;
    refreshButtonText?: string;
    placeholderText?: string;
    successMessage?: string;
    failureMessage?: string;
    textColor?: string;
    backgroundColor?: string;
    buttonStyle?: ViewStyle;
    timeoutInSeconds?: number;
    autoValidate?: boolean;
    showFeedback?: boolean;
}
declare const CustomCaptcha: React.FC<CustomCaptchaProps>;
export default CustomCaptcha;
