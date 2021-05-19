import _ from 'lodash';
import * as React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  (theme) => ({
    avatar: ({ color = 'grey', size = 'default' }) => ({
      color: theme.palette.getContrastText(color),
      backgroundColor: color,
      height: sizeMap[size],
      width: sizeMap[size],
    }),
  }),
  'NavigaderAvatar'
);

const sizeMap = {
  default: 40,
  small: 24,
};

/** ============================ Components ================================ */
export const Avatar = React.forwardRef(
  ({ className, ...rest }, ref) => {
    const classes = classNames(useStyles(rest).avatar, className);
    return (
      <MuiAvatar
        className={classes}
        ref={ref}
        {..._.omit(rest, 'color', 'size')}
      />
    );
  }
);

Avatar.displayName = 'NavigaderAvatar';
