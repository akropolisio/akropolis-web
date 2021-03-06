import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';

export function BALIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const Icon = inactive ? InactiveBALIcon : ActiveBALIcon;

  return <Icon {...svgProps} />;
}

function ActiveBALIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#21222B" />
        <g fill="#FFF" fillRule="nonzero" transform="translate(2.5 3.5)">
          <path d="M10.598 7.477c2.648.392 4.496 1.278 4.496 2.308 0 1.392-3.379 2.521-7.547 2.521C3.379 12.306 0 11.177 0 9.785c0-1.03 1.848-1.916 4.496-2.308.91.185 1.948.29 3.051.29 1.075 0 2.09-.1 2.983-.276l.068-.014zM9.457 3.33c2.398.268 4.128 1.024 4.128 1.915 0 1.115-2.704 2.018-6.038 2.018S1.509 6.36 1.509 5.245c0-.89 1.73-1.647 4.128-1.914.587.096 1.233.15 1.91.15.654 0 1.277-.05 1.848-.14l.062-.01z" />
          <ellipse cx="4.528" cy="1.513" rx="4.528" ry="1.513" transform="translate(3.019 .05)" />
        </g>
      </g>
    </SvgIcon>
  );
}

function InactiveBALIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#191924" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M13.098 10.977c2.648.392 4.496 1.278 4.496 2.308 0 1.392-3.379 2.521-7.547 2.521-4.168 0-7.547-1.129-7.547-2.521 0-1.03 1.848-1.916 4.496-2.308.91.185 1.948.29 3.051.29 1.075 0 2.09-.1 2.983-.276l.068-.014zM11.957 6.83c2.398.268 4.128 1.024 4.128 1.915 0 1.115-2.704 2.018-6.038 2.018S4.009 9.86 4.009 8.745c0-.89 1.73-1.647 4.128-1.914.587.096 1.233.15 1.91.15.654 0 1.277-.05 1.848-.14l.062-.01z"
        />
        <ellipse cx="10.047" cy="5.064" fill="#FFF" fillRule="nonzero" rx="4.528" ry="1.513" />
      </g>
    </SvgIcon>
  );
}
