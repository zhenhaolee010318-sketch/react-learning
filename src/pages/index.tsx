import { useEffect, type FC } from "react";
import { createUserStore } from "../store/userStore";

const MainPage: FC = () => {

    const { user, setUser } = createUserStore();

    useEffect(() => {
        setUser({
            name: "Jon",
            age: 20,
            email: "jon@gmail.com"
        })
    }, [])

    return <div>{user?.name}</div>;
}
export default MainPage;