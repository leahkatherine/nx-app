/* import { createTheme as createMuiTheme, Theme, } from '@mui/material';
import { merge } from 'lodash';
import { createComponents } from './createComponents';
import lightThemeOptions from '../brands/theme';

export const createTheme = (): Theme => {
  const defaultTheme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 481,
        md: 769,
        lg: 1025,
        xl: 1201,
      },
    },
    palette: {
      mode: 'light',
      ...lightThemeOptions,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            fontSize: '62.5%',
          },
        },
      },
    },
  });

  const components = createComponents(defaultTheme);
  const themeComponents = merge(defaultTheme.components, components);
  return createMuiTheme({
    ...defaultTheme,
    components: themeComponents,
  });
};
/** */