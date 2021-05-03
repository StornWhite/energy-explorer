import createStyles from '@material-ui/styles/createStyles';
import makeStyles from '@material-ui/styles/makeStyles';

/** ============================ Styles Hook =============================== */
export function makeStylesHook(styles, name) {
  return makeStyles(createStyles(styles), { name });
}
