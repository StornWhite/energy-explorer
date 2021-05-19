import * as React from 'react';
import MuiMenu from '@material-ui/core/Menu';

import { hooks, printWarning } from '../util';
import { Button } from './Button';
import { List } from './List';

/** ============================ Components ================================ */
export const Menu = (props) => {
  const {
    icon,
    label,
    anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
    transformOrigin = { vertical: 'top', horizontal: 'center' },
    ...rest
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = hooks.useRandomString();

  // Only one of the `icon` and `label` props should be provided
  const hasBoth = Boolean(label && icon);
  const hasNeither = !Boolean(label || icon);
  if (hasBoth || hasNeither) {
    printWarning('`Menu` component expects one of `icon` or `label` prop');
  }

  const menuOpenerProps = {
    'aria-controls': menuId,
    'aria-haspopup': 'true',
    'onClick': handleClick,
  };

  const MenuOpener = icon ? (
    <Button {...menuOpenerProps} icon={icon} />
  ) : (
    <Button {...menuOpenerProps}>{label}</Button>
  );

  return (
    <>
      {MenuOpener}
      <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        getContentAnchorEl={null}
        id={menuId}
        open={!!anchorEl}
        onClose={handleClose}
        transformOrigin={transformOrigin}
        {...rest}
      />
    </>
  );

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
};

Menu.Item = List.Item;
