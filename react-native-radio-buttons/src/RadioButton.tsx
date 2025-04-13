import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label?: string;
  color?: string;
  size?: number;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  selected = false,
  onPress,
  label,
  color = '#007AFF',
  size = 24,
  labelStyle,
  containerStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.radio,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: color,
          },
        ]}
      >
        {selected && (
          <View
            style={[
              styles.selected,
              {
                width: size * 0.6,
                height: size * 0.6,
                borderRadius: size * 0.3,
                backgroundColor: color,
              },
            ]}
          />
        )}
      </View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginRight: 10,
  },
  selected: {},
  label: {
    fontSize: 16,
  },
});

export default RadioButton;