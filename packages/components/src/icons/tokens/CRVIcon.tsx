import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import { TokenIconProps } from '../types';
import { makeRandomID } from '../../temp23/makeRandomID';

export function CRVIcon(props: TokenIconProps) {
  const { inactive, ...svgProps } = props;

  const Icon = inactive ? InactiveCRVIcon : ActiveCRVIcon;

  return <Icon {...svgProps} />;
}

function InactiveCRVIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#191924" />
        <g fill="#FFF" stroke="#FFF">
          <path
            d="M.328 2.587C.992.735 2.058-.164 3.873.122 5.687.408 8.13 1.397 9.262 2.293c1.132.897 2.064 2.373 1.496 3.91-.26.704-.987 1.191-2.91 1.687-.517.134-1.495.417-2.934.85h0v-.034l-.013.073c-.299 1.444-.857 1.887-1.424 2.113l-.078.03c-.321.117-.86.031-1.387-.35C-.091 9.053-.278 4.278.328 2.587zm2.064 2.821c-.774.081-1.158.98-1.016 2.329.143 1.35.813 2.283 1.587 2.202.774-.08 1.288-1.037 1.145-2.387-.143-1.35-.942-2.224-1.716-2.144zm2.614.27l-.091 3.028.025-.13c.05-.28.09-.593.121-.946.045-.518.021-1.136-.032-1.717l-.023-.235zM7.992 3.12c-.871-.582-3.067-1.39-3.563-1.077-.397.25-.01.381.37 2.235.064.313.146.823.206 1.39v.01l.012-.328c1.328.047 2.379-.116 3.15-.488l.187-.097c.764-.429.508-1.063-.362-1.645z"
            transform="translate(5 4.5)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

