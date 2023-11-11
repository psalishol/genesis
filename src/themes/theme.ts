import {ResponsiveValue, createTheme} from '@shopify/restyle';
import palletes from './pallete';
import {StatusBarStyle} from 'react-native';

export type KeyboardAppearance = 'default' | 'dark' | 'light' | undefined;

const theme = createTheme({
  spacing: {
    '0': 0,
    xxs: 2,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 24,
    xl: 32,
    '2xl': 48,
    auto: 'auto',
  },
  borderRadii: {
    '0': 0,
    xxs: 2,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle,
  },
  colors: {
    $primary: palletes.black,
  },
  keyboard: {
    keyboardAppearance: 'dark' as KeyboardAppearance,
  },
  textVariants: {
    default: {
      fontSize: 12,
    },
  },
});

export type Theme = typeof theme;

const lightTheme: Theme = {
  ...theme,
  keyboard: {
    keyboardAppearance: 'light' as keyof KeyboardAppearance,
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle,
  },
  colors: {
    ...theme.colors,
    $primary: palletes.white,
  },
};

export {theme, lightTheme};

export type ResponsiveColorPropType = ResponsiveValue<
  keyof Theme['colors'],
  Theme
>;

export type ResponsiveSpacingPropType = ResponsiveValue<
  keyof Theme['spacing'],
  Theme
>;

export type ResponsiveVariantType = ResponsiveValue<
  keyof Theme['textVariants'],
  Theme
>;
