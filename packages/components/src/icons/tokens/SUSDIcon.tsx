import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';

export function SUSDIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const gradientId = React.useMemo(() => makeRandomID('SUSDIcon'), []);

  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#40385F" />
          <stop offset="100%" stopColor="#1E1A31" />
        </linearGradient>
      </defs>
      <g fill="none">
        <ellipse cx="10" cy="9.99" fill={`url(#${gradientId})`} rx="10" ry="9.99" />
        <g fill="#FFF">
          <path
            d="M3.563 3.64c.268 0 .485.223.485.498 0 .274-.217.497-.485.497h-1.26C1.085 4.635.096 3.622.096 2.373c0-1.25.989-2.262 2.209-2.262h3.248c.268 0 .485.223.485.497s-.217.497-.485.497H2.303c-.683 0-1.238.568-1.238 1.268 0 .7.555 1.268 1.238 1.268h1.26z"
            transform="translate(5 5.692)"
          />
          <path
            d="M2.569 4.635c-.268 0-.485-.223-.485-.497 0-.275.217-.497.485-.497h1.26c1.219 0 2.208 1.013 2.208 2.262s-.989 2.262-2.209 2.262H.58c-.268 0-.485-.223-.485-.497 0-.275.217-.497.485-.497h3.248c.684 0 1.238-.568 1.238-1.268 0-.7-.554-1.268-1.238-1.268h-1.26.001z"
            transform="translate(5 5.692)"
          />
          <path
            fillOpacity=".5"
            d="M0.964 7.964L0.175 7.385 5.136 0.295 5.925 0.874z"
            transform="translate(5 5.692)"
          />
        </g>
        <g>
          <path
            fill="#000"
            d="M.662.061v1.59c0 .22.042.388.126.5.084.112.217.168.397.168.181 0 .314-.056.4-.168.085-.112.128-.28.128-.5V.06h.573V1.62c0 .391-.094.69-.28.896-.188.206-.461.31-.82.31-.36 0-.632-.104-.818-.31-.186-.206-.28-.504-.28-.896V.061h.574zM3.18 1.91c.01.135.064.244.162.326.098.082.23.123.392.123.135 0 .245-.029.33-.087.083-.053.132-.147.129-.245 0-.073-.024-.132-.07-.174-.048-.043-.114-.077-.2-.102-.13-.035-.262-.066-.395-.092-.176-.034-.324-.077-.444-.131-.117-.052-.218-.134-.292-.239-.075-.105-.113-.246-.113-.42 0-.16.043-.302.128-.427.09-.13.213-.231.356-.295.151-.072.323-.108.514-.108.196 0 .372.037.53.111.156.075.28.177.37.308.09.13.138.284.14.442h-.563C4.145.789 4.093.687 4.01.615 3.925.543 3.814.508 3.677.508c-.128 0-.23.027-.306.082-.077.055-.115.133-.115.234 0 .074.023.13.07.17.045.041.11.074.194.098.084.025.214.055.39.089.178.033.328.076.45.127.123.05.222.128.297.23.075.104.113.241.113.413 0 .167-.045.317-.134.449-.09.131-.214.235-.373.31-.168.078-.351.117-.536.114-.215 0-.405-.04-.572-.12-.158-.071-.293-.186-.391-.33-.094-.14-.145-.304-.146-.473l.562.008zM5.113.06h.93c.266 0 .502.058.708.175.2.112.366.28.474.485.11.207.166.444.166.71 0 .266-.056.503-.166.71-.108.205-.273.374-.474.485-.205.117-.442.175-.709.175h-.929V.06zm.93 2.25c.241 0 .43-.08.562-.24.134-.16.201-.374.201-.64s-.067-.48-.2-.64c-.134-.16-.322-.24-.564-.24h-.355v1.76h.355z"
            transform="rotate(-90 12.639 .896)"
          />
          <path
            fill="#FFF"
            d="M.662.061v1.59c0 .22.042.388.126.5.084.112.217.168.397.168.181 0 .314-.056.4-.168.085-.112.128-.28.128-.5V.06h.573V1.62c0 .391-.094.69-.28.896-.188.206-.461.31-.82.31-.36 0-.632-.104-.818-.31-.186-.206-.28-.504-.28-.896V.061h.574zM3.18 1.91c.01.135.064.244.162.326.098.082.23.123.392.123.135 0 .245-.029.33-.087.083-.053.132-.147.129-.245 0-.073-.024-.132-.07-.174-.048-.043-.114-.077-.2-.102-.13-.035-.262-.066-.395-.092-.176-.034-.324-.077-.444-.131-.117-.052-.218-.134-.292-.239-.075-.105-.113-.246-.113-.42 0-.16.043-.302.128-.427.09-.13.213-.231.356-.295.151-.072.323-.108.514-.108.196 0 .372.037.53.111.156.075.28.177.37.308.09.13.138.284.14.442h-.563C4.145.789 4.093.687 4.01.615 3.925.543 3.814.508 3.677.508c-.128 0-.23.027-.306.082-.077.055-.115.133-.115.234 0 .074.023.13.07.17.045.041.11.074.194.098.084.025.214.055.39.089.178.033.328.076.45.127.123.05.222.128.297.23.075.104.113.241.113.413 0 .167-.045.317-.134.449-.09.131-.214.235-.373.31-.168.078-.351.117-.536.114-.215 0-.405-.04-.572-.12-.158-.071-.293-.186-.391-.33-.094-.14-.145-.304-.146-.473l.562.008zM5.113.06h.93c.266 0 .502.058.708.175.2.112.366.28.474.485.11.207.166.444.166.71 0 .266-.056.503-.166.71-.108.205-.273.374-.474.485-.205.117-.442.175-.709.175h-.929V.06zm.93 2.25c.241 0 .43-.08.562-.24.134-.16.201-.374.201-.64s-.067-.48-.2-.64c-.134-.16-.322-.24-.564-.24h-.355v1.76h.355z"
            transform="rotate(-90 12.639 .896)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
