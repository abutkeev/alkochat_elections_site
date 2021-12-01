import { FC } from 'react';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';
import { PostAuth } from '../../api/auth';

const LoginPage: FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                margin: 50,
            }}
        >
            <TLoginButton botName='alkochat_site_bot' buttonSize={TLoginButtonSize.Large} usePic={false} cornerRadius={5} onAuthCallback={user => PostAuth(user)} requestAccess='write' />
        </div>
    );
};

export default LoginPage;
