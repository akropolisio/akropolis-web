import { SkeletonClassKey } from '@material-ui/lab/Skeleton';
import { TabPanelClassKey } from '@material-ui/lab/TabPanel';
import { createMuiTheme, darken, Theme, ThemeOptions } from '@material-ui/core/styles';
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';
import { mergeDeepRight } from 'ramda';
import { Object as O } from 'ts-toolbelt';

import { colors } from './colors';
import { makeGradient } from './makeGradient';
import { generateGridSpacingOverrides } from './generateGridSpacingOverrides';
import { getBreakpoints } from './getBreakpoints';

import { rgba } from '.';

export { Theme };

function getGradients(type: 'dark' | 'light') {
  return {
    main: makeGradient([colors.violetRed, colors.royalBlue3]),
    secondary: makeGradient([colors.mauvelous, colors.violetRedLight]),
    products: [
      makeGradient(
        type === 'dark' ? [colors.jacarta, colors.blueZodiac] : [colors.zumthor2, colors.linkWater],
      ),
      makeGradient(
        type === 'dark' ? [colors.jacarta2, colors.bunting] : [colors.whisper, colors.blueChalk],
      ),
      makeGradient(
        type === 'dark' ? [colors.bossanova, colors.valhalla] : [colors.snuff, colors.amour],
      ),
    ] as const,
    button: makeGradient([colors.violetRed, colors.royalBlue3, colors.violetRed, colors.violetRed]),
    outlinedButton: makeGradient([
      { color: colors.violetRed, offset: '0%' },
      { color: colors.royalBlue3, offset: '33.3%' },
      { color: colors.violetRed, offset: '100%' },
    ]),
    poolCompositionChart: [
      makeGradient(['#A88BEB', '#F8CEEC']),
      makeGradient(['#647DEE', '#7F53AC']),
      makeGradient(['#F53844', '#42378F']),
      makeGradient(['#0652C5', '#D4418E']),
      makeGradient(['#B621FE', '#1FD1F9']),
      makeGradient(['#5F72BE', '#9921E8']),
      makeGradient(['#05D6D9', '#F907FC']),
      makeGradient(['#AD1DEB', '#6E72FC']),
      makeGradient(['#E975A8', '#726CF8']),
      makeGradient(['#A1BAFE', '#8D5185']),
      makeGradient(['#AA4465', '#861657']),
      makeGradient(['#000000', '#923CB5']),
      makeGradient(['#000000', '#E056FD']),
      makeGradient(['#746CC0', '#58427C']),
      makeGradient(['#8241B8', '#6C33A3']),
      makeGradient(['#EE696B', '#523A78']),
      makeGradient(['#A594F9', '#6247AA']),
    ] as const,
    progressChart: makeGradient(['#7d40ff', '#02a4ff']),
    cardTitleInactive: makeGradient([colors.midnightBlue, colors.midnightBlue2]),
  };
}

