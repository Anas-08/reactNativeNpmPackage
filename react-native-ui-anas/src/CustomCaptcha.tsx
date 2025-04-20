import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

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

const CustomCaptcha: React.FC<CustomCaptchaProps> = ({
  onValidate,
  operation = 'addition',
  questionPrompt = 'Solve:',
  validateButtonText = 'Validate',
  refreshButtonText = 'Refresh',
  placeholderText = 'Enter answer',
  successMessage = '✔ Correct!',
  failureMessage = '❌ Try again.',
  textColor = '#000',
  backgroundColor = '#FFF',
  buttonStyle = {},
  timeoutInSeconds,
  autoValidate = true,
  showFeedback = true,
}: CustomCaptchaProps) => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [timer, setTimer] = useState<number>(timeoutInSeconds ?? 0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const generateCaptcha = (): void => {
    const a = Math.floor(Math.random() * 10 + 1);
    const b = Math.floor(Math.random() * 10 + 1);
    setNum1(a);
    setNum2(b);
    setUserInput('');
    setIsValid(false);
    setFeedback('');
    onValidate(false);
    if (timeoutInSeconds) {
      setTimer(timeoutInSeconds);
    }
  };

  const getCorrectAnswer = (): number => {
    switch (operation) {
      case 'subtraction':
        return num1 - num2;
      case 'multiplication':
        return num1 * num2;
      case 'division':
        return parseFloat((num1 / num2).toFixed(1));
      case 'addition':
      default:
        return num1 + num2;
    }
  };

  const getOperatorSymbol = (): string => {
    switch (operation) {
      case 'subtraction':
        return '-';
      case 'multiplication':
        return '×';
      case 'division':
        return '÷';
      case 'addition':
      default:
        return '+';
    }
  };

  const validateCaptcha = (): void => {
    const correct = getCorrectAnswer();
    const inputVal = parseFloat(userInput);
    const isAnswerCorrect =
      operation === 'division'
        ? Math.abs(inputVal - correct) < 0.1
        : inputVal === correct;

    setIsValid(isAnswerCorrect);
    onValidate(isAnswerCorrect);
    if (showFeedback) {
      setFeedback(isAnswerCorrect ? successMessage : failureMessage);
    }
  };

  const handleInputChange = (text: string): void => {
    setUserInput(text);
    if (autoValidate) {
      const correct = getCorrectAnswer();
      const inputVal = parseFloat(text);
      const isAnswerCorrect =
        operation === 'division'
          ? Math.abs(inputVal - correct) < 0.1
          : inputVal === correct;

      setIsValid(isAnswerCorrect);
      onValidate(isAnswerCorrect);
      if (showFeedback) {
        setFeedback(isAnswerCorrect ? successMessage : failureMessage);
      }
    }
  };

  useEffect(() => {
    generateCaptcha();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeoutInSeconds) {
      timerRef.current = setInterval(() => {
        setTimer((prev: number) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setFeedback('❌ Timed out!');
            onValidate(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [timeoutInSeconds]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.question, { color: textColor }]}>
        {questionPrompt} {num1} {getOperatorSymbol()} {num2} =
      </Text>

      <TextInput
        style={[styles.input, { color: textColor, borderColor: textColor }]}
        value={userInput}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder={placeholderText}
        placeholderTextColor={textColor}
      />

      {showFeedback && feedback.length > 0 && (
        <Text style={{ color: isValid ? 'green' : 'red', marginBottom: 10 }}>
          {feedback}
        </Text>
      )}

      {timeoutInSeconds && timer > 0 && (
        <Text style={{ color: 'gray', marginBottom: 10 }}>
          ⏳ {timer} seconds remaining
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={validateCaptcha}>
          <Text style={styles.buttonText}>{validateButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={generateCaptcha}>
          <Text style={styles.buttonText}>{refreshButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20, padding: 10, borderRadius: 10 },
  question: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 16 },
});

export default CustomCaptcha;
