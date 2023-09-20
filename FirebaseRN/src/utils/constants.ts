import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {User} from '@react-native-google-signin/google-signin';

/**
 * Constants
 */

// reference width & heights are of iPhone 11.
export const referenceWidth = 414;
export const referenceHeight = 896;

export const StyleConfig = Object.freeze({
  colors: Object.freeze({
    googleBlue: '#4285F4',
  }),
});

/**
 * Enums
 */

export enum FontSize {
  small = 16,
  medium = 20,
  large = 24,
  xl = 28,
  xxl = 32,
}

export enum BasedAxis {
  height = 'height',
  width = 'width',
}

/**
 * Types
 */

export type DummyUser = {
  user: {
    email: string;
    name: string;
    isDummy: boolean;
  }
  platform: string;
}

export type GoogleUser =  FirebaseAuthTypes.UserCredential & {
  platform: string;
}

// 'platform' is the discriminant in this type
export type UserType = GoogleUser | DummyUser;
