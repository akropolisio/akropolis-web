import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import { mergeDeepRight } from 'ramda';
import { Object } from 'ts-toolbelt';

import { colors } from './colors';
import { makeGradient } from './makeGradient';
import { generateGridSpacingOverrides } from './generateGridSpacingOverrides';

export { Theme };

const defaultTheme = createMuiTheme();

function getGradients(type: 'dark' | 'light') {
  return {
    main: makeGradient([colors.heliotrope, colors.royalBlue]),
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
    button: makeGradient([
      colors.heliotrope,
      colors.royalBlue,
      colors.heliotrope2,
      colors.heliotrope,
    ]),
    outlinedButton: makeGradient([
      { color: colors.heliotrope, offset: '0%' },
      { color: colors.royalBlue, offset: '33.3%' },
      { color: colors.heliotrope, offset: '100%' },
    ]),
    poolCompositionChart: [
      makeGradient(['#699FF8', '#62BDFB']),
      makeGradient(['#85F9E1', '#639FF8']),
      makeGradient(['#E323FF', '#7517F8']),
      makeGradient(['#02A4FF', '#7D40FF']),
      makeGradient(['#F997F6', '#F863DD']),
      makeGradient(['#81F9BE', '#A1FFDF']),
      makeGradient(['#F8C563', '#FFD99C']),
      makeGradient(['#FF2382', '#F5C0D4']),
      makeGradient(['#C523FF', '#EBC0F5']),
      makeGradient(['#A381F9', '#A1FFB2']),
      makeGradient(['#FFC2A0', '#FFA17B']),
      makeGradient(['#DAFF5F', '#F8FFE5']),
      makeGradient(['#283EF0', '#96D9FF']),
      makeGradient(['#634DC9', '#FF74A8']),
      makeGradient(['#FDDE63', '#5EF3CD']),
    ] as const,
    progressChart: makeGradient(['#7d40ff', '#02a4ff']),
    cardTitleInactive: makeGradient([colors.midnightBlue, colors.midnightBlue2]),
  };
}

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
    primary: colors.black,
  },
  error: {
    main: colors.persimmon,
  },
  background: {
    hint: colors.charade,
    default: colors.athensGray,
    paper: colors.white,
    paperSecondary: colors.white,
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
  },
  type: 'dark' as const,
};

const sizes = {
  tabs: {
    height: 36,
    indicatorSpace: 3,
    borderWidth: 1,
    minWidth: 112,
  },
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

export function getTheme(type: 'light' | 'dark', overrides?: ThemeOptions): Theme {
  return createMuiTheme(
    mergeDeepRight<ThemeOptions, ThemeOptions>(
      {
        colors,
        gradients: getGradients(type),
        palette: type === 'light' ? lightPalette : darkPalette,
        typography: {
          fontFamily: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','),
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

          MuiLink: {
            underlineHover: {
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
                fontFamily: 'helvetica, sans-serif',
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

          MuiDialogTitle: {
            root: {
              fontSize: '1.375rem',
              fontWeight: 300,
              padding: 0,
            },
          },

          MuiOutlinedInput: {
            root: {
              borderColor: colors.darkMist,
              borderRadius: 8,
              minHeight: 36,

              '&$focused': {
                background: colors.blackRussian,
              },

              '&$disabled': {
                color: 'rgba(255, 255, 255, 0.2)',
              },

              '&$error': {
                borderColor: '#643d3d',
              },
            },

            adornedEnd: {
              paddingRight: 0,
            },

            input: {
              fontWeight: 300,
              padding: '8px 11px',

              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },

            notchedOutline: {
              borderColor: 'inherit !important',
              borderWidth: '1px !important',
            },
          },

          MuiFormHelperText: {
            root: {
              fontWeight: 300,
              '&$error': {
                margin: '5px 0 0',
                color: '#FE5A59',
              },
            },
          },

          MuiMenuItem: {
            root: {
              fontWeight: 300,
              padding: '10px 9px',

              '&$selected, &$selected:hover': {
                backgroundColor: colors.blackRussian,
              },

              '&:hover': {
                backgroundColor: colors.darkMist,
              },
            },
          },

          MuiSelect: {
            root: {
              overflow: 'hidden',

              '&$select:focus': {
                backgroundColor: colors.blackRussian,
              },

              '&:hover:not($disabled)': {
                backgroundColor: colors.blackRussian,
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
              background: 'linear-gradient(to left, #544cf2, #d93cef)',

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
              background: 'linear-gradient(to left, #544cf2, #d93cef)',
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
              minWidth: sizes.tabs.minWidth,
              position: 'relative',
              overflow: 'visible',
              minHeight: 'unset',
              padding: defaultTheme.spacing(0.2, 1.5),
              textTransform: 'unset',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.5,
              borderRadius:
                sizes.tabs.height / 2 - sizes.tabs.indicatorSpace - sizes.tabs.borderWidth,

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
          },
        },

        // TODO: enable @material-ui/lab overrides
        // @ts-ignore
        MuiTabPanel: {
          root: {
            padding: 0,
          },
          MuiBackdrop: {
            root: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
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

declare module PackageOverrides {
  interface Theme {
    colors: typeof colors;
    gradients: ReturnType<typeof getGradients>;
  }

  interface ThemeOptions {
    colors?: Partial<typeof colors>;
    gradients?: Partial<ReturnType<typeof getGradients>>;
  }

  interface TypeBackground {
    hint: string;
    tableHeader: string;
    paperSecondary: string;
  }
}

type MergeThemeOptions<A extends object, B extends object> = Object.Partial<
  Object.Merge<
    Object.Required<A, keyof any, 'deep'>,
    Object.Required<B, keyof any, 'deep'>,
    'deep'
  >,
  'deep'
>;

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends Object.Merge<ThemeOverrides, PackageOverrides.Theme, 'deep'> {}

  interface ThemeOptions
    extends MergeThemeOptions<ThemeOptionsOverrides, PackageOverrides.ThemeOptions> {}
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground
    extends Object.Merge<TypeBackgroundOverrides, PackageOverrides.TypeBackground, 'deep'> {}
}
