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
      makeGradient(['#63f8b3', '#dcff9c']),
      makeGradient(['#e323ff', '#7517f8']),
      makeGradient(['#639ff8', '#85f9e1']),
      makeGradient(['#7d40ff', '#02a4ff']),
      makeGradient(['#f985f5', '#f863dd']),
    ] as const,
    progressChart: makeGradient(['#7d40ff', '#02a4ff']),
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
    main: colors.monza,
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
    main: colors.monza,
  },
  background: {
    hint: colors.darkSpace,
    default: colors.obsidian,
    paper: colors.cinder,
    paperSecondary: colors.darkBlueMagenta,
  },
  type: 'dark' as const,
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
              textDecoration: 'underline',
              textDecorationColor:
                type === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',

              '&:hover': {
                textDecorationColor: 'inherit',
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

          MuiBackdrop: {
            root: {
              backgroundColor: 'rgba(0, 0, 0, 0.15)',
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
