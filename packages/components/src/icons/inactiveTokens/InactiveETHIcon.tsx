import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function InactiveETHIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <g transform="translate(-1087 -6464) translate(1087 6464)">
            <circle cx="10" cy="10" r="10" fill="#191924" />
            <g fill="#FFF">
              <path
                fillOpacity=".602"
                d="M4.686 0L4.686 5.544 9.372 7.638z"
                transform="translate(5.625 2.5)"
              />
              <path d="M4.686 0L0 7.638 4.686 5.544z" transform="translate(5.625 2.5)" />
              <path
                fillOpacity=".602"
                d="M4.686 11.23L4.686 14.997 9.375 8.51z"
                transform="translate(5.625 2.5)"
              />
              <path d="M4.686 14.997L4.686 11.229 0 8.51z" transform="translate(5.625 2.5)" />
              <path
                fillOpacity=".2"
                d="M4.686 10.358L9.372 7.638 4.686 5.545z"
                transform="translate(5.625 2.5)"
              />
              <path
                fillOpacity=".602"
                d="M0 7.638L4.686 10.358 4.686 5.545z"
                transform="translate(5.625 2.5)"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
