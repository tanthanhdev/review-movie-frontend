// import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $authStore } from '../../services';
import NavButtons from './Components/NavButtons/NavButtons';

export const Header = () => {
    const authToken = localStorage.getItem('access_token');
    const auth = useStore($authStore);
    const isLogined = !!auth?.access_token || authToken;
    // const [ isLogined, setIsLoggedIn ] = useState(false);

    // const checkLogined = () => {
    //     setIsLoggedIn(!!auth?.access_token || authToken);
    // }

    // useEffect(() => {
    //     checkLogined();
    // }, [isLogined])

    return (
        <header id="header" className="header">
            <NavButtons isLogined={isLogined} />
        </header>
    );
};