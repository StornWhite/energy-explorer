import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';

import navigaderImage from '../../images/navigader.png';
import { makeStylesHook, white } from '../../styles';
import { Gradient } from '../branding';
import { Button } from '../Button';
import * as Flex from '../Flex';
import { Padding } from '../Padding';
import { AppBarActions } from './AppBarActions';
import { DRAWER_WIDTH } from './common';

/** ============================ Styles ==================================== */
const barMargin = DRAWER_WIDTH - 60;
const useStyles = makeStylesHook(
  (theme) => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${barMargin}px)`,
      marginLeft: barMargin,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    container: {
      boxSizing: 'border-box',
      width: '100%',
    },
    gradient: {
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      left: 0,
      padding: `0 ${theme.spacing(2)}px`,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    rightSide: {
      'color': white,
      '& > *': {
        color: 'inherit',
        marginLeft: theme.spacing(1),
      },
    },
    navigaderText: {
      width: 250,
    },
    toolbar: {
      position: 'relative',
    },
  }),
  'AppBar'
);

/** ============================ Components ================================ */
export const AppBar = ({ drawerOpen, openDrawer }) => {
  const classes = useStyles();

  return (
    <MuiAppBar
      position="fixed"
      className={classNames(classes.appBar, { [classes.appBarShift]: drawerOpen })}
    >
      <MuiToolbar className={classes.toolbar}>
        <Gradient className={classes.gradient} invert orientation="horizontal" startPercent={20}>
          <Padding className={classes.container}>
            <Flex.Container alignItems="center">
              <Flex.Item>
                <Button
                  aria-label="open drawer"
                  icon="menu"
                  onClick={openDrawer}
                  className={classes.menuButton}
                />
              </Flex.Item>
              <Flex.Item grow>
                <img src={navigaderImage} className={classes.navigaderText} alt="NavigaDER" />
              </Flex.Item>

              <Flex.Item>
                <AppBarActions />
              </Flex.Item>
            </Flex.Container>
          </Padding>
        </Gradient>
      </MuiToolbar>
    </MuiAppBar>
  );
};