const tokensPalette: {
  [token: string]: { gradient: ReturnType<typeof makeGradient>; hex: string };
} = {
  AKRO: {
    gradient: makeGradient(['#ff2382', '#5c45e2']),
    hex: '#f79dc2',
  },
  BAL: {
    gradient: makeGradient(['#c4b2db', '#594097']),
    hex: '#c4b2db',
  },
  COMP: {
    gradient: makeGradient(['#85f9e1', '#639ff8']),
    hex: '#85f9e1',
  },
  CRV: {
    gradient: makeGradient(['#daff5f', '#f8ffe5']),
    hex: '#daff5f',
  },
  SNX: {
    gradient: makeGradient(['#6a2db9', '#7543f6']),
    hex: '#4940b2',
  },
  MTA: {
    gradient: makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63',
  },
  YFI: {
    gradient: makeGradient(['#96d9ff', '#283ef0']),
    hex: '#96d9ff',
  },
  BTC: {
    gradient: makeGradient(['#ffc2a0', '#ffa17b']),
    hex: '#ffc2a0',
  },
  ETH: {
    gradient: makeGradient(['#96d9ff', '#283ef0']),
    hex: '#96d9ff',
  },
  WBTC: {
    gradient: makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63',
  },
  renBTC: {
    gradient: makeGradient(['#c523ff', '#ebc0f5']),
    hex: '#c523ff',
  },
  sBTC: {
    gradient: makeGradient(['#81a7ff', '#639ff8']),
    hex: '#81a7ff',
  },
  mUSD: {
    gradient: makeGradient(['#ffc2a0', '#ffa17b']),
    hex: '#ffc2a0',
  },
  TUSD: {
    gradient: makeGradient(['#4987e3', '#dfb2ff']),
    hex: '#4987e3',
  },
  DAI: {
    gradient: makeGradient(['#ffd99c', '#f8c563']),
    hex: '#fed89a',
  },
  USDC: {
    gradient: makeGradient(['#699ff8', '#62bdfb']),
    hex: '#699ff8',
  },
  USDT: {
    gradient: makeGradient(['#81f9be', '#a1ffdf']),
    hex: '#81f9be',
  },
  REN: {
    gradient: makeGradient(['#634dc9', '#ff74a8']),
    hex: '#634dc9',
  },
  sUSD: {
    gradient: makeGradient(['#6a2db9', '#7543f6']),
    hex: '#4940b2',
  },
  ADEL: {
    gradient: makeGradient(['#02a4ff', '#7d40ff']),
    hex: '#02a4ff',
  },
  BUSD: {
    gradient: makeGradient(['#fdde63', '#5ef3cd']),
    hex: '#fdde63',
  },
  AAVE: {
    gradient: makeGradient(['#a381f9', '#a1ffb2']),
    hex: '#a381f9',
  },
};

const breakpoints = {
  mobileXS: 0,
  mobileSM: 320,
  mobileMD: 480,
  mobileLG: 640,
  tabletXS: 768,
  tabletSM: 1024,
  tabletMD: 1100,
  tabletLG: 1200,
  desktopXS: 1280,
  desktopSM: 1360,
  desktopMD: 1440,
  desktopLG: 1920,
  desktopXL: 2560,
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const lightPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet,
  },
  text: {
    primary: colors.obsidian,
  },
  error: {
    main: colors.persimmon,
  },
  background: {
    hint: colors.athensGrayLight,
    default: colors.athensGray,
    paper: colors.athensGray,
    paperSecondary: colors.athensGray,
    paperLight: colors.white,
    paperExtraLight: colors.white,
    containedButton: colors.white,
    warning: colors.athensGray,
    card: colors.white,
    cardSecondary: colors.white,
    modal: colors.athensGrayDark,
    badge: colors.cadetBlue,
    badgeSecondary: colors.athensGray,
  },
  border: {
    primary: rgba(colors.obsidian, 0.2),
    secondary: rgba(colors.obsidian, 0.2),
    accent: colors.white,
    badgeBorder: rgba(colors.obsidian, 0.2),
  },
  type: 'light' as const,
};

export const darkPalette = {
  primary: {
    main: colors.purpleHeart,
    light: colors.heliotrope,
    dark: colors.mediumPurple,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.electricViolet,
    light: colors.electricViolet,
    dark: colors.electricViolet,
    contrastText: colors.electricViolet,
  },
  text: {
    primary: colors.white,
  },
  error: {
    main: colors.persimmon,
  },
  background: {
    hint: colors.darkSpace,
    default: colors.obsidian,
    paper: colors.cinder,
    paperSecondary: colors.darkBlueMagenta,
    paperLight: colors.jaguar,
    paperExtraLight: colors.cinder,
    containedButton: colors.blackRussian,
    warning: colors.blackRussian,
    card: colors.steelGray,
    cardSecondary: colors.darkSpace,
    modal: colors.darkBlueMagenta,
    badge: colors.mulledWine,
    badgeSecondary: colors.mulledWine,
  },
  border: {
    primary: colors.obsidian,
    secondary: colors.darkMist,
    accent: colors.obsidian,
    badgeBorder: colors.mulledWine,
  },
  type: 'dark' as const,
};

const sizes = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1,
  },
};

const defaultTheme = createMuiTheme({
  breakpoints: getBreakpoints(breakpoints),
});

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

