
# Hi, I'm Anas! 👋

# Custom Radio Button, Toast Message, Checkbox, Captcha 

A brief description of what this project does and who it's for

# react-native-ui-anas

A customizable React Native UI library including Checkbox, Radio Button, Toast, and CAPTCHA components. Built for modern mobile UI needs with flexibility and simplicity in mind.

## ✨ Features

- ✅ Custom Checkbox Group (square/rectangle, color, size, label)
- ✅ Custom Radio Button Group (circle/square/rectangle)
- ✅ Toast Notifications (position, duration, styling, progress bar)
- ✅ CAPTCHA Component (math operations, auto-validate, timeout, UI customization)

---

## 📦 Installation

```bash
npm install react-native-ui-anas
// in your terminal

```




## 📦 Examples

# Checkbox
## CustomCheckboxGroup

```bash
import { CustomCheckboxGroup } from 'react-native-ui-anas';

<CustomCheckboxGroup
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  selectedValues={['1']}
  onChange={(values) => console.log(values)}
  color="#6200ee"
  type="rectangle"
  size={30}
  showCheckmark={false}
  sizeMode="contain"
/>
```

# Radio Button
## CustomRadioButtonGroup

```bash
import { CustomRadioButtonGroup } from 'react-native-ui-anas';

<CustomRadioButtonGroup
  options={[
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
  ]}
  selectedValue="f"
  onChange={(val) => console.log(val)}
  type="circle"
  color="#007bff"
  size={24}
/>
```

# Toast Message
## CustomToastComponent

```bash
import { CustomToastComponent } from 'react-native-ui-anas';

<CustomToastComponent
  message="Data saved successfully!"
  position="top"
  duration={3000}
  backgroundColor="#4caf50"
  textColor="#fff"
  showProgressBar={true}
/>
```

# Captcha 
## CustomCaptcha

```bash
import { CustomCaptcha } from 'react-native-ui-anas';

<CustomCaptcha
  onValidate={(isValid) => alert(isValid ? 'Correct' : 'Try again')}
  operation="multiplication"
  placeholder="Your answer here"
  promptText="Solve the math problem:"
  successMessage="✔ Correct!"
  failureMessage="❌ Wrong answer!"
  autoValidate={true}
  timeout={10}
  textColor="#000"
  backgroundColor="#f1f1f1"
/>
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
