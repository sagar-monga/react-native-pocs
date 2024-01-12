// Creating a common file to access env vars
import Config from 'react-native-config';

export const Env = {
    PUBLIC_ENVIRONMENT: Config.PUBLIC_ENVIRONMENT ?? 'Default',
}