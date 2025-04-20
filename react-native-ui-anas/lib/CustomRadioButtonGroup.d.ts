import React from 'react';
import { TextStyle } from 'react-native';
export interface RadioOption {
    label: string;
    value: string;
}
export interface CustomRadioButtonGroupProps {
    options: RadioOption[];
    selectedValue?: string;
    onChange?: (selected: string) => void;
    type?: 'circle' | 'disc' | 'square' | 'rectangle';
    size?: number;
    borderColor?: string;
    fillColor?: string;
    labelStyle?: TextStyle;
}
declare const CustomRadioButtonGroup: React.FC<CustomRadioButtonGroupProps>;
export default CustomRadioButtonGroup;
