import * as React from 'react';
import AccountIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import ArrowBack from '@material-ui/icons/ArrowBack';
import BatteryChargingFull from '@material-ui/icons/BatteryChargingFull';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EvStation from '@material-ui/icons/EvStation';
import FeedbackIcon from '@material-ui/icons/Feedback';
import InfoIcon from '@material-ui/icons/Info';
import LaunchIcon from '@material-ui/icons/Launch';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import Schedule from '@material-ui/icons/Schedule';
//import SvgIcon from '@material-ui/core/SvgIcon';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import UploadIcon from '@material-ui/icons/CloudUpload';
import WbSunny from '@material-ui/icons/WbSunny';

//import { MaterialColor, materialColors } from '../../styles';
import { materialColors } from '../../styles';
import FlameIcon from './FlameIcon';
import FuelSwitchingIcon from './FuelSwitchingIcon';

/** ============================ Constants ================================= */
const DEFAULT_VIEW_BOX = '0 0 24 24';

/** ============================ Components ================================ */
export const Icon = React.forwardRef(
  function NavigaderIcon({ color, name, size, ...rest }, ref) {
    const IconComponent = iconMap[name];
    const colorProps = isMaterialColor(color)
      ? { htmlColor: materialColors[color][500] }
      : { color };

    const sizeProps = {
      fontSize: typeof size === 'string' ? size : undefined,
      style: typeof size === 'number' ? { fontSize: size } : undefined,
      viewBox: IconComponent.viewBox || DEFAULT_VIEW_BOX,
    };

    return <IconComponent ref={ref} {...colorProps} {...sizeProps} {...rest} />;
  }
);

/** ============================ Helpers =================================== */
/**
 * Maps a valid icon name to the corresponding icon component
 */
const iconMap = {
  account: AccountIcon,
  back: ArrowBack,
  battery: BatteryChargingFull,
  checkMark: DoneIcon,
  chevronLeft: ChevronLeftIcon,
  clock: Schedule,
  close: CloseIcon,
  download: SystemUpdateAltIcon,
  ev_station: EvStation,
  feedback: FeedbackIcon,
  flame: FlameIcon,
  fuel_switching: FuelSwitchingIcon,
  info: InfoIcon,
  launch: LaunchIcon,
  menu: MenuIcon,
  pencil: CreateIcon,
  plus: AddIcon,
  sun: WbSunny,
  trash: DeleteIcon,
  upload: UploadIcon,
  verticalDots: MoreVert,
};

function isMaterialColor(color) {
    return !!color && color in materialColors;
  }
  