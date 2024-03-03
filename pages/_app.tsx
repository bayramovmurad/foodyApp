import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../config/i18n/i18n'
import Provider from '../provider/provider'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../styles/swipper/swipper.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp