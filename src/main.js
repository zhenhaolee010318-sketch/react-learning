"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_tsx_1 = require("./App.tsx");
var userStore_tsx_1 = require("./store/userStore.tsx");
var themeStore_tsx_1 = require("./store/themeStore.tsx");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <themeStore_tsx_1.ThemeProvider>
      <userStore_tsx_1.UserProvider>
        <App_tsx_1.default />
      </userStore_tsx_1.UserProvider>
    </themeStore_tsx_1.ThemeProvider>
  </react_1.StrictMode>);
