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

export interface EntryProps {
  entry: EntryInterface;
}

export interface ButtonProps {
  type: string;
  disabled: boolean;
  ariaBusy: boolean;
  className?: string;
  onClick?(): void;
  shrink?: boolean;
}

export interface AppState {
  navbarOpen: boolean;
}

export type toggleNavbar = (e: React.MouseEvent<HTMLElement>) => void;
export type saveToState = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type handleChangeType = (e: React.FormEvent<HTMLTextAreaElement>) => void;

export interface ContextProps {
  navbarOpen: boolean;
  toggleNavbar: toggleNavbar;
}

export interface EntryInterface {
  id: string;
  title: string;
  body: string;
  __typename: string;
}

export interface DynamicTextareaProps {
  id: string;
  name: string;
  spellCheck: boolean;
  placeholder: string;
  cols: number;
  rows: number;
  maxRows: number;
  required: boolean;
  value: string;
  onChange: handleChangeType;
  readOnly: boolean;
}

export interface DeleteEntryProps {  
  id: string;
  confirmEdit: boolean;
  confirmDelete: boolean;
  updating: boolean;
  deleting: boolean;
  beginDelete(): void;
  cancelDelete(): void;
  deleteEntry(): void;
}

export interface UpdateEntryProps {  
  confirmEdit: boolean;
  confirmDelete: boolean;
  updating: boolean;
  deleting: boolean;
  beginUpdate(): void;
  cancelUpdate(): void;
  updateEntry(): void;
}

export interface InfiniteScrollProps {
  onFetchMore(): void;
}
