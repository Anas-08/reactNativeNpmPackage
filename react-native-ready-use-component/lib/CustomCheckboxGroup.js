import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, } from 'react-native';
const CustomCheckBoxGroup = ({ options, selectedValues = [], onChange, type = 'square', color = '#FF6347', size = 24, labelStyle, sizeMode = 'center', showCheckmark = true, }) => {
    const [selected, setSelected] = useState(selectedValues);
    const toggleCheckbox = (value) => {
        const newSelected = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value];
        setSelected(newSelected);
        onChange === null || onChange === void 0 ? void 0 : onChange(newSelected);
    };
    const getSizeModeStyle = () => {
        switch (sizeMode) {
            case 'cover':
                return { flex: 1, alignSelf: 'stretch' };
            case 'contain':
                return { maxWidth: size * 2, maxHeight: size * 2 };
            case 'center':
            default:
                return { width: size, height: size };
        }
    };
    return (React.createElement(View, { style: styles.container }, options.map((option) => {
        const isSelected = selected.includes(option.value);
        return (React.createElement(TouchableOpacity, { key: option.value, style: styles.checkboxContainer, onPress: () => toggleCheckbox(option.value) },
            React.createElement(View, { style: [
                    styles.checkbox,
                    type === 'rectangle' ? styles.rectangle : styles.square,
                    isSelected && {
                        backgroundColor: color,
                        borderColor: color,
                    },
                    getSizeModeStyle(),
                ] }, isSelected && showCheckmark && (React.createElement(Text, { style: styles.checkmark }, "\u2713"))),
            React.createElement(Text, { style: [styles.label, labelStyle] }, option.label)));
    })));
};
const styles = StyleSheet.create({
    container: { marginVertical: 10 },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    square: { borderRadius: 4 },
    rectangle: { borderRadius: 8, aspectRatio: 2 },
    checkmark: { color: '#FFF', fontSize: 16 },
    label: { marginLeft: 10, fontSize: 16 },
});
export default CustomCheckBoxGroup;
