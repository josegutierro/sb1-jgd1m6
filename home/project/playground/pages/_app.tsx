import type { AppProps } from 'next/app'
import { StowlogProvider } from 'stowlog-ui'
import 'stowlog-ui/dist/styles.css'  // Import the CSS file

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StowlogProvider>
      <Component {...pageProps} />
    </StowlogProvider>
  )
}