import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';
import { TokenIconProps } from '../types';

function WBTCIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const gradientIds = React.useMemo(() => [1, 2].map(() => makeRandomID('WBTCIcon')), []);
  const fillColor0 = inactive ? '#FFF' : `url(#${gradientIds[0]})`;
  const fillColor1 = inactive ? '#FFF' : `url(#${gradientIds[1]})`;
  const fillColor2 = inactive ? '#191924' : '#FFF';

  return (
    <SvgIcon {...svgProps} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={gradientIds[0]} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FCC538" />
          <stop offset="100%" stopColor="#F7931A" />
        </linearGradient>
        <linearGradient id={gradientIds[1]} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#928E9C" />
          <stop offset="100%" stopColor="#595563" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill={fillColor2} />
        <path
          fill={fillColor0}
          fillRule="nonzero"
          d="M14.298 8.96c.194-1.296-.793-1.993-2.143-2.458l.438-1.756-1.07-.267-.426 1.71c-.28-.07-.57-.136-.856-.201l.429-1.722L9.601 4l-.438 1.756c-.232-.053-.46-.106-.682-.16V5.59l-1.474-.368-.284 1.142s.793.181.776.193c.433.108.512.394.499.622l-.5 2c.03.008.07.019.112.036l-.113-.028-.7 2.803c-.052.132-.186.329-.49.254.012.016-.776-.194-.776-.194L5 13.274l1.391.347c.26.065.513.133.763.196l-.443 1.777 1.068.266.438-1.757c.292.079.575.152.852.22l-.436 1.75 1.069.267.442-1.773c1.823.345 3.194.205 3.771-1.443.465-1.328-.023-2.094-.982-2.593.698-.162 1.225-.621 1.365-1.57zm-2.443 3.426c-.33 1.328-2.566.61-3.29.43l.587-2.353c.724.18 3.049.539 2.703 1.923zm.33-3.444c-.3 1.207-2.161.594-2.765.443l.533-2.134c.603.15 2.547.43 2.233 1.69z"
          transform="rotate(-14 9.661 10.17)"
        />
        <path
          fill={fillColor1}
          d="M10 18c2.024 0 3.872-.752 5.281-1.99l.709.707C14.399 18.137 12.3 19 10 19c-2.3 0-4.4-.863-5.99-2.283l.708-.709C6.127 17.248 7.976 18 10 18zm9-8c0 2.3-.863 4.4-2.283 5.99l-.709-.708C17.248 13.873 18 12.024 18 10s-.752-3.873-1.992-5.282l.709-.709C18.137 5.6 19 7.7 19 10zM3.283 4.01l.708.709C2.75 6.128 2 7.976 2 10c0 2.024.752 3.872 1.99 5.281l-.707.709C1.863 14.399 1 12.3 1 10c0-2.3.863-4.399 2.283-5.99zM10 1c2.3 0 4.399.863 5.99 2.283l-.709.708C13.872 2.75 12.024 2 10 2c-2.024 0-3.873.752-5.282 1.992l-.708-.71C5.601 1.863 7.7 1 10 1z"
        />
      </g>
    </SvgIcon>
  );
}

export { WBTCIcon };
