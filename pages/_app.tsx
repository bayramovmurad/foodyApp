import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../config/i18n/i18n'
import 'react-toastify/dist/ReactToastify.css';
import Provider from '../provider/provider'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp