import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';

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

const CustomCheckBoxGroup: React.FC<CustomCheckBoxGroupProps> = ({
  options,
  selectedValues = [],
  onChange,
  type = 'square',
  color = '#FF6347',
  size = 24,
  labelStyle,
  sizeMode = 'center',
  showCheckmark = true,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedValues);

  const toggleCheckbox = (value: string): void => {
    const newSelected = selected.includes(value)
      ? selected.filter((v: string) => v !== value)
      : [...selected, value];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const getSizeModeStyle = (): ViewStyle => {
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

  return (
    <View style={styles.container}>
      {options.map((option: CheckboxOption) => {
        const isSelected = selected.includes(option.value);
        return (
          <TouchableOpacity
            key={option.value}
            style={styles.checkboxContainer}
            onPress={() => toggleCheckbox(option.value)}
          >
            <View
              style={[
                styles.checkbox,
                type === 'rectangle' ? styles.rectangle : styles.square,
                isSelected && {
                  backgroundColor: color,
                  borderColor: color,
                },
                getSizeModeStyle(),
              ]}
            >
              {isSelected && showCheckmark && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
            <Text style={[styles.label, labelStyle]}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
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
