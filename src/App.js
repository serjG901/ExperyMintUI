import React from "react";
import "./App.css";
import AppRouter from "./components/approuter/AppRouter";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { LoginProvider } from "./components/core/LoginProvider";
import { UserProvider } from "./components/core/UserProvider";
import { PushUpErrorProvider } from "./components/core/PushUpErrorProvider";
import { PushUpProvider } from "./components/core/PushUpProvider";
import { LanguageProvider } from "./components/core/LanguageProvider";

function App() {
  return (
    <PushUpErrorProvider>
      <PushUpProvider>
        <ThemeProvider>
          <LanguageProvider>
            <LoginProvider>
              <UserProvider>
                <AppRouter />
              </UserProvider>
            </LoginProvider>
          </LanguageProvider>
        </ThemeProvider>
      </PushUpProvider>
    </PushUpErrorProvider>
  );
}

export default App;
