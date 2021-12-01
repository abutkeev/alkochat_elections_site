import callApiMethod from '../utils/callApiMethod';

interface AuthData {
    auth_date: number;
    first_name: string;
    last_name?: string;
    hash: string;
    id: number;
    photo_url?: string;
    username?: string;
}

export const PostAuth = async (authData: Readonly<AuthData>) => (await callApiMethod('auth', 'POST', authData)).data;

export const GetAuth = async () => (await callApiMethod('auth', 'GET')).data;