export function getTheme(type: 'light' | 'dark', overrides?: ThemeOptions): Theme {
  const palette = type === 'light' ? lightPalette : darkPalette;

  return createMuiTheme(
    mergeDeepRight<ThemeOptions, ThemeOptions>(
      {
        colors,
        gradients: getGradients(type),
        tokensPalette,
        palette,
        breakpoints: getBreakpoints(breakpoints),
        typography: {
          fontFamily: ['AvenirNext LT Pro', 'Arial', 'sans-serif'].join(','),
          h6: {
            fontSize: 16,
            fontWeight: 400,
          },
        },
        shape: {
          borderRadius: 4,
        },
        overrides: {
          MuiPaper: {
            root: {
              transition: defaultTheme.transitions.create(['background-color', 'box-shadow']),
            },
          },

          MuiPickersToolbar: {
            toolbar: {
              height: 80,
              backgroundColor: type === 'light' ? colors.white : colors.black,

              '& .MuiTypography-h4': {
                fontSize: 16,
              },

              '& .MuiPickersToolbarText-toolbarTxt.MuiTypography-subtitle1': {
                color: rgba(palette.text.primary, 0.54),
              },

              '& .MuiPickersToolbarText-toolbarTxt.MuiTypography-h4': {
                color: palette.text.primary,
              },
            },
          },

          MuiPickersDay: {
            day: {
              '& .MuiTypography-body2': {
                marginTop: 1,
                lineHeight: 1,
              },
            },

            current: {
              color: '#d93cef',
            },

            daySelected: {
              color: '#fff',
              background: 'linear-gradient(to left, #5346e6, #ef359c)',
            },
          },

          MuiPickersYear: {
            root: {
              '&:focus': {
                color: '#d93cef',
              },
            },
            yearSelected: {
              color: '#d93cef',
            },
          },

          MuiLink: {
            root: {
              transition: defaultTheme.transitions.create(['border-color', 'color']),
            },

            underlineHover: {
              paddingBottom: 2,
              borderWidth: '0 0 1px 0',
              borderStyle: 'solid',
              borderColor: 'transparent',

              '&:hover': {
                textDecoration: 'none',
                borderColor: 'currentColor',
              },
            },

            underlineAlways: {
              paddingBottom: 2,
              borderWidth: '0 0 1px 0',
              borderStyle: 'solid',
              borderColor: type === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
              textDecoration: 'none',

              '&:hover': {
                textDecoration: 'none',
                borderColor: 'currentColor',
              },
            },
          },

          MuiCssBaseline: {
            '@global': {
              html: {
                boxSizing: 'border-box',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                fontSize: 16,
                fontFamily: ['AvenirNext LT Pro', 'Arial', 'sans-serif'].join(','),
              },

              body: {
                margin: 0,
                fontSize: '1rem',
                transition: defaultTheme.transitions.create('background-color'),
              },

              'html, body, #root': {
                height: '100%',
              },

              '*, *::before, *::after': {
                boxSizing: 'inherit',
              },

              '@media print': {
                body: {
                  backgroundColor: '#fff',
                },
              },

              '#root': {
                zIndex: 1,
                position: 'relative',
              },

              '#walletconnect-wrapper': {
                zIndex: defaultTheme.zIndex.modal,
                position: 'relative',
              },
            },
          },

          MuiButton: {
            root: {
              '& .MuiButton-label': {
                transition: defaultTheme.transitions.create('color'),
              },
            },

            endIcon: {
              '&:empty': {
                display: 'none',
              },
            },

            startIcon: {
              '&:empty': {
                display: 'none',
              },
            },
          },

          MuiGrid: {
            ...generateGridSpacingOverrides(defaultTheme.spacing),
          },

          MuiSnackbarContent: {
            // TODO: research if MuiSnackbarContent is used or not
            root: {
              backgroundColor: '#fff',
            },
            message: {
              color: colors.rhino,
            },
          },

          MuiFormControlLabel: {
            root: {
              marginRight: 0,
            },
          },

          MuiFormGroup: {
            row: {
              '& .MuiFormControlLabel-root': {
                marginRight: 20,
              },
            },
          },

          MuiSvgIcon: {
            root: {
              display: 'block',
              fontSize: '1.25rem',
            },

            fontSizeSmall: {
              fontSize: '1rem',
            },

            fontSizeLarge: {
              fontSize: '1.5rem',
            },
          },

          MuiDialog: {
            paper: {
              boxShadow: 'none',
            },
          },

          MuiDialogTitle: {
            root: {
              fontSize: '1.375rem',
              fontWeight: 300,
              padding: 0,
            },
          },

          MuiInput: {
            underline: {
              minHeight: 0,

              '&:before': {
                display: 'none',
              },

              '&:after': {
                display: 'none',
              },

              '& $input.MuiSelect-select': {
                padding: '0 20px 0 0',
              },
            },
          },

          MuiOutlinedInput: {
            root: {
              borderColor: type === 'light' ? colors.darkMist : colors.obsidian,
              backgroundColor: type === 'light' ? 'transparent' : colors.charadeLight,
              borderRadius: 6,
              minHeight: 36,

              '&$focused': {
                background: type === 'light' ? darken(colors.athensGray, 0.1) : '#3A3A50',
              },

              '&$disabled': {
                color: 'rgba(255, 255, 255, 0.2)',
              },

              '&$error': {
                borderColor: '#643d3d',
              },

              '&$colorSecondary': {
                borderColor: colors.stormGray,
              },
            },

            adornedEnd: {
              paddingRight: 0,
            },

            input: {
              fontWeight: 300,
              padding: '8px 11px',

              '&::placeholder': {
                color: rgba(palette.text.primary, 0.5),
                opacity: 1,
              },

              '&$disabled': {
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.3)',
                },
              },
            },

            notchedOutline: {
              borderColor: 'inherit !important',
              borderWidth: '1px !important',
            },
          },

          MuiFilledInput: {
            underline: {
              minHeight: 0,

              '&:before': {
                display: 'none',
              },

              '&:after': {
                display: 'none',
              },
            },

            root: {
              borderRadius: 6,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            },
          },

          MuiFormHelperText: {
            root: {
              fontWeight: 300,
              margin: 0,
              marginTop: 5,
              lineHeight: 1.25,

              '&$error': {
                color: '#FE5A59',
              },
            },
          },

          MuiMenuItem: {
            root: {
              fontWeight: 300,
              padding: '10px 9px',

              '&$selected, &$selected:hover': {
                backgroundColor: palette.background.containedButton,
              },

              '&:hover': {
                backgroundColor: type === 'light' ? colors.athensGray : colors.darkMist,
              },
            },
          },

          MuiSelect: {
            root: {
              overflow: 'hidden',
            },

            select: {
              '&:focus': {
                backgroundColor: 'transparent',
              },
            },

            filled: {
              padding: '8px 11px',

              '&:hover:not($disabled)': {
                backgroundColor: 'transparent',
              },
            },
          },

          MuiTabs: {
            root: {
              position: 'relative',
              display: 'inline-flex',
              overflow: 'hidden',
              minHeight: sizes.tabs.height,
              borderRadius: sizes.tabs.height / 2,
              padding: sizes.tabs.indicatorSpace,
              background: 'linear-gradient(to left, #5346e6, #ef359c)',

              '&::before': {
                content: "''",
                position: 'absolute',
                top: 1,
                left: 1,
                right: 1,
                bottom: 1,
                borderRadius: sizes.tabs.height / 2,
              },
            },

            indicator: {
              top: 0,
              bottom: 0,
              height: '100%',
              borderRadius:
                sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
              zIndex: -1,
              background: 'linear-gradient(to left, #5346e6, #ef359c)',
            },

            scroller: {
              zIndex: 1,
              overflow: 'hidden',
              borderRadius:
                sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
            },

            flexContainer: {
              height: '100%',
            },
          },

          MuiTab: {
            root: {
              position: 'relative',
              overflow: 'visible',
              minHeight: 'unset',
              minWidth: 'unset !important',
              textTransform: 'unset',
              fontSize: 'inherit',
              fontWeight: 300,
              lineHeight: 1.5,
              borderRadius:
                sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,
              padding: defaultTheme.spacing(0.2, 1.25),

              [defaultTheme.breakpoints.up('mobileMD')]: {
                padding: defaultTheme.spacing(0.2, 2.5),
              },

              '&::after': {
                content: "''",
                position: 'absolute',
                left: 0,
                width: 1,
                top: 3,
                bottom: 3,
                background: 'currentColor',
                opacity: 0,
                transition: defaultTheme.transitions.create('opacity'),
              },

              '&:not($selected)': {
                '& + &::after': {
                  opacity: 0.2,
                },
              },

              '&$selected': {
                color: colors.white,
              },
            },

            textColorInherit: {
              opacity: 1,

              '&$disabled': {
                opacity: 0.2,
              },
            },
          },

          MuiTooltip: {
            tooltip: {
              padding: '15px',
              border: `1px solid ${type === 'light' ? 'rgba(10, 10, 14, 0.2)' : '#373740'}`,
              borderRadius: '6px',
              backgroundColor: palette.background.containedButton,
              color: type === 'light' ? colors.obsidian : '#fff',
            },
            tooltipPlacementTop: {
              margin: '8px 0 !important',
            },
            tooltipPlacementBottom: {
              margin: '8px 0 !important',
            },
            tooltipPlacementRight: {
              margin: '0 8px !important',
            },
            tooltipPlacementLeft: {
              margin: '0 8px !important',
            },
          },

          MuiSkeleton: {
            root: {
              backgroundColor: '#20202d',
              borderRadius: 6,
            },
          },

          MuiTabPanel: {
            root: {
              padding: 0,
            },
          },

          MuiBackdrop: {
            root: {
              backgroundColor:
                type === 'light' ? rgba(colors.white, 0.8) : rgba(colors.obsidian, 0.9),
            },
          },
        },
      },
      overrides || {},
    ) as any,
  );
}

