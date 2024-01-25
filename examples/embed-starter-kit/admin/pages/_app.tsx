import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core'
import Header from 'components/Header'
import type { AppProps } from 'next/app'
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
})
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
