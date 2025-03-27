import { StrictMode, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'


import '../public/style/index.css'
import App from './App.tsx'
import { store } from './redux/store/store.ts'
import { ThemeProvider } from '@mui/material'
import { useAppSelector } from './redux/hooks/reduxHooks.ts'
import { darktheme, theme } from './theme/theme.ts'
import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})


const Root = () => {
  const themeMode = useAppSelector(state => state.theme_slice.mode)
  const currentTheme = useMemo(
    () => (themeMode === 'light' ? theme : darktheme),
    [themeMode]
  )
  return (
    <ThemeProvider theme={currentTheme}>
      <CacheProvider value={cacheRTL}>
        <App />
      </CacheProvider>
    </ThemeProvider>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root></Root>
    </Provider>
  </StrictMode>
)