function ActiveCRVIcon(props: SvgIconProps) {
  const gradientIds = React.useMemo(
    () => [1, 2, 3, 4, 5, 6].map(() => makeRandomID('CRVIcon')),
    [],
  );

  return (
    <SvgIcon {...props} viewBox="0 0 32 32">
      <defs>
        <linearGradient
          x1="58.2660023%"
          y1="53.9877105%"
          x2="64.0169252%"
          y2="74.0838674%"
          id={gradientIds[0]}
        >
          <stop stopColor="#F2E62B" offset="0%" />
          <stop stopColor="#B1FF46" offset="48.6481565%" />
          <stop stopColor="#05A2FB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="45.0951087%"
          y1="27.8821778%"
          x2="50%"
          y2="67.5173339%"
          id={gradientIds[1]}
        >
          <stop stopColor="#800000" offset="0%" />
          <stop stopColor="#FA0F00" offset="18.7423576%" />
          <stop stopColor="#FFCD0C" offset="43.0928911%" />
          <stop stopColor="#EEEB32" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="33.9331595%"
          y1="24.7327615%"
          x2="26.6530302%"
          y2="61.5783185%"
          id={gradientIds[2]}
        >
          <stop stopColor="#FF9800" offset="0%" />
          <stop stopColor="#E4FF13" offset="55.7691538%" />
          <stop stopColor="#50FFA7" offset="100%" />
        </linearGradient>
        <linearGradient x1="60.8253255%" y1="-11.0703355%" x2="50%" y2="100%" id={gradientIds[3]}>
          <stop stopColor="#FA1000" offset="0%" />
          <stop stopColor="#FA1000" offset="0%" />
          <stop stopColor="#800000" offset="17.007102%" />
          <stop stopColor="#FA1801" offset="39.0616555%" />
          <stop stopColor="#F67A08" offset="54.4421756%" />
          <stop stopColor="#B1FF46" offset="62.73309%" />
          <stop stopColor="#75FF82" offset="75.3792682%" />
          <stop stopColor="#05A2FB" offset="85.3998375%" />
          <stop stopColor="#1212EE" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="40.7539593%"
          y1="8.65073208%"
          x2="29.998155%"
          y2="78.218339%"
          id={gradientIds[4]}
        >
          <stop stopColor="#FA2401" offset="0%" />
          <stop stopColor="#F5DF22" offset="42.8688999%" />
          <stop stopColor="#00E4F8" offset="77.4181047%" />
          <stop stopColor="#0010FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="-35.4571096%"
          x2="50.6590533%"
          y2="95.2246082%"
          id={gradientIds[5]}
        >
          <stop stopColor="#F76D08" offset="0.0218531469%" />
          <stop stopColor="#F1E62B" offset="33.8142605%" />
          <stop stopColor="#75F583" offset="50.6985216%" />
          <stop stopColor="#00E0FB" offset="69.542734%" />
          <stop stopColor="#0023FF" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
          <rect fill="#0A0A0E" opacity="0" x="5.552e-07" y="0" width="32" height="32" />
          <path
            d="M10.5612531,6.68228042 C14.1521644,4.51957256 27.3641946,10.9521509 27.1714726,15.1619454 C26.9787506,19.3717398 24.8703226,20.0130462 23.2043136,20.4677795 C21.5383048,20.9225126 16.2905648,21.902579 16.0115898,22.661109 C15.7326147,23.4196387 14.8543957,27.1850877 12.0512636,26.7012026 C9.2481315,26.2173176 6.91473045,20.9254235 6.73786915,17.1815429 C6.56100784,13.4376622 6.9703417,8.84498827 10.5612531,6.68228042 Z"
            fill={`url(#${gradientIds[0]})`}
          />
          <path
            d="M10.5612531,6.68228042 C13.865852,4.69201069 25.177485,9.28815974 26.9140862,13.9841662 C27.0645464,14.3910309 26.6717997,14.7524411 26.2250109,15.0261605 C24.7884045,15.9062793 23.2398194,16.1304446 21.5738106,16.5851779 C19.9078018,17.0399112 14.6600617,18.0199776 14.3810866,18.7785074 C14.1021115,19.5370371 6.91473045,20.9254235 6.73786915,17.1815429 C6.56100784,13.4376622 6.9703417,8.84498827 10.5612531,6.68228042 Z"
            fill={`url(#${gradientIds[1]})`}
          />
          <path
            d="M15.9515792,16.2280024 C15.9521304,14.8531048 15.8185002,13.8319601 15.5506883,13.1645682 C15.1489706,12.1634804 15.5744498,10.5856509 16.4070264,10.3145056 C17.2396032,10.0433602 19.2606941,11.2096629 21.0476011,11.9771781 C22.8345083,12.7446932 24.1145246,13.7256 23.6913674,14.4529342 C23.2682102,15.1802684 21.1419808,15.6656262 20.1827614,15.8092653 C19.5432819,15.9050247 18.1328877,16.0446037 15.9515792,16.2280024 Z"
            fill={`url(#${gradientIds[2]})`}
          />
          <path
            d="M12.5473655,27.0041445 C14.9842774,26.4262763 16.1948971,22.3127018 16.1948971,16.6324421 C16.1948971,14.5479179 15.2972893,11.1609493 14.7016779,9.26366508 C14.060247,7.22042604 16.732596,7.01180013 16.3515061,6.90164901 C14.8349258,6.46329296 14.0844955,6.10598436 12.5258611,6.11793856 C9.36123961,6.14213496 6.33833345,10.3924409 6.67072614,16.8953197 C7.00311885,23.3981986 10.1104536,27.5820127 12.5473655,27.0041445 Z"
            fill={`url(#${gradientIds[3]})`}
            transform="rotate(-4.000000)"
          />
          <path
            d="M12.6748931,27.0058576 C14.6110809,26.5467267 15.778316,23.8559971 16.1762453,19.9206358 C16.2225629,19.4625733 16.6119611,16.1596422 15.9384247,13.5306321 C15.9155997,13.4415391 15.6866061,14.8588694 15.1410642,16.0045477 C14.5955223,17.1502261 13.8292467,17.9373998 13.7225119,17.9542109 C11.848605,18.2493571 10.8487963,17.5910792 9.11304857,16.7961448 C7.27331726,15.9535881 8.91802595,7.66081988 7.81427073,10.2773026 C7.07285921,12.0348393 6.7005335,14.2789042 6.79825377,16.8970328 C7.04318956,23.4593704 10.2379812,27.5837257 12.6748931,27.0058576 Z"
            fill={`url(#${gradientIds[4]})`}
            transform="rotate(-4.000000) "
          />
          <ellipse
            fill={`url(#${gradientIds[5]})`}
            transform="rotate(-12.000000)"
            cx="10.9347569"
            cy="20.5258462"
            rx="3.16462149"
            ry="5.01065069"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
