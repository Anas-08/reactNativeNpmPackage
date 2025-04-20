import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
const CustomCaptcha = ({ onValidate, operation = 'addition', questionPrompt = 'Solve:', validateButtonText = 'Validate', refreshButtonText = 'Refresh', placeholderText = 'Enter answer', successMessage = '✔ Correct!', failureMessage = '❌ Try again.', textColor = '#000', backgroundColor = '#FFF', buttonStyle = {}, timeoutInSeconds, autoValidate = true, showFeedback = true, }) => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [timer, setTimer] = useState(timeoutInSeconds !== null && timeoutInSeconds !== void 0 ? timeoutInSeconds : 0);
    const timerRef = useRef(null);
    const generateCaptcha = () => {
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
    const getCorrectAnswer = () => {
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
    const getOperatorSymbol = () => {
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
    const validateCaptcha = () => {
        const correct = getCorrectAnswer();
        const inputVal = parseFloat(userInput);
        const isAnswerCorrect = operation === 'division'
            ? Math.abs(inputVal - correct) < 0.1
            : inputVal === correct;
        setIsValid(isAnswerCorrect);
        onValidate(isAnswerCorrect);
        if (showFeedback) {
            setFeedback(isAnswerCorrect ? successMessage : failureMessage);
        }
    };
    const handleInputChange = (text) => {
        setUserInput(text);
        if (autoValidate) {
            const correct = getCorrectAnswer();
            const inputVal = parseFloat(text);
            const isAnswerCorrect = operation === 'division'
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
            if (timerRef.current)
                clearInterval(timerRef.current);
        };
    }, []);
    useEffect(() => {
        if (timeoutInSeconds) {
            timerRef.current = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        setFeedback('❌ Timed out!');
                        onValidate(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    }, [timeoutInSeconds]);
    return (React.createElement(View, { style: [styles.container, { backgroundColor }] },
        React.createElement(Text, { style: [styles.question, { color: textColor }] },
            questionPrompt,
            " ",
            num1,
            " ",
            getOperatorSymbol(),
            " ",
            num2,
            " ="),
        React.createElement(TextInput, { style: [styles.input, { color: textColor, borderColor: textColor }], value: userInput, onChangeText: handleInputChange, keyboardType: "numeric", placeholder: placeholderText, placeholderTextColor: textColor }),
        showFeedback && feedback.length > 0 && (React.createElement(Text, { style: { color: isValid ? 'green' : 'red', marginBottom: 10 } }, feedback)),
        timeoutInSeconds && timer > 0 && (React.createElement(Text, { style: { color: 'gray', marginBottom: 10 } },
            "\u23F3 ",
            timer,
            " seconds remaining")),
        React.createElement(View, { style: styles.buttonContainer },
            React.createElement(TouchableOpacity, { style: [styles.button, buttonStyle], onPress: validateCaptcha },
                React.createElement(Text, { style: styles.buttonText }, validateButtonText)),
            React.createElement(TouchableOpacity, { style: [styles.button, buttonStyle], onPress: generateCaptcha },
                React.createElement(Text, { style: styles.buttonText }, refreshButtonText)))));
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
