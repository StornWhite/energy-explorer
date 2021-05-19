import * as React from 'react';
import MuiTooltip from '@material-ui/core/Tooltip';

import { makeStylesHook } from '../styles';
import { Fade } from './Fade';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  (theme) => ({
    tooltip: (props) => ({
      fontSize: theme.typography.body2.fontSize,
      maxWidth: props.maxWidth,
    }),
  }),
  'Tooltip'
);

// Length of the transition's duration and delay, in milliseconds
const defaultDelay = 1000;

/** ============================ Components ================================ */
export const Tooltip = React.forwardRef(
  ({ children, delay, title, ...rest }, ref) => {
    const classes = useStyles(rest);

    // Compute the tooltip's delay
    const enterDelay = React.useMemo(() => {
      switch (typeof delay) {
        case 'boolean':
          return defaultDelay;
        case 'number':
          return delay;
        default:
          return 0;
      }
    }, [delay]);

    if (!title) return children;
    return (
      <MuiTooltip
        arrow
        classes={classes}
        enterDelay={enterDelay}
        interactive
        ref={ref}
        title={title}
        TransitionComponent={Fade}
        {...rest}
      >
        {children}
      </MuiTooltip>
    );
  }
);

Tooltip.displayName = 'NavigaderTooltip';
