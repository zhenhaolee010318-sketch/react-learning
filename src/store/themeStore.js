"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.ThemeContext = exports.createThemeStore = void 0;
exports.useTheme = useTheme;
var react_1 = require("react");
var zustand_1 = require("zustand");
exports.createThemeStore = (0, zustand_1.createStore)(function (set, get) { return ({
    theme: localStorage.getItem('theme') || 'light',
    setTheme: function (theme) {
        set({ theme: theme });
        localStorage.setItem('theme', theme);
        // 更新根元素的类名
        var root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
        }
    },
    toggleTheme: function () {
        var currentTheme = get().theme;
        var newTheme = currentTheme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
    }
}); });
exports.ThemeContext = (0, react_1.createContext)(null);
var ThemeProvider = function (_a) {
    var children = _a.children;
    var store = (0, react_1.useState)(exports.createThemeStore)[0];
    // 初始化时应用主题
    (0, react_1.useEffect)(function () {
        var theme = store.getState().theme;
        var root = document.documentElement; // Tailwind 暗色模式需要作用在 html 元素上
        if (theme === 'dark') {
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
        }
    }, [store]);
    return (<exports.ThemeContext.Provider value={store}>
            {children}
        </exports.ThemeContext.Provider>);
};
exports.ThemeProvider = ThemeProvider;
function useTheme(selector) {
    var context = (0, react_1.useContext)(exports.ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return (0, zustand_1.useStore)(context, selector);
}
