// Mock JSX runtime to resolve jsx-runtime errors
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): JSX.Element;
  export function jsxs(type: any, props: any, key?: any): JSX.Element;
  export function Fragment(props: { children?: any }): JSX.Element;
}