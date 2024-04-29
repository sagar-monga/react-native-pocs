import Config from "react-native-config";

type ConfigModel = {
    environment: string;
    baseUrl: string;
}

export const env: ConfigModel = {
    environment: Config.ENVIRONMENT,
    baseUrl: Config.BASE_URL
}