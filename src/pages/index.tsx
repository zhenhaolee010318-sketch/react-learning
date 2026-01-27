import { useEffect, type FC } from "react";
import { useUser, type UserStore } from "../store/userStore";

const selectUser = (state: UserStore) => state.user;
const selectSetUser = (state: UserStore) => state.setUser;

/**
 * 
 * @returns 
 */
const MainPage: FC = () => {

    const user = useUser(selectUser) ;
    const setUser = useUser(selectSetUser);

    useEffect(() => {
        setUser({
            name: "Jonh",
            age: 20,
            email: "jon@gmail.com"
        })
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    用户信息
                </h1>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <p className="text-[48px] text-gray-800 dark:text-gray-200 font-semibold">
                        {user?.name}
                    </p>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                        年龄: {user?.age}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        邮箱: {user?.email}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
