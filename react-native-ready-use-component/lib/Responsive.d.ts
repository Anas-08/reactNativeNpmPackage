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
declare const responsive: ResponsiveType;
export default responsive;
