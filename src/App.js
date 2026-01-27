"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var pages_1 = require("./pages");
var ThemeToggle_1 = require("./components/ThemeToggle");
function App() {
    return (<>
      <ThemeToggle_1.default />
      <pages_1.default />
    </>);
}
exports.default = App;
