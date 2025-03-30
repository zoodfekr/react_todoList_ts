import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "../public/style/index.css"; // استایل‌های عمومی پروژه

import { store } from "./redux/store/store.ts";
import { useAppSelector } from "./redux/hooks/reduxHooks.ts";
import { darktheme, theme } from "./theme/theme.ts";

import { ThemeProvider } from "@mui/material";
import { HeroUIProvider } from "@heroui/react";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { BrowserRouter } from "react-router";

import AppRoutes from "./routes/routes.tsx";

// تنظیمات راست‌چین برای MUI
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Root = () => {
  const themeMode = useAppSelector((state) => state.theme_slice.mode);
  const currentTheme = useMemo(() => (themeMode === "light" ? theme : darktheme), [themeMode]);

  return (
    <ThemeProvider theme={currentTheme}>

      <CacheProvider value={cacheRTL}>
        <BrowserRouter>
          <HeroUIProvider>
            <AppRoutes />
          </HeroUIProvider>
        </BrowserRouter>
      </CacheProvider>
    </ThemeProvider >
  );
};

// رندر کردن برنامه
createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>
);
