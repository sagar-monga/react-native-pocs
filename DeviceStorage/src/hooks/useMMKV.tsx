import { MMKVSingleton } from "../extensions/mmkv"

export const useMMKV = () => {
    const storage = MMKVSingleton.getInstance();
}