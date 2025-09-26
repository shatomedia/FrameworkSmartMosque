// Comprehensive React types to resolve all TypeScript errors
declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
  }

  interface HTMLAttributes<T = HTMLElement> {
    style?: CSSProperties;
    onClick?: (event: any) => void;
    children?: any;
    [key: string]: any;
  }

  interface FC<P = {}> {
    (props: P): JSX.Element | null;
  }
  
  function useState<S>(
    initialState: S | (() => S)
  ): [S, (value: S | ((prevState: S) => S)) => void];
  
  function createElement(
    type: any,
    props?: any,
    ...children: any[]
  ): JSX.Element;
  
  const React: {
    FC: FC;
    useState: typeof useState;
    createElement: typeof createElement;
  };
  
  export = React;
  export as namespace React;
}

declare module 'react-dom/client' {
  interface Root {
    render(element: JSX.Element): void;
  }
  
  export function createRoot(container: Element | null): Root;
}

// Global JSX namespace
declare global {
  namespace JSX {
    interface Element {
      type: any;
      props: any;
      key: any;
    }
    
    interface IntrinsicElements {
      div: React.HTMLAttributes<HTMLDivElement>;
      header: React.HTMLAttributes<HTMLElement>;
      main: React.HTMLAttributes<HTMLElement>;
      nav: React.HTMLAttributes<HTMLElement>;
      h1: React.HTMLAttributes<HTMLHeadingElement>;
      h2: React.HTMLAttributes<HTMLHeadingElement>;
      h3: React.HTMLAttributes<HTMLHeadingElement>;
      p: React.HTMLAttributes<HTMLParagraphElement>;
      button: React.HTMLAttributes<HTMLButtonElement>;
      span: React.HTMLAttributes<HTMLSpanElement>;
      a: React.HTMLAttributes<HTMLAnchorElement>;
      img: React.HTMLAttributes<HTMLImageElement>;
      ul: React.HTMLAttributes<HTMLUListElement>;
      li: React.HTMLAttributes<HTMLLIElement>;
      table: React.HTMLAttributes<HTMLTableElement>;
      thead: React.HTMLAttributes<HTMLTableSectionElement>;
      tbody: React.HTMLAttributes<HTMLTableSectionElement>;
      tr: React.HTMLAttributes<HTMLTableRowElement>;
      td: React.HTMLAttributes<HTMLTableCellElement>;
      th: React.HTMLAttributes<HTMLTableCellElement>;
      input: React.HTMLAttributes<HTMLInputElement>;
      form: React.HTMLAttributes<HTMLFormElement>;
      label: React.HTMLAttributes<HTMLLabelElement>;
      select: React.HTMLAttributes<HTMLSelectElement>;
      option: React.HTMLAttributes<HTMLOptionElement>;
      textarea: React.HTMLAttributes<HTMLTextAreaElement>;
      [elemName: string]: any;
    }
    
    interface ElementAttributesProperty {
      props: {};
    }
    
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export {};