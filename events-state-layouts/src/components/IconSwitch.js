import "../App.css";
import { NAME_ICON } from "../constants";
//import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const IconSwitch = ({ icon, onSwitch }) => {

  return (
    <div className="switch">
      {icon === NAME_ICON.VIEW_LIST && <span class="material-icons" onClick={() => onSwitch(NAME_ICON.VIEW_MODULE)}>
        list
      </span>}
      {icon === NAME_ICON.VIEW_MODULE && <span class="material-icons" onClick={() => onSwitch(NAME_ICON.VIEW_LIST)}>view_module</span>}
    </div>
  );
};

export default IconSwitch;
