import React from 'react';
import { TextStyle } from 'react-native';
export interface CheckboxOption {
    label: string;
    value: string;
}
export interface CustomCheckBoxGroupProps {
    options: CheckboxOption[];
    selectedValues?: string[];
    onChange?: (selected: string[]) => void;
    type?: 'square' | 'rectangle';
    color?: string;
    size?: number;
    labelStyle?: TextStyle;
    sizeMode?: 'center' | 'cover' | 'contain';
    showCheckmark?: boolean;
}
declare const CustomCheckBoxGroup: React.FC<CustomCheckBoxGroupProps>;
export default CustomCheckBoxGroup;
