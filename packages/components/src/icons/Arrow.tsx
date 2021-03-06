import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Arrow(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 13 7">
      <path
        fill="currentColor"
        d="M6.504 7c.212 0 .408-.09.558-.239l5.718-5.553c.141-.135.22-.306.22-.5C13 .306 12.678 0 12.254 0c-.197 0-.393.075-.534.209L6.504 5.278 1.28.208C1.14.076.958 0 .746 0 .33 0 0 .306 0 .708c0 .194.079.365.22.5L5.938 6.76c.165.157.346.239.566.239z"
      />
    </SvgIcon>
  );
}

export { Arrow };
