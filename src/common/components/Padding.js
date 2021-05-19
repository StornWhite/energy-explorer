import _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  () => ({
    root: (props) => {
      if (typeof props.pad === 'number') {
        return {
          padding: props.pad,
        };
      }

      return {
        paddingLeft: props.left,
        paddingRight: props.right,
        paddingTop: props.top,
        paddingBottom: props.bottom,
      };
    },
  }),
  'Padding'
);

/** ============================ Components ================================ */
export const Padding = ({ className, ...rest }) => {
  const childProps = _.omit(rest, 'pad', 'top', 'left', 'bottom', 'right');
  const classes = classNames(useStyles(rest).root, className);

  return <div className={classes} {...childProps} />;
};
