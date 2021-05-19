import * as React from 'react';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  () => ({
    wrapper: {
      textAlign: 'center',
    },
  }),
  'NavigaderCentered'
);

/** ============================ Components ================================ */
export const Centered = ({ className, ...rest }) => {
  const styles = useStyles();
  const classes = classNames(styles.wrapper, className);
  return <div className={classes} {...rest} />;
};
