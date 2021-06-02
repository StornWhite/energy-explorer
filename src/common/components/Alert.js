import _ from 'lodash';
import * as React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import MuiAlertTitle from '@material-ui/lab/AlertTitle';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  (theme) => ({
    alert: (props) => ({
      border: props.outlined ? `1px solid ${theme.palette[props.type].dark}` : 'none',
    }),
  }),
  'NavigaderAlert'
);

/** ============================ Components ================================ */
export const Alert = React.forwardRef((props, ref) => {
  const { children, className, title, type, ...rest } = props;
  const classes = useStyles(props);
  const alertProps = {
    ..._.omit(rest, 'outlined'),
    className: classNames(className, classes.alert),
    ref,
    severity: type,
  };

  return (
    <MuiAlert {...alertProps}>
      {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
      {children}
    </MuiAlert>
  );
});

Alert.displayName = 'NavigaderAlert';
