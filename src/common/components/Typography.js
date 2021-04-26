import * as React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@material-ui/core/Typography';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';
import { printWarning } from '../util';

/** ============================ Styles ==================================== */
function getOpacity(emphasis) {
  switch (emphasis) {
    case 'secondary':
      return '60%';
    case 'disabled':
      return '38%';
    case 'normal':
    default:
      return '87%';
  }
}

const useStyles = makeStylesHook(
  (theme) => ({
    text: (props) => ({
      opacity: getOpacity(props.emphasis),
      fontWeight: props.emphasis === 'bold' ? 'bold' : undefined,
    }),
    info: {
      color: theme.palette.info.main,
    },
    success: {
      color: theme.palette.success.main,
    },
    warning: {
      color: theme.palette.warning.main,
    },
  }),
  'NavigaderTypography'
);

const useCodeStyles = makeStylesHook(
  (theme) => ({
    code: {
      ...theme.mixins.border({ color: theme.palette.grey[400], radius: 3 }),
      backgroundColor: theme.palette.grey[200],
      padding: '1px 2px',
    },
  }),
  'NavigaderCode'
);

const useLineLimitStyles = makeStylesHook(
  () => ({
    lineLimit: ({ limit }) => ({
      'overflow': 'hidden',
      'textOverflow': 'ellipsis',
      'display': '-webkit-box',
      // `-webkit-line-clamp` is not supported in IE browsers, effectively making the `LineLimit`
      // component useless. TODO: set up a fallback for non-compliant browsers.
      '-webkit-line-clamp': limit,
      '-webkit-box-orient': 'vertical',
    }),
  }),
  'NavigaderLineLimit'
);

/** ============================ Components ================================ */
const Code = (props) => <code className={useCodeStyles().code} {...props} />;
const LineLimit = ({ children, className, limit }) => {
  const classes = useLineLimitStyles({ limit });
  return <div className={classNames(classes.lineLimit, className)}>{children}</div>;
};

export const Typography = Object.assign(
  React.forwardRef((props, ref) => {
    const {
      children,
      className,
      color = 'initial',
      component = 'span',
      emphasis = 'normal',
      paragraph,
      useDiv = false,
      variant = 'body1',
      ...rest
    } = props;
    const classes = useStyles({ emphasis });
    const typographyClasses = classNames(className, classes.text, {
      [classes.info]: color === 'info',
      [classes.success]: color === 'success',
      [classes.warning]: color === 'warning',
    });

    // If the component is provided both the `useDiv` and `component` props, we will print a warning
    if (props.hasOwnProperty('component') && props.hasOwnProperty('useDiv')) {
      printWarning(
        '`Typography component` received both `useDiv` and `component` props. At most one prop' +
          ' should be provided'
      );
    }

    return (
      <MuiTypography
        className={typographyClasses}
        color={getColor(color)}
        component={useDiv || paragraph ? 'div' : component}
        paragraph={paragraph}
        ref={ref}
        variant={variant}
        {...rest}
      >
        {children}
      </MuiTypography>
    );
  }),
  { displayName: 'NavigaderTypography', Code, LineLimit }
);

/** ============================ Helpers =================================== */
export function getColor(color) {
  switch (color) {
    case 'info':
    case 'success':
    case 'warning':
      return undefined;
    default:
      return color;
  }
}
