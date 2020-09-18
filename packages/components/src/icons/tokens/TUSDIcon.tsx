import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeRandomID } from '../../temp23/makeRandomID';

function TUSDIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const gradientIds = React.useMemo(() => [1, 2].map(() => makeRandomID('TUSDIcon')), []);

  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <defs>
        <linearGradient id={gradientIds[0]} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0051A1" />
          <stop offset="100%" stopColor="#002868" />
        </linearGradient>
        <linearGradient id={gradientIds[1]} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0051A1" />
          <stop offset="100%" stopColor="#003B82" />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          fill={`url(#${gradientIds[0]})`}
          d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10z"
        />
        <path
          fill="#FFF"
          d="M15.04 16H4.96c-.528 0-.96-.432-.96-.96V4.96c0-.528.432-.96.96-.96h10.08c.528 0 .96.432.96.96v10.08c0 .528-.432.96-.96.96z"
        />
        <g fill="#002868">
          <path
            d="M.782 2.192c-.032 0-.058-.029-.058-.06V.519C.724.488.7.46.667.46H.098C.066.459.038.433.038.402V.09c0-.032.028-.06.06-.06H1.85c.032 0 .06.028.06.06v.312c0 .031-.028.057-.06.057h-.566c-.032 0-.06.028-.06.06v1.613c0 .031-.026.06-.058.06H.782zM3.66.09c0-.032.025-.06.056-.06h.382c.032 0 .06.028.06.06v1.1c0 .652-.368 1.03-.954 1.03-.582 0-.947-.378-.947-1.03V.09c0-.032.025-.06.057-.06h.382c.031 0 .06.028.06.06v1.116c0 .321.165.55.452.55.286 0 .451-.229.451-.55V.09zM5.91.736c-.05 0-.066-.02-.085-.058-.067-.156-.213-.254-.436-.254-.2 0-.369.07-.369.204 0 .146.156.206.5.248.521.06.82.22.82.632 0 .465-.407.71-.928.71-.452 0-.84-.22-.9-.68-.007-.045.016-.061.06-.061h.35c.044 0 .07.019.083.054.047.153.21.27.445.27.207 0 .388-.076.388-.238 0-.194-.19-.229-.572-.277-.44-.057-.744-.184-.744-.588 0-.404.346-.694.89-.694.49 0 .83.264.9.659.01.044-.003.073-.05.073H5.91zM6.772 2.192c-.031 0-.057-.029-.057-.06V.09c0-.032.026-.06.057-.06h.865C8.28.03 8.78.472 8.78 1.117c0 .636-.493 1.075-1.142 1.075h-.865zm.865-.43c.347 0 .617-.273.617-.652 0-.378-.27-.652-.62-.652h-.36c-.03 0-.056.029-.056.06v1.187c0 .031.025.057.057.057h.362z"
            transform="translate(5.56 12.6)"
          />
        </g>
        <path
          fill={`url(#${gradientIds[0]})`}
          d="M15.68 11.44H4.32c-.088 0-.16-.072-.16-.16V4.96c0-.44.36-.8.8-.8h10.08c.44 0 .8.36.8.8v6.32c0 .088-.072.16-.16.16z"
        />
        <path
          fill="#FFF"
          d="M10.59 10.142H9.55c-.067 0-.12-.054-.12-.12v-4.4c0-.066.053-.12.12-.12h1.04c.065 0 .12.054.12.12v4.4c0 .066-.055.12-.12.12z"
        />
        <path
          fill="#FFF"
          d="M12.36 6.782H7.64c-.066 0-.12-.054-.12-.12v-1.04c0-.066.054-.12.12-.12h4.72c.066 0 .12.054.12.12v1.04c0 .066-.054.12-.12.12z"
        />
      </g>
    </SvgIcon>
  );
}

export { TUSDIcon };
