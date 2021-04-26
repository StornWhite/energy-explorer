import * as React from 'react';
import MuiCard from '@material-ui/core/Card';
import MuiCardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiCardMedia from '@material-ui/core/CardMedia';
import classNames from 'classnames';

import { makeStylesHook } from '../styles';

/** ============================ Styles ==================================== */
const useStyles = makeStylesHook(
  () => ({
    card: (props) => ({
      padding: props.padding,
    }),
  }),
  'NavigaderCard'
);

/** ============================ Components ================================ */
export const Card = Object.assign(
  React.forwardRef(({ className, outlined, ...rest }, ref) => {
    const classes = classNames(className, useStyles(rest).card);
    const variant = outlined ? 'outlined' : 'elevation';
    return <MuiCard variant={variant} className={classes} {...rest} ref={ref} />;
  }),
  {
    displayName: 'NavigaderCard',
    ActionArea: MuiCardActionArea,
    Actions: MuiCardActions,
    Content: MuiCardContent,
    Media: MuiCardMedia,
  }
);

Card.defaultProps = {
  padding: '1rem',
};
