export const themeSettings = () => {
  return {
    palette: {
      primary: {
        main: 'hsl(79, 72%, 55%)',
        light: 'hsl(79, 97%, 77%)',
        dark: 'hsl(79, 63%, 50%)',
        alt: 'hsl(79, 67%, 52%)',
        grey: 'hsl(79, 6%, 64%)'
      },
      text: {
        primary: 'hsl(180, 4%, 72%)',
        secondary: 'hsl(180, 4%, 98%)',
        black: 'hsl(180, 4%, 12%)'
      },
      background: {
        paper: 'hsl(180, 12%, 8%)',
        default: 'hsl(180, 12%, 8%)'
      }
    },
    typography: {
      subtitle1: {
        fontFamily: ['Kaushan Script', 'cursive'].join(',')
      },
      body1: {
        fontFamily: ['Red Hat Display', 'sans-serif'].join(','),
        fontWeight: 400,
        fontSize: '0.938rem',
        lineHeight: 'initial',
        letterSpacing: 'initial'
      }
    }
  }
}
