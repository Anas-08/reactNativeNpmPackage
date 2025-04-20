// import React, { useEffect, useRef } from 'react';
// import {
//   Text,
//   StyleSheet,
//   Animated,
//   useWindowDimensions,
//   TouchableOpacity,
//   View,
//   Modal,
//   Platform,
// } from 'react-native';

// export interface CustomToastMessageProps {
//   message: string;
//   visible: boolean;
//   duration?: number;
//   onHide?: () => void;
//   backgroundColor?: string;
//   textColor?: string;
//   textSize?: number;
//   borderColor?: string;
//   borderWidth?: number;
//   progressLineColor?: string;
//   progressLineHeight?: number;
//   zIndex?: number;
//   positionTop?: number;
//   positionLeft?: number;
//   centerScreen?: boolean;
// }

// const CustomToastMessage: React.FC<CustomToastMessageProps> = ({
//   message,
//   visible,
//   duration = 3000,
//   onHide,
//   backgroundColor = '#333',
//   textColor = '#FFF',
//   textSize = 16,
//   borderColor = 'transparent',
//   borderWidth = 0,
//   progressLineColor = '#FF6347',
//   progressLineHeight = 4,
//   zIndex = 9999,
//   positionTop = 50,
//   positionLeft,
//   centerScreen = false,
// }) => {
//   const { width, height } = useWindowDimensions();
//   const TOASTER_WIDTH = width - 40;
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const progressAnim = useRef(new Animated.Value(0)).current;

//   const calculatedLeft = positionLeft ?? (width - TOASTER_WIDTH) / 2;
//   const calculatedTop = centerScreen ? height / 2 - 50 : positionTop;

//   useEffect(() => {
//     if (visible) {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();

//       Animated.timing(progressAnim, {
//         toValue: 1,
//         duration: duration,
//         useNativeDriver: false,
//       }).start();

//       const timer = setTimeout(() => {
//         hideToaster();
//       }, duration);

//       return () => clearTimeout(timer);
//     } else {
//       fadeAnim.setValue(0);
//       progressAnim.setValue(0);
//     }
//   }, [visible]);

//   const hideToaster = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       onHide?.();
//     });
//   };

//   return (
//     <Modal transparent visible={visible} animationType="none">
//       <View style={styles.modalWrapper}>
//         <Animated.View
//           style={[
//             styles.container,
//             {
//               opacity: fadeAnim,
//               backgroundColor,
//               borderColor,
//               borderWidth,
//               top: calculatedTop,
//               left: calculatedLeft,
//               width: TOASTER_WIDTH,
//               zIndex,
//             },
//           ]}
//         >
//           <TouchableOpacity style={styles.closeButton} onPress={hideToaster}>
//             <Text style={[styles.closeText, { color: textColor }]}>✕</Text>
//           </TouchableOpacity>
//           <Text style={[styles.message, { color: textColor, fontSize: textSize }]}>{message}</Text>

//           <View style={[styles.progressContainer, { height: progressLineHeight }]}>
//             <Animated.View
//               style={{
//                 backgroundColor: progressLineColor,
//                 width: progressAnim.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: ['0%', '100%'],
//                 }),
//                 height: progressLineHeight,
//               }}
//             />
//           </View>
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalWrapper: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   container: {
//     position: 'absolute',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//   },
//   message: {
//     textAlign: 'center',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//   },
//   closeText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   progressContainer: {
//     width: '100%',
//     borderRadius: 2,
//     overflow: 'hidden',
//     marginTop: 10,
//     backgroundColor: '#888',
//   },
// });

// export default CustomToastMessage;

import React, { useEffect, useRef } from 'react';
import {
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

export interface CustomToastMessageProps {
  message: string;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
  backgroundColor?: string;
  textColor?: string;
  textSize?: number;
  borderColor?: string;
  borderWidth?: number;
  progressLineColor?: string;
  progressLineHeight?: number;
  zIndex?: number;
  positionTop?: number;
  positionLeft?: number;
  centerScreen?: boolean;
}

const CustomToastMessage: React.FC<CustomToastMessageProps> = ({
  message,
  visible,
  duration = 3000,
  onHide,
  backgroundColor = '#333',
  textColor = '#FFF',
  textSize = 16,
  borderColor = 'transparent',
  borderWidth = 0,
  progressLineColor = '#FF6347',
  progressLineHeight = 4,
  zIndex = 9999,
  positionTop = 50,
  positionLeft,
  centerScreen = false,
}) => {
  const { width, height } = useWindowDimensions();
  const fadeAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
  const progressAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

  const TOASTER_WIDTH = width - 40;
  const calculatedLeft = positionLeft ?? (width - TOASTER_WIDTH) / 2;
  const calculatedTop = centerScreen ? height / 2 - 50 : positionTop;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.timing(progressAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();

      const timer = setTimeout(() => {
        hideToaster();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      fadeAnim.setValue(0);
      progressAnim.setValue(0);
    }
  }, [visible]);

  const hideToaster = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onHide?.();
    });
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.modalWrapper}>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              backgroundColor,
              borderColor,
              borderWidth,
              top: calculatedTop,
              left: calculatedLeft,
              width: TOASTER_WIDTH,
              zIndex,
            },
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={hideToaster}>
            <Text style={[styles.closeText, { color: textColor }]}>✕</Text>
          </TouchableOpacity>

          <Text style={[styles.message, { color: textColor, fontSize: textSize }]}>
            {message}
          </Text>

          <View style={[styles.progressContainer, { height: progressLineHeight }]}>
            <Animated.View
              style={{
                backgroundColor: progressLineColor,
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
                height: progressLineHeight,
              }}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    position: 'absolute',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  message: {
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    width: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: '#888',
  },
});

export default CustomToastMessage;
