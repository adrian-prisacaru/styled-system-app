const theme = {
  breakpoints: ['576px', '760px', '992px', '1400px'],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0B7A75',
    secondary: '#f0f3f5',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      cursor: 'pointer'
    },
    secondary: {
      color: 'black',
      bg: 'secondary',
      cursor: 'pointer'
    }
  },
  fonts: {
    body: 'Mulish, sans-serif',
    heading: 'Mulish, sans-serif'
  },
  text: {
    default: {
      lineHeight: 1.5
    }
  },
  styles: {
    a: {
      textDecoration: 'none'
    },
    root: {
      margin: 0
    }
  }
}

export default theme
