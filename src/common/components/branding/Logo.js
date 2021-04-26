import * as React from 'react';

import logo from '../../../common/images/logo.png';
import { makeStylesHook } from '../../../common/styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  () => ({
    logo: (props) => ({
      width: props.width,
    }),
  }),
  'Logo'
);

/** ============================ Components ================================ */
export const Logo = (props) => {
  const classes = useStyles(props);
  return <img src={logo} className={classes.logo} alt="NavigaDER Logo" />;
};

Logo.defaultProps = {
  width: '100%',
};
