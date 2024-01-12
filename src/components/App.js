import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                // 로그인 상태라면 isLoggedIn을 변경
                setIsLoggedIn(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);
    return (
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
            <footer>&copy; {new Date().getFullYear()} </footer>
        </>
    );
}

export default App;
