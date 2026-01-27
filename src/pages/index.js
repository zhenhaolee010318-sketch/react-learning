"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var userStore_1 = require("../store/userStore");
var selectUser = function (state) { return state.user; };
var selectSetUser = function (state) { return state.setUser; };
/**
 *
 * @returns
 */
var MainPage = function () {
    var user = (0, userStore_1.useUser)(selectUser);
    var setUser = (0, userStore_1.useUser)(selectSetUser);
    (0, react_1.useEffect)(function () {
        setUser({
            name: "Jonh",
            age: 20,
            email: "jon@gmail.com"
        });
    }, []);
    return (<div className="min-h-screen bg-white dark:bg-gray-900 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    用户信息
                </h1>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <p className="text-[48px] text-gray-800 dark:text-gray-200 font-semibold">
                        {user === null || user === void 0 ? void 0 : user.name}
                    </p>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                        年龄: {user === null || user === void 0 ? void 0 : user.age}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        邮箱: {user === null || user === void 0 ? void 0 : user.email}
                    </p>
                </div>
            </div>
        </div>);
};
exports.default = MainPage;