export interface ThemeOverrides {}

export interface ThemeOptionsOverrides {}

export interface TypeBackgroundOverrides {}

export interface TypeBreakpointOverrides {}

// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/prefer-namespace-keyword
declare module PackageOverrides {
  interface Theme {
    colors: typeof colors;
    gradients: ReturnType<typeof getGradients>;
    tokensPalette: typeof tokensPalette;
    breakpoints: ReturnType<typeof getBreakpoints>;
  }

  interface ThemeOptions {
    colors?: Partial<typeof colors>;
    gradients?: Partial<ReturnType<typeof getGradients>>;
    tokensPalette?: Partial<typeof tokensPalette>;
    breakpoints?: ReturnType<typeof getBreakpoints>;
  }

  interface TypeBackground {
    hint: string;
    tableHeader: string;
    paperSecondary: string;
    paperLight: string;
    paperExtraLight: string;
    containedButton: string;
    warning: string;
    card: string;
    cardSecondary: string;
    modal: string;
    badge: string;
    badgeSecondary: string;
  }

  interface PaletteOptions {
    border: {
      primary: string;
      secondary: string;
      accent: string;
      badgeBorder: string;
    };
  }

  interface TypeBreakpoint {
    desktopXL: true;
    desktopLG: true;
    desktopMD: true;
    desktopSM: true;
    desktopXS: true;
    tabletSM: true;
    tabletMD: true;
    tabletLG: true;
    tabletXS: true;
    mobileLG: true;
    mobileMD: true;
    mobileSM: true;
    mobileXS: true;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
type MergeThemeOptions<A extends object, B extends object> = O.Partial<
  O.Merge<O.Required<A, keyof any, 'deep'>, O.Required<B, keyof any, 'deep'>, 'deep'>,
  'deep'
>;

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends O.Merge<ThemeOverrides, PackageOverrides.Theme, 'deep'> {}

  interface ThemeOptions
    extends MergeThemeOptions<ThemeOptionsOverrides, PackageOverrides.ThemeOptions> {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground
    extends O.Merge<TypeBackgroundOverrides, PackageOverrides.TypeBackground, 'deep'> {}

  interface Palette extends PackageOverrides.PaletteOptions {}
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides
    extends O.Merge<TypeBreakpointOverrides, PackageOverrides.TypeBreakpoint, 'deep'> {}
}

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiSkeleton: SkeletonClassKey;
    MuiTabPanel: TabPanelClassKey;
    MuiPickersToolbar: keyof Required<MuiPickersOverrides>['MuiPickersToolbar'];
    MuiPickersDay: keyof Required<MuiPickersOverrides>['MuiPickersDay'];
    MuiPickersYear: keyof Required<MuiPickersOverrides>['MuiPickersYear'];
  }
}
