import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useTheme } from '@akropolis-web/styles';

function AKROIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 19 20">
      {theme.gradients.main.svgLinear('AKROIconGradient')}
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#AKROIconGradient)"
          d="M9.51 0c.357 0 .746.094 1.07.283l7.368 4.114c.65.377 1.071 1.037 1.071 1.79v8.261c0 .723-.421 1.414-1.07 1.79l-7.368 4.084c-.324.188-.695.286-1.071.282-.377 0-.746-.098-1.071-.282L1.07 16.207C.422 15.83 0 15.171 0 14.417v-8.23c0-.722.422-1.413 1.071-1.79l7.4-4.114C8.785.099 9.144 0 9.51 0z"
        />
        <path
          fill="#FFF"
          d="M9.483 1.683c.42 0 .817.12 1.189.313l5.624 3.183c.736.407 1.19 1.172 1.19 2v6.341c0 .829-.455 1.593-1.19 2l-5.624 3.16c-.372.216-.768.313-1.19.313-.42 0-.817-.097-1.188-.314L2.67 15.521c-.736-.408-1.19-1.172-1.19-2V7.18c0-.829.454-1.594 1.19-2.001l5.624-3.183c.371-.217.768-.313 1.189-.313zm0 .747c-.28 0-.554.076-.793.217L3.04 5.805c-.495.29-.817.82-.817 1.375v6.316c0 .578.322 1.084.817 1.374l5.624 3.158c.249.142.53.217.818.217.287.003.57-.072.817-.217l5.624-3.134c.496-.289.818-.82.818-1.374V7.18c0-.579-.322-1.085-.818-1.375L10.3 2.647c-.247-.145-.545-.217-.817-.217zm.04 2.058c.222 0 .445.048.643.192l4.035 2.255c.396.216.643.624.643 1.08v4.51c0 .432-.247.864-.643 1.08l-4.035 2.255c-.198.12-.42.168-.643.168-.223 0-.446-.048-.644-.169l-4.034-2.254c-.396-.216-.644-.624-.644-1.08V7.99c0-.432.248-.864.644-1.08l4.034-2.255c.198-.12.42-.168.644-.168zm0 .624c-.1 0-.223.024-.322.096L5.19 7.463c-.198.12-.321.336-.321.551v4.535c0 .24.123.432.321.552l4.035 2.255c.099.072.198.096.322.096.123 0 .222-.048.32-.096l4.036-2.255c.196-.12.317-.327.321-.552V8.014c0-.24-.123-.431-.321-.551l-4.06-2.255c-.099-.072-.198-.096-.321-.096zm.04 2.18c.123 0 .222.024.321.097l2.078 1.152c.196.119.317.327.322.552v2.329c0 .24-.124.432-.322.552l-2.078 1.153c-.099.072-.198.096-.321.096-.1 0-.223-.048-.322-.096l-2.078-1.153c-.197-.12-.321-.336-.321-.552V9.093c0-.24.124-.432.321-.552l2.078-1.152c.1-.073.198-.096.322-.096zm.024.577h-.049L7.46 9.02l-.024 2.377 2.102 1.2 2.127-1.152.025-2.377-2.103-1.2z"
        />
      </g>
    </SvgIcon>
  );
}

export { AKROIcon };
