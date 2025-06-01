
# Hi, I'm Anas! 👋

# Custom Radio Button, Toast Message, Checkbox, Responsive

A brief description of what this project(package) does and who it's for

# react-native-ready-use-component

A customizable React Native UI library featuring Checkbox, Radio Button, Toast, and Responsive utility components. Designed for modern mobile UI development with flexibility, responsiveness, and ease of use in mind.

## ✨ Features

- ✅ **Custom Checkbox Group**: Multi-select checkboxes with customizable shapes (square/rectangle), colors, sizes, and labels.
- 📻 **Custom Radio Button Group**: Single-select radio buttons with customizable shapes (circle/disc/square/rectangle), colors, and sizes.
- 🔔 **Custom Toast**: Configurable toast notifications with animations, positioning, progress bar, and close button options.
- 📏 **Responsive Utility**: Helper functions for responsive design, including scaling, tablet detection, and device size checks.

---

## 📦 Installation

To install the library, run the following command in your terminal:

```bash
npm install react-native-ready-use-component
```

Ensure you have `react-native` installed in your project, as these components depend on React Native core libraries.

---

## 📦 Usage and Examples

Below are detailed instructions on how to import and use each component, including all available props and their descriptions.

### 1. CustomCheckboxGroup

A customizable checkbox group component that supports multiple selections.

#### Import
```javascript
import CustomCheckBoxGroup from 'react-native-ready-use-component';
```

#### Example
```javascript
import React from 'react';
import { View } from 'react-native';
import CustomCheckBoxGroup from 'react-native-ready-use-component';

const App = () => {
  return (
    <View>
      <CustomCheckBoxGroup
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        selectedValues={['apple']}
        onChange={(selected) => console.log('Selected:', selected)}
        type="rectangle"
        color="#6200ee"
        size={30}
        labelStyle={{ fontSize: 18, color: '#333' }}
        sizeMode="contain"
        showCheckmark={true}
      />
    </View>
  );
};
```

#### Props
| Prop            | Type                          | Default       | Description                                                                 |
|-----------------|-------------------------------|---------------|-----------------------------------------------------------------------------|
| `options`       | `CheckboxOption[]`           | **Required**  | Array of objects with `label` (string) and `value` (string) for each checkbox. |
| `selectedValues`| `string[]`                   | `[]`          | Array of selected values.                                                   |
| `onChange`      | `(selected: string[]) => void`| -             | Callback function triggered when selection changes.                         |
| `type`          | `'square' | 'rectangle'`      | `'square'`    | Shape of the checkbox.                                                     |
| `color`         | `string`                     | `'#FF6347'`  | Color of the checkbox when selected (border and fill).                      |
| `size`          | `number`                     | `24`          | Size of the checkbox (width and height in pixels).                         |
| `labelStyle`    | `TextStyle`                  | -             | Custom style for the checkbox labels.                                       |
| `sizeMode`      | `'center' | 'cover' | 'contain'` | `'center'`    | Controls how the checkbox scales: `center` (fixed size), `cover` (stretch), or `contain` (constrained). |
| `showCheckmark` | `boolean`                    | `true`        | Whether to display a checkmark when the checkbox is selected.               |

---

### 2. CustomRadioButtonGroup

A customizable radio button group component for single-selection input.

#### Import
```javascript
import CustomRadioButtonGroup from 'react-native-ready-use-component';
```

#### Example
```javascript
import React from 'react';
import { View } from 'react-native';
import CustomRadioButtonGroup from 'react-native-ready-use-component';

const App = () => {
  return (
    <View>
      <CustomRadioButtonGroup
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]}
        selectedValue="female"
        onChange={(value) => console.log('Selected:', value)}
        type="circle"
        size={28}
        borderColor="#007bff"
        fillColor="#007bff"
        labelStyle={{ fontSize: 16, color: '#333' }}
      />
    </View>
  );
};
```

