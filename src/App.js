import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { LanguageProvider } from "./components/core/LanguageProvider";
import { PushUpErrorProvider } from "./components/core/PushUpErrorProvider";
import { PushUpProvider } from "./components/core/PushUpProvider";
import { UserProvider } from "./components/core/UserProvider";
import AppRouter from "./components/approuter/AppRouter";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PushUpErrorProvider>
          <PushUpProvider>
            <UserProvider>
              <AppRouter />
            </UserProvider>
          </PushUpProvider>
        </PushUpErrorProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
