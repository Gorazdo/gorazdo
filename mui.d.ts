// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    name: string;
    type: string;
  }
}
declare module '@material-ui/core/styles/createPalette' {
  interface PaletteColor {
    pale: string;
  }

  interface PaletteOptions {
    misc: any;
  }

  interface SimplePaletteColorOptions {
    pale?: string;
  }
}

// declare module '@material-ui/core/styles/createMixins' {
//   interface Mixins {
//     scrollbar: Record<string, any>;
//     minicardRoot: Record<string, any>;
//     minicardContent: Record<string, any>;
//     microcardRoot: Record<string, any>;
//     microcardContent: Record<string, any>;
//     microproductsGrid: Record<string, any>;
//   }
// }
