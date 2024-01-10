import { EnvType } from "../types/env";

const Config: EnvType = {
	PUBLIC_ENVIRONMENT: process.env.EXPO_PUBLIC_PUBLIC_ENVIRONMENT ?? "Default",
};

export default Config;
