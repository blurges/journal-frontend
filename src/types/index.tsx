import { StoreValue } from 'apollo-utilities';
import { Location as HLocation } from "history";

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

export interface InputProps {
  className?: string;
  disabled: boolean;
  ariaBusy: boolean;
  ariaLabel: string;
  type: string;
  name: string;
  placeholder: string;
  autoComplete: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  required: boolean;
}

// Reach Router typings from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9b1350a79b61ea91616b7d37433f528f1228ea21/types/reach__router/index.d.ts
export type WindowLocation = Window["location"] & HLocation;
export type RouteComponentProps<TParams = {}> = Partial<TParams> & {
  path?: string;
  default?: boolean;
  location?: WindowLocation;
  navigate?: NavigateFn;
  uri?: string;
};
export type NavigateFn = (to: string, options?: NavigateOptions<{}>) => void;
export interface NavigateOptions<TState> {
  state?: TState;
  replace?: boolean;
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
export interface SignInProps {
  className?: string;
}
