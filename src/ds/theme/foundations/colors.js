
const colors = {
    primary: {
      100:'#D4DBFC',
      200:'#A9B8FA',
      300:'#7C90F1',
      400:'#5A6FE4',
      500:'#2940D3',
      600:'#1D30B5',
      700:'#142297',
      800:'#0D177A',
      900:'#070F65'
    },
    grey: {
      100:'#F5F5F7',
      200: '#FAFAFA',
      300: '#EEEEEE',
      400: '#D8D8D8',
      500: '#C2C2C3',
      600: '#8E8E90',
      700: '#717173',
    },
    black: '#212124',
    overlay: '#21212499',
    white: '#FFFFFF',
    green: {
      300: '#E5FBF4',
      400: '#CCF6E9',
      500: '#00D28F',
      600: '#00B976',
      700: '#009F5C',
    },
    red: {
      300: '#FAE6E8',
      400: '#F6CCD1',
      500: '#D0021B',
      600: '#B70002',
      700: '#9D0000',
    },
    orange: {
      300: '#FFEFEA',
      400: '#FFDFD4',
      500: '#FF602A',
    },
    yellow: {
      300: '#FDF8E8',
      400: '#FBF1D1',
      500: '#EAB719',
    },
    blue: {
      300: '#E6F4FF',
      400: '#CDE9FF',
      500: '#0490FF',
    },
  } as const;
  
  export type Colors = typeof colors;
  export default colors;