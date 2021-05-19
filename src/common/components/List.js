import * as React from 'react';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import MuiListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';
import { printWarning } from '../util';
import { Avatar } from './Avatar';
import { Icon } from './Icon';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  () => ({
    disabled: {
      cursor: 'default',
      pointerEvents: 'none',
      opacity: 0.5,
    },
  }),
  'NavigaderListItem'
);

/** ============================ Components ================================ */
const ListItemIcon = React.forwardRef((props, ref) => {
  const { children, icon } = props;

  // Only one of the `icon` and `label` props should be provided
  const hasBoth = Boolean(children && icon);
  const hasNeither = !Boolean(children || icon);
  if (hasBoth || hasNeither) {
    printWarning('`Menu` component expects one of `icon` or `label` prop');
  }

  if (icon) {
    return (
      <MuiListItemIcon ref={ref}>
        <Icon name={icon} />
      </MuiListItemIcon>
    );
  } else if (children) {
    return <MuiListItemIcon ref={ref}>{children}</MuiListItemIcon>;
  } else {
    return null;
  }
});

const ListItemAvatar = React.forwardRef((props, ref) => {
  return (
    <MuiListItemAvatar ref={ref}>
      <Avatar {...props} />
    </MuiListItemAvatar>
  );
});

ListItemIcon.displayName = 'NavigaderListItemIcon';
ListItemAvatar.displayName = 'NavigaderListItemAvatar';

const ListItemText = ({ children }) => <MuiListItemText primary={children} />;

const ListItem = Object.assign(
  React.forwardRef(({ button = true, disabled, ...rest }, ref) => {
    const classes = useStyles();
    const className = classNames({
      [classes.disabled]: disabled,
    });

    const listItemProps = {
      className,
      disabled,
      ...rest,
    };

    if (button) {
      return <MuiListItem button {...listItemProps} ref={ref} />;
    } else {
      return (
        <MuiListItem
          component="li"
          ref={ref}
          {...listItemProps}
        />
      );
    }
  }),
  {
    displayName: 'NavigaderListItem',
    Avatar: ListItemAvatar,
    Icon: ListItemIcon,
    Text: ListItemText,
  }
);

export const List = Object.assign(
  React.forwardRef((props, ref) => <MuiList ref={ref} {...props} />),
  {
    displayName: 'NavigaderList',
    Item: ListItem,
  }
);
