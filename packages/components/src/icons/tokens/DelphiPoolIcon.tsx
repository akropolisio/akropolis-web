import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';
import { TokenIconProps } from '../types';

export function DelphiPoolIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const [radialGradientID, circleID, maskID] = React.useMemo(
    () => [1, 2, 3, 4, 5].map(() => makeRandomID('DelphiPoolIcon')),
    [],
  );

  const fillColor = inactive ? '#FFF' : `url(#${radialGradientID})`;

  return (
    <SvgIcon {...svgProps} viewBox="0 0 20 20">
      <defs>
        <radialGradient
          id={radialGradientID}
          cx="31.236%"
          cy="42.426%"
          r="85.29%"
          fx="31.236%"
          fy="42.426%"
          gradientTransform="matrix(.53631 -.7067 .5357 .7075 -.082 .345)"
        >
          <stop offset="0%" stopColor="#594AFF" />
          <stop offset="100%" stopColor="#3B2ECE" />
        </radialGradient>
        <circle id={circleID} cx="10.313" cy="10.375" r="9.375" />
      </defs>

      <g fill="none" fillRule="evenodd" transform="translate(0, -1.5)">
        <path d="M0 0H20V20H0z" />
        <path
          fill={fillColor}
          stroke="#0A0A0E"
          strokeWidth=".1"
          d="M10.022 4.245c1.98 0 4.235-1.071 5.27-1.653 1.035-.583 2.876-.486 2.876.8 0 1.113-.356 2.202.197 2.917.086.11.175.987.228 1.136.27.752.27 2.235 0 3.562s-4.324 4.386-8.467 4.386c-4.143 0-8.087-2.26-8.087-4.393 0-2.134-.1-3.014-.1-3.7 0-.687-1.149-3.14.1-4.406 1.248-1.266 3.494.64 4.32.846.826.207 1.683.505 3.663.505z"
        />
        <mask id={maskID} fill="#fff">
          <use xlinkHref={`#${circleID}`} />
        </mask>
        <path
          fill={fillColor}
          stroke="#0A0A0E"
          strokeWidth=".1"
          d="M10.022 4.245c1.98 0 4.235-1.071 5.27-1.653 1.035-.583 2.876-.486 2.876.8 0 1.182-.401 2.337.311 3.046.063.062.133.12.214.175.999.682 2.245 2.081 2.62 4.611.374 2.53-1.547 5.304-1.837 5.545-.15.124-4.986 3.266-9.35 3.231-4.106-.033-7.76-3.232-7.76-3.43 0-.407-2.225-.669-2.36-4.217C-.128 8.805 1.94 7.986 1.94 7.3c0-.687-1.149-3.14.1-4.406 1.248-1.266 3.494.64 4.32.846.826.207 1.683.505 3.663.505z"
          mask={`url(#${maskID})`}
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M10.873 12.29c.704 1.438 1.823 1.96 3.359 1.57 1.143-.291 2.098-1.175 2.324-2.366"
          mask={`url(#${maskID})`}
          transform="rotate(1 13.715 12.74)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M10.512 12.177c-.865 1.436-1.954 2.068-3.266 1.895-1.312-.172-2.279-.912-2.9-2.221"
          mask={`url(#${maskID})`}
          transform="rotate(1 7.43 12.976)"
        />
        <path
          fill="#0A0A0E"
          d="M9.583 11.393c0-.363.222-.743 1.028-.858.807-.115 1.027.116 1.173.43.147.312-.213.727-.496.839-.284.112-.19.53-.456.53-.177 0-.356-.177-.538-.53-.474-.032-.711-.17-.711-.411z"
          mask={`url(#${maskID})`}
          transform="rotate(1 10.7 11.42)"
        />
        <path
          fill="#FED798"
          stroke="#0A0A0E"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M12.986 8.294c.246-.052.565-.048.977-.008.841.083 1.446.36 1.59.574.164.242.223.427.223.628 0 .486-.209.788-.524.979-.35.21-.859.27-1.382.27-.52 0-.944-.079-1.23-.29-.268-.199-.439-.509-.439-1.01 0-.228.045-.569.174-.758.14-.203.335-.327.611-.385z"
          mask={`url(#${maskID})`}
          transform="rotate(1 13.989 9.496)"
        />
        <path
          fill="#000"
          d="M13.734 10.693c.119 0 .307-.017.41-.08.34-.202.513-.595.513-1.178 0-.31-.069-.598-.184-.829-.167-.334-1.236-.379-1.403-.106-.15.246-.242.574-.242.935 0 .453.129.766.352 1.017.153.172.35.24.554.24z"
          mask={`url(#${maskID})`}
          transform="rotate(1 13.742 9.507)"
        />
        <path
          fill="#FED798"
          stroke="#0A0A0E"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M6.563 8.46c.298 0 .68.088.995.21.406.156.657.384.696.537.044.705-.123 1.089-.38 1.326-.316.294-.803.366-1.35.366-.524 0-.976-.062-1.28-.266-.278-.188-.46-.488-.46-.99 0-.197.092-.452.176-.624.058-.118.308-.299.69-.415.275-.084.608-.143.913-.143z"
          mask={`url(#${maskID})`}
          transform="rotate(1 6.557 9.68)"
        />
        <path
          fill="#000"
          d="M6.45 10.811c.184 0 .363.045.506-.098.25-.25.417-.685.417-1.18 0-.306-.064-.589-.172-.82-.166-.354-1.318-.355-1.484-.002-.109.231-.173.515-.173.822 0 .49.163.922.41 1.174.145.146.31.104.497.104z"
          mask={`url(#${maskID})`}
          transform="rotate(1 6.458 9.632)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M15.483 11.86c1.384.064 2.613-.33 3.686-1.184"
          mask={`url(#${maskID})`}
          transform="rotate(1 17.326 11.271)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M14.572 12.227c1.253 1.035 2.59 1.336 4.012.903"
          mask={`url(#${maskID})`}
          transform="rotate(1 16.578 12.774)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M5.894 12.315c-1.564.314-2.675.143-3.334-.515"
          mask={`url(#${maskID})`}
          transform="rotate(1 4.227 12.134)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M5.433 11.02c-.048 1.662-.75 2.937-2.107 3.825"
          mask={`url(#${maskID})`}
          transform="rotate(57 4.38 12.932)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M16.134 3.4c-1.016.965-1.27 1.913-.762 2.846"
          mask={`url(#${maskID})`}
          transform="rotate(1 15.626 4.823)"
        />
        <path
          stroke="#0A0A0E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth=".5"
          d="M2.354 3.904c1.113-.482 1.876.02 2.288 1.504"
        />
      </g>
    </SvgIcon>
  );
}
