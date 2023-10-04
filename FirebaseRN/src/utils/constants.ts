import {FirebaseAuthTypes} from '@react-native-firebase/auth';

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

export enum LoginUser {
  google = 'Google',
  dummy = 'Dummy',
}

/**
 * Types
 */

// export type OldDummyUser = {
//   user: {
//     email: string;
//     name: string;
//   };
//   platform: string;
// };

// export type OldGoogleUser = FirebaseAuthTypes.User & {
//   platform: string;
// };

type DummyUser = {
  user: {
    email: string;
    name: string;
  };
  platform: LoginUser.dummy;
};

export type GoogleUser = {
  user: Partial<FirebaseAuthTypes.User>;
  platform: LoginUser.google;
};

type CommonUserProps = {
  id: string;
  isInternalUser: boolean;
  featuresAvailable: number[];
};

export type UserType = (DummyUser | GoogleUser) & CommonUserProps;

type Without<T, U> = {[P in Exclude<keyof T, keyof U>]?: never};
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type UnionKeys<T> = T extends T ? keyof T : never;

// Improve intellisense
type Expand<T> = T extends T ? {[K in keyof T]: T[K]} : never;

type OneOf<T extends {}[]> = {
  [K in keyof T]: Expand<
    T[K] & Partial<Record<Exclude<UnionKeys<T[number]>, keyof T[K]>, never>>
  >;
}[number];

// 'platform' is the discriminant in this type
export type OldUserType = OneOf<[GoogleUser, DummyUser]>;