#### Props
| Prop           | Type                          | Default       | Description                                                                 |
|----------------|-------------------------------|---------------|-----------------------------------------------------------------------------|
| `options`      | `RadioOption[]`              | **Required**  | Array of objects with `label` (string) and `value` (string) for each radio button. |
| `selectedValue`| `string`                     | `''`          | The currently selected value.                                              |
| `onChange`     | `(selected: string) => void` | -             | Callback function triggered when a radio button is selected.                |
| `type`         | `'circle' | 'disc' | 'square' | 'rectangle'` | `'circle'` | Shape of the radio button.                                                 |
| `size`         | `number`                     | `24`          | Size of the radio button (width and height in pixels).                     |
| `borderColor`  | `string`                     | `'#FF6347'`  | Color of the radio button border.                                          |
| `fillColor`    | `string`                     | `'#FF6347'`  | Color of the inner fill when selected.                                     |
| `labelStyle`   | `TextStyle`                  | -             | Custom style for the radio button labels.                                  |

---

### 3. CustomToast

A customizable toast notification component with animation and progress bar support.

#### Import
```javascript
import CustomToast from 'react-native-ready-use-component';
```

#### Example
```javascript
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomToast from 'react-native-ready-use-component';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Show Toast" onPress={() => setVisible(true)} />
      <CustomToast
        message="Operation completed successfully!"
        visible={visible}
        duration={3000}
        backgroundColor="#4caf50"
        textColor="#fff"
        position="top"
        showCloseButton={true}
        onClose={() => setVisible(false)}
        animationType="spring"
        progressBar={true}
      />
    </View>
  );
};
```

#### Props
| Prop              | Type                          | Default       | Description                                                                 |
|-------------------|-------------------------------|---------------|-----------------------------------------------------------------------------|
| `message`         | `string`                     | **Required**  | The message to display in the toast.                                       |
| `visible`         | `boolean`                    | **Required**  | Controls whether the toast is visible.                                      |
| `duration`        | `number`                     | `2000`        | Duration (in milliseconds) the toast remains visible (0 for no auto-hide).  |
| `backgroundColor` | `string`                     | `'#333'`      | Background color of the toast.                                             |
| `textColor`       | `string`                     | `'#fff'`      | Color of the toast message text.                                           |
| `position`        | `'top' | 'bottom'`           | `'bottom'`    | Position of the toast on the screen.                                       |
| `showCloseButton` | `boolean`                    | `false`       | Whether to show a close button.                                            |
| `onClose`         | `() => void`                 | -             | Callback function triggered when the toast is closed.                      |
| `icon`            | `React.ReactNode`            | -             | Optional icon to display in the toast.                                     |
| `animationType`   | `'spring' | 'timing'`        | `'spring'`    | Animation type for showing/hiding the toast.                               |
| `progressBar`     | `boolean`                    | `false`       | Whether to show a progress bar indicating the toast duration.               |

---

### 4. Responsive Utility

A utility module for responsive design in React Native, providing scaling functions and device detection.

#### Import
```javascript
import responsive from 'react-native-ready-use-component';
```

#### Example
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import responsive from 'react-native-ready-use-component';

const styles = StyleSheet.create({
  container: {
    width: responsive.scale(100),
    height: responsive.verticalScale(50),
    padding: responsive.moderateScale(10),
  },
  text: {
    fontSize: responsive.moderateScale(16),
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {responsive.isTablet() ? 'Tablet' : 'Phone'} Device
      </Text>
      <Text style={styles.text}>
        Screen Width: {responsive.width}, Pixel Ratio: {responsive.pixelRatio}
      </Text>
    </View>
  );
};
```

#### Methods and Properties
| Name              | Type                          | Description                                                                 |
|-------------------|-------------------------------|-----------------------------------------------------------------------------|
| `scale(size: number)` | `number`                  | Scales a size based on the screen width relative to a base width (390px).   |
| `verticalScale(size: number)` | `number`           | Scales a size based on the screen height relative to a base height (844px). |
| `moderateScale(size: number, factor?: number)` | `number` | Scales a size with a moderation factor (default: 0.5) for balanced scaling. |
| `isTablet()`      | `() => boolean`              | Detects if the device is a tablet based on screen size and pixel density.   |
| `isSmallDevice`   | `boolean`                    | True if the screen width is less than 350px.                               |
| `width`           | `number`                     | Current screen width in pixels.                                            |
| `height`          | `number`                     | Current screen height in pixels.                                           |
| `pixelRatio`      | `number`                     | Device pixel ratio (via `PixelRatio.get()`).                               |
| `platform`        | `string`                     | Current platform (`ios` or `android`).                                     |

---

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss your proposed changes. Ensure you update tests as appropriate.



## License

[MIT](https://choosealicense.com/licenses/mit/)