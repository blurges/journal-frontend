import { StoreValue } from 'apollo-utilities';
import { Location as HLocation } from "history";
import {ApolloError} from 'apollo-client'

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

export interface LinksContainerProps {
  className?: string;
}

export interface ThemeInterface {
  colors: {
    black: string;
    white: string;
    tealDark: string;
    tealLight: string;
    tealLighter: string;
    tealLightest: string;
  },
  breakpoints: {
    sm: string;
    md: string;
  },
  boxShadow: {
    bottom: string;
  },
  borderRadius: string;
  rem: string;
  em: string;
}

export interface LinkProps {
  className?: string;
  to: string;
}

export interface EntryProps {
  className?: string;
  entry: EntryInterface;
  setAlertOptions: (options: setAlertOptionsParameters) => void; 
}

export interface StyledComponentProps {
  className?: string;
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
  autoFocus?: boolean;
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

export interface ReduxState {
  navbarOpen: boolean;
  alertType: 'info' | 'error';
  alertTimeout: number;
  alertText: string;
}

export interface AppState {
  cacheRestored: boolean;
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
export type setAlertOptionsType = (options: setAlertOptionsParameters) => void;
export type saveToStateType = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type handleChangeType = (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;

export interface HeaderProps {
  className?: string;
  user: User;
}
export interface SignOutProps {
  className?: string;
  user: User;
}

export interface User {
  email: string;
  id: string;
  name: string;
  __typename: "User";
}

export interface AlertProps {
  className?: string;
  alertText: string;
  alertType: 'info' | 'error';
  alertTimeout: number;
  setAlertOptions: (options: setAlertOptionsParameters) => void; 
}

export interface EntryInterface {
  id: string;
  tempId: string;
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
export interface setAlertOptionsParameters {
  text: string;
  type: 'info' | 'error';
  timeout?: number;
}
export interface SignInProps {
  className?: string;
  user: User;
  handleGraphqlErrors: (payload:ApolloError) => void; 
}
export interface HomeProps {
  className?: string;
  user: User;
}
export interface SignUpProps {
  className?: string;
  user: User;
}
export interface AccountProps {
  className?: string;
  user: User;
}
export interface EntriesProps {
  className?: string;
  user: User;
}
export interface ResetPasswordProps {
  className?: string;
  resetToken?: string;
  user: User;
}
export interface ForgotPasswordProps {
  className?: string;
  user: User;
}
