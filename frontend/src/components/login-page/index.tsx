import { FC } from "react";
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

const LoginPage: FC = () => {
    return (
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            margin: 50
        }}>
            <TLoginButton
                botName='alkochat_site_bot'
                buttonSize={TLoginButtonSize.Large}
                usePic={false}
                cornerRadius={5}
                onAuthCallback={user => console.log('auth', user)}
                requestAccess='write'
            />
        </div>
    );
}

export default LoginPage;