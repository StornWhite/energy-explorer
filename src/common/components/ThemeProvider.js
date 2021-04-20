import * as React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';

import { theme } from '../styles/theme';

/** ============================ Components ================================ */
export const ThemeProvider = (props) => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);
