import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import { CurrencyIconProps } from '../types';
import { RenBTCIcon } from '../tokens';

export function BTCIcon(props: CurrencyIconProps) {
  const { inactive, ...svgProps } = props;

  return inactive ? <RenBTCIcon {...props} /> : <ActiveBTCIcon {...svgProps} />;
}

function ActiveBTCIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id="15fzl4aoga" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FCC538" />
          <stop offset="100%" stopColor="#F7931A" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <circle cx="10" cy="10" r="10" fill="url(#15fzl4aoga)" />
          <path
            fill="#FFF"
            d="M14.545 8.656c.214-1.44-.876-2.215-2.365-2.732l.483-1.952-1.18-.296-.47 1.9c-.31-.078-.629-.151-.945-.224l.474-1.913-1.18-.296-.483 1.951c-.256-.059-.508-.117-.753-.178l.001-.006L6.5 4.5l-.313 1.27s.875.202.856.214c.478.12.565.439.55.691L7.043 8.9c.033.009.075.02.122.04l-.124-.031-.772 3.115c-.058.146-.206.365-.54.282.012.017-.858-.215-.858-.215l-.585 1.36 1.535.385c.285.072.565.148.84.219l-.487 1.974 1.178.296.483-1.953c.322.088.635.17.94.246l-.481 1.944 1.18.296.487-1.97c2.012.383 3.525.228 4.161-1.604.513-1.476-.025-2.327-1.084-2.882.771-.18 1.352-.69 1.507-1.745zm-2.584 3.862c-.369 1.54-2.866.707-3.675.498l.655-2.73c.81.21 3.406.625 3.02 2.232zm.286-3.867c-.338 1.281-2.427.63-3.104.47l.597-2.264c.678.16 2.86.458 2.507 1.794z"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
