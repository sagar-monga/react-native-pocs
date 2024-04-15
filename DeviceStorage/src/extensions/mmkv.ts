import {MMKV} from 'react-native-mmkv';

export class MMKVSingleton {
  private static storage: MMKV;

  public static getInstance() {
    if (!MMKVSingleton.storage) {
      MMKVSingleton.storage = new MMKV();
    }

    return MMKVSingleton.storage;
  }

  getString(key: string) {
    return MMKVSingleton.storage.getString(key);
  }

  getBoolean(key: string) {
    return MMKVSingleton.storage.getBoolean(key);
  }

  getNumber(key: string) {
    return MMKVSingleton.storage.getNumber(key);
  }

  getObject(key: string) {
    const str = MMKVSingleton.storage.getString(key);
    const obj = JSON.parse(str);
    return obj;
  }

  setString(key: string, value: string | boolean | number | object) {
    if (typeof value === 'object') {
      return MMKVSingleton.storage.set(key, JSON.stringify(value));
    } else {
      return MMKVSingleton.storage.set(key, value);
    }
  }

  contains(key: string) {
    return MMKVSingleton.storage.contains(key);
  }

  delete(key: string) {
    return MMKVSingleton.storage.delete(key);
  }

  deleteAll() {
    return MMKVSingleton.storage.clearAll();
  }
}
