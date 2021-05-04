import _ from 'lodash';
import * as React from 'react';
import MuiButton from '@material-ui/core/Button';
import MuiFab from '@material-ui/core/Fab';
import MuiIconButton from '@material-ui/core/IconButton';

import { Icon } from './Icon';

/** ============================ Components ================================ */
const Text = (props) => <Button {...props} _variant="text" />;

// Floating Action Button is screen's primary button.
const Fab = ({ name, ...rest }) => {
  const fabProps = _.omit(rest, 'children', 'variant');
  return (
    <MuiFab {...fabProps}>
      <Icon name={name} />
    </MuiFab>
  );
};

export const Button = Object.assign(
  React.forwardRef(({ icon, _variant, ...rest }, ref) => {
    const noChildren = React.Children.count(rest.children) === 0;

    // Render an icon-button if there's an icon but no children
    if (icon && noChildren) {
      return (
        <MuiIconButton ref={ref} {..._.omit(rest, 'size')}>
          <Icon name={icon} />
        </MuiIconButton>
      );
    }

    return (
      <MuiButton
        ref={ref}
        startIcon={icon ? <Icon name={icon} /> : null}
        variant={_variant || 'contained'}
        {...rest}
      />
    );
  }),
  {
    displayName: 'NavigaderButton',
    Fab,
    Text,
  }
);
