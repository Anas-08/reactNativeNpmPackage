import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, } from 'react-native';
const CustomRadioButtonGroup = ({ options, selectedValue, onChange, type = 'circle', size = 24, borderColor = '#FF6347', fillColor = '#FF6347', labelStyle, }) => {
    const [selected, setSelected] = useState(selectedValue || '');
    const selectRadio = (value) => {
        setSelected(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    const getShapeStyle = () => {
        switch (type) {
            case 'circle':
            case 'disc':
                return { borderRadius: size / 2 };
            case 'square':
                return { borderRadius: 4 };
            case 'rectangle':
                return { borderRadius: 8, aspectRatio: 2 };
            default:
                return {};
        }
    };
    return (React.createElement(View, { style: styles.container }, options.map((option) => {
        const isSelected = selected === option.value;
        return (React.createElement(TouchableOpacity, { key: option.value, style: styles.radioContainer, onPress: () => selectRadio(option.value) },
            React.createElement(View, { style: [
                    styles.radio,
                    getShapeStyle(),
                    {
                        width: size,
                        height: size,
                        borderColor: borderColor,
                        borderWidth: 2,
                    },
                ] }, isSelected && (React.createElement(View, { style: [
                    styles.inner,
                    getShapeStyle(),
                    {
                        width: size / 1.6,
                        height: size / 1.6,
                        backgroundColor: fillColor,
                    },
                ] }))),
            React.createElement(Text, { style: [styles.label, labelStyle] }, option.label)));
    })));
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    radio: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        backgroundColor: '#FF6347',
    },
    label: {
        marginLeft: 10,
        fontSize: 16,
    },
});
export default CustomRadioButtonGroup;
