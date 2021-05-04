import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

import { getColor, TypographyProps } from './Typography';

/** ============================ Components ================================ */
const SourceList = ({ sources, ...rest }) => {
  return (
    <sup>
      {sources.map((source, i) => (
        <NewTabLink key={source} to={source} {...rest}>
          [{i + 1}]
        </NewTabLink>
      ))}
    </sup>
  );
};

const NewTabLink = React.forwardRef((props, ref) => (
  <Link {...props} ref={ref} rel="noopener noreferrer" target="_blank" useAnchor />
));

NewTabLink.displayName = 'NavigaderNewTabLink';

export const Link = Object.assign(
  React.forwardRef(
    ({ color = 'primary', noUnderline, to, useAnchor, ...rest }, ref) => {
      const linkProps = {
        color: getColor(color),
        component: useAnchor ? 'a' : RouterLink,
        href: useAnchor ? to : undefined,
        to: useAnchor ? undefined : to,
        underline: noUnderline ? 'none' : 'hover',
        ...rest,
      };

      return <MuiLink {...linkProps} ref={ref} />;
    }
  ),
  {
    displayName: 'NavigaderLink',
    NewTab: NewTabLink,
    SourceList,
  }
);
