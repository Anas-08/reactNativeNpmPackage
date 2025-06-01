import { Dimensions, Platform, PixelRatio, ScaledSize } from 'react-native';

type ResponsiveType = {
  scale: (size: number) => number;
  verticalScale: (size: number) => number;
  moderateScale: (size: number, factor?: number) => number;
  isTablet: () => boolean;
  isSmallDevice: boolean;
  width: number;
  height: number;
  pixelRatio: number;
  platform: string;
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }: ScaledSize = Dimensions.get('window');

// Base dimensions (iPhone 13 dimensions)
const BASE_WIDTH: number = 390;
const BASE_HEIGHT: number = 844;

const scale = (size: number): number => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size: number): number => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
const moderateScale = (size: number, factor: number = 0.5): number => 
  size + (scale(size) - size) * factor;

const isTablet = (): boolean => {
  const pixelDensity: number = PixelRatio.get();
  const adjustedWidth: number = SCREEN_WIDTH * pixelDensity;
  const adjustedHeight: number = SCREEN_HEIGHT * pixelDensity;
  
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else {
    return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
  }
};

const isSmallDevice: boolean = SCREEN_WIDTH < 350;

const responsive: ResponsiveType = {
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