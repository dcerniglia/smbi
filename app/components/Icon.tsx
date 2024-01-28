import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faYoutube,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
  faCcPaypal,
  faCcAmex,
} from '@fortawesome/free-brands-svg-icons';


import { 
  faCaretDown, 
  faUser, 
  faMagnifyingGlass, 
  faStar,
  faStarHalfStroke,
  faTruckFast,
  faChartLine,
  faFileLines,
  faComment
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faCaretDown,
    faCcVisa,
    faCcMastercard,
    faCcDiscover,
    faCcPaypal,
    faCcAmex,
    faMagnifyingGlass,
    faYoutube,
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faStar,
    faStarHalfStroke,
    faTruckFast,
    faUser,
    faChartLine,
    faFileLines,
    faComment
);

export default function Icon({
  icon,
  size,
  className,
  tooltip,
}: {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
  tooltip?: string;
}) {
  return <FontAwesomeIcon icon={icon} size={size} className={className} title={tooltip}/>;
}
