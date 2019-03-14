import { StoreValue } from 'apollo-utilities';

export interface PersistentStorage<T> {
  getItem: (key: string) => Promise<T> | T;
  setItem: (key: string, data: T) => Promise<void> | void;
  removeItem: (key: string) => Promise<void> | void;
}

export type PersistedData<T> = T | string | null;

export interface NormalizedCacheObject {
  [dataId: string]: StoreObject;
}

export interface StoreObject {
  __typename?: string;
  [storeFieldKey: string]: StoreValue;
}

export interface Theme {
  colors: {
    black: string;
    tealLighter: string;
    tealDark: string;
  },
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  rem: string;
  em: string;
}

export interface LinkProps {
  className?: string;
  href: string;
}