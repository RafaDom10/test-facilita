import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F5F5F5',
  200: '#E5E5E5',
  300: '#C5C5C5',
  400: '#AEAEAE',
  500: '#979797',
  600: '#808080',
  700: '#696969',
  800: '#525252',
  900: '#3B3B3B',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const PRIMARY = {
  lighter: '#BFBFBF',
  light: '#808080',
  main: '#333333',
  dark: '#262626',
  darker: '#0D0D0D',
  contrastText: '#fff'
};
const SECONDARY = {
  lighter: '#F23716',
  light: '#99230E',
  main: '#801D0B',
  dark: '#661709',
  darker: '#400E06',
  contrastText: '#fff'
};
const INFO = {
  lighter: '#00A5B3',
  light: '#005E91',
  main: '#003DA6',
  dark: '#000D91',
  darker: '#09002E',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#5C7800',
  light: '#285700',
  main: '#126B00',
  dark: '#005709',
  darker: '#004217',
  contrastText: '#fff'
};
const WARNING = {
  lighter: '#E8A807',
  light: '#E0A607',
  main: '#BF9106',
  dark: '#AB8405',
  darker: '#997800',
  contrastText: '#fff'
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;
