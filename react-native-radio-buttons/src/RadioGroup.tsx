import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import RadioButton from './RadioButton';

interface RadioGroupProps {
  options: { label: string; value: string }[];
  selectedOption: string | null;
  onSelect: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  radioProps?: Partial<React.ComponentProps<typeof RadioButton>>;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options = [],
  selectedOption,
  onSelect,
  containerStyle,
  radioProps = {},
}) => {
  return (
    <View style={containerStyle}>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          selected={option.value === selectedOption}
          onPress={() => onSelect(option.value)}
          label={option.label}
          {...radioProps}
        />
      ))}
    </View>
  );
};

export default RadioGroup;