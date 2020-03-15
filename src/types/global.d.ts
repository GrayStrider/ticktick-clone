declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}
