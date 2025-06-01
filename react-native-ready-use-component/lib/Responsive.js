import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
// Base dimensions (iPhone 13 dimensions)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;
const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const isTablet = () => {
    const pixelDensity = PixelRatio.get();
    const adjustedWidth = SCREEN_WIDTH * pixelDensity;
    const adjustedHeight = SCREEN_HEIGHT * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    }
    else {
        return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
    }
};
const isSmallDevice = SCREEN_WIDTH < 350;
const responsive = {
    scale,
    verticalScale,
    moderateScale,
    isTablet,
    isSmallDevice,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    pixelRatio: PixelRatio.get(),
    platform: Platform.OS,
};
export default responsive;
