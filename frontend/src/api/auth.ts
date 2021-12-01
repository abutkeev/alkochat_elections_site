interface AuthData {
    auth_date: number;
    first_name: string;
    last_name?: string;
    hash: string;
    id: number;
    photo_url?: string;
    username?: string;
}
const PostAuth = async (authData: Readonly<AuthData>) => {
    await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });
};

export default PostAuth;
