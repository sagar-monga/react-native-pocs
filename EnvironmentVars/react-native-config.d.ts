declare module 'react-native-config' {
    export interface NativeConfig {
        PUBLIC_ENVIRONMENT?: string;
    }

    export const Config: NativeConfig;
    export default Config;
}