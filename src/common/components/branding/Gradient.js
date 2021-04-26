import _ from 'lodash';
import * as React from 'react';
import classNames from 'classnames';

import { makeStylesHook } from '../../../common/styles';

/** ============================ Styles ==================================== */
const defaultProps = {
    finishPercent: 100,
    invert: false,
    orientation: 'vertical',
    startPercent: 0,
  };

// Styles are exported so they can be used as a mixin elsewhere
export const useGradientStyles = makeStylesHook(
  (theme) => ({
    // The props are default-initialized to `defaultProps` because, when used as a mixin elsewhere in
    // the application, the `Gradient` component's `defaultProps` attribute is not present
    root: (props = defaultProps) => {
      const combinedProps = { ...defaultProps, ...props };
      const startColor = combinedProps.invert ? theme.palette.secondary : theme.palette.primary;
      const endColor = combinedProps.invert ? theme.palette.primary : theme.palette.secondary;
      const lengthDimension = combinedProps.orientation === 'vertical' ? 'height' : 'width';
      const orientation = combinedProps.orientation === 'vertical' ? '0deg' : '90deg';
      return {
        backgroundColor: theme.palette.secondary.main,
        background: `linear-gradient(
        ${orientation},
        ${startColor.main} ${combinedProps.startPercent}%,
        ${endColor.main} ${combinedProps.finishPercent}%
      )`,
        [lengthDimension]: combinedProps.length,
      };
    },
  }),
  'Gradient'
);

/** ============================ Components ================================ */
export const Gradient = ({ className, ...rest }) => {
  const classes = useGradientStyles(rest);
  const childProps = _.omit(rest, 'finishPercent', 'invert', 'orientation', 'startPercent');
  return <div className={classNames(classes.root, className)} {...childProps} />;
};

Gradient.defaultProps = defaultProps;
