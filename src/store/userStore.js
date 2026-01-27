"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = exports.UserContext = exports.createUserStore = void 0;
exports.useUser = useUser;
var react_1 = require("react");
var zustand_1 = require("zustand");
exports.createUserStore = (0, zustand_1.createStore)(function (set) { return ({
    user: null,
    setUser: function (user) { return set({ user: user }); }
}); });
exports.UserContext = (0, react_1.createContext)(null);
var UserProvider = function (_a) {
    var children = _a.children;
    var store = (0, react_1.useState)(exports.createUserStore)[0];
    return (<exports.UserContext.Provider value={store}>
            {children}
        </exports.UserContext.Provider>);
};
exports.UserProvider = UserProvider;
function useUser(selector) {
    var context = (0, react_1.useContext)(exports.UserContext);
    return (0, zustand_1.useStore)(context, selector);
}
