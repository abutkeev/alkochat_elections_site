import { FC, useEffect, useState } from 'react';
import { GetAuth } from './api/auth';
import LoadingWrapper from './components/LoadingWrapper';
import LoginPage from './components/login-page';
import MainPage from './components/main-page';
import { resetAuth, setAuth } from './redux/reducers/auth';
import { useAppDispatch, useAppSelector } from './redux/store';

const App: FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth);

    useEffect(() => {
        setLoading(true);
        GetAuth()
            .then(auth => (auth ? dispatch(setAuth(auth)) : dispatch(resetAuth())))
            .then(() => setLoading(false))
            .catch(() => setError(true));
        setLoading(false);
    }, [dispatch]);
    return (
        <LoadingWrapper loading={loading} error={error}>
            {auth ? <MainPage /> : <LoginPage />}
        </LoadingWrapper>
    );
};

export default App;
