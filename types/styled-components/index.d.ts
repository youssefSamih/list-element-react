import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: string;
      green: string;
      blue: string;
      white: string;
      black: {
        100: string;
        200: string;
        300: string;
      };
    };
  }
}
