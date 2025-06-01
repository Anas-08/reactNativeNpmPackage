import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions, } from 'react-native';
const { width } = Dimensions.get('window');
const CustomToast = ({ message, duration = 2000, backgroundColor = '#333', textColor = '#fff', position = 'bottom', showCloseButton = false, onClose, visible, icon, animationType = 'spring', progressBar = false, }) => {
    const translateY = useRef(new Animated.Value(position === 'top' ? -100 : 100)).current;
    const progress = useRef(new Animated.Value(0)).current;
    const timeoutRef = useRef(null);
    useEffect(() => {
        if (visible) {
            Animated[animationType](translateY, Object.assign({ toValue: 0, useNativeDriver: true }, (animationType === 'timing' ? { duration: 300 } : {}))).start();
            if (duration > 0) {
                if (timeoutRef.current)
                    clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(hideToast, duration);
                if (progressBar) {
                    progress.setValue(0);
                    Animated.timing(progress, {
                        toValue: 1,
                        duration,
                        useNativeDriver: false,
                    }).start();
                }
            }
        }
        return () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
        };
    }, [visible]);
    const hideToast = () => {
        Animated.timing(translateY, {
            toValue: position === 'top' ? -100 : 100,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            if (onClose)
                onClose();
        });
    };
    if (!visible)
        return null;
    return (React.createElement(Animated.View, { style: [
            styles.toastContainer,
            {
                transform: [{ translateY }],
                top: position === 'top' ? 40 : undefined,
                bottom: position === 'bottom' ? 40 : undefined,
                backgroundColor,
            },
        ] },
        icon && React.createElement(View, { style: { marginRight: 8 } }, icon),
        React.createElement(Text, { style: [styles.toastText, { color: textColor }] }, message),
        showCloseButton && (React.createElement(TouchableOpacity, { onPress: hideToast, style: styles.closeButton },
            React.createElement(Text, { style: { color: textColor, fontWeight: 'bold' } }, "\u2715"))),
        progressBar && (React.createElement(Animated.View, { style: [
                styles.progressBar,
                {
                    backgroundColor: textColor,
                    width: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['100%', '0%'],
                    }),
                },
            ] }))));
};
const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        marginHorizontal: 20,
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: width - 40,
        zIndex: 999,
    },
    toastText: {
        flex: 1,
        fontSize: 16,
    },
    closeButton: {
        marginLeft: 12,
    },
    progressBar: {
        position: 'absolute',
        height: 3,
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
});
export default CustomToast;
