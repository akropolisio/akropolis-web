import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';

function YFIIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const circleFillColor = inactive ? '#191924' : '#FFF';
  const fillColor = inactive ? '#FFF' : '#000';

  return (
    <SvgIcon {...svgProps} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill={circleFillColor} />
        <path fill={fillColor} fillRule="nonzero" d="M9.565 5.718H10.565V14.166H9.565z" />
        <path
          fill={fillColor}
          fillRule="nonzero"
          d="M7.137 11.9c-.26.46-.386.981-.366 1.508 0 1.706 1.309 3.126 3.009 3.266 1.7.14 3.223-1.047 3.503-2.73.28-1.682-.779-3.298-2.433-3.715v.978c1.116.406 1.752 1.584 1.478 2.74-.274 1.156-1.37 1.924-2.55 1.786-1.18-.138-2.07-1.137-2.07-2.325 0-.448.137-.886.393-1.254l.17 1.55.935-.12-.452-2.957-2.942.589.166.98 1.16-.295zM13.097 7.793c.192-.417.23-.724.23-1.213 0-1.706-1.309-3.127-3.009-3.267-1.7-.14-3.223 1.047-3.503 2.73-.28 1.683.779 3.299 2.433 3.716V8.78c-.9-.328-1.51-1.171-1.538-2.129-.029-.957.53-1.835 1.408-2.217.879-.381 1.901-.188 2.58.486.68.675.88 1.696.506 2.578l-.52-1.375-.86.269.832 2.903 2.85-1.049-.347-.817-1.062.364z"
        />
      </g>
    </SvgIcon>
  );
}

export { YFIIcon };
