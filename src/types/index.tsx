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

export interface ThemeInterface {
  colors: {
    black: string;
    tealLighter: string;
    tealDark: string;
  },
  breakpoints: {
    sm: string;
    md: string;
  },
  rem: string;
  em: string;
}

export interface LinkProps {
  className?: string;
  href: string;
}

export interface EntryProps {
  className?: string;
  entry: EntryInterface;
}

export interface ButtonProps {
  className?: string;
  type: string;
  disabled: boolean;
  ariaBusy: boolean;
  onClick?(): void;
  shrink?: boolean;
}

export type CubeFaceType = 'front' | 'back' | 'top' | 'bottom' | 'left' | 'right';
export interface CubeProps {
  className?: string;
  face: CubeFaceType;
  front: React.ReactChild;
  back: React.ReactChild;
  top: React.ReactChild;
  bottom: React.ReactChild;
  left: React.ReactChild;
  right: React.ReactChild;
  zoomOut: VoidFunction;
}

export interface AppState {
  context: ContextProps,
  dynamicTheme: dynamicThemeType
}

export type dynamicThemeType = {
  cube: {
    width: string;
    height: string;
    translateZ: string;
  },
  face: {
    width: string;
    height: string;
    translateZ: string;
  }
}

export type toggleNavbar = (e: React.MouseEvent<HTMLElement>) => void;
export type setSnackbarTextType = (text: string) => void;
export type saveToStateType = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type handleChangeType = (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;

export interface ContextProps {
  snackBarText: string;
  navbarOpen: boolean;
  toggleNavbar: toggleNavbar;
  setSnackbarText: setSnackbarTextType;
}
export interface HeaderProps {
  className?: string;
}

export interface EntryInterface {
  id: string;
  title: string;
  body: string;
  __typename: string;
}

export interface DynamicTextareaProps {
  className?: string;
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
  className?: string;
  onFetchMore(): void;
}
export interface CreateEntryProps {
  className?: string;
}
