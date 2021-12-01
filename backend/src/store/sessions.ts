export interface RawSessionInfo {
    auth_date: number;
    first_name: string;
    last_name?: string;
    id: number;
    photo_url?: string;
    username?: string;
}

export interface SessionInfo {
    auth_date: Date;
    first_name: string;
    last_name?: string;
    uid: number;
    photo_url?: string;
    username?: string;
}

const sessions: Record<string, SessionInfo> = {};

export const registerSession = (hash: string, data: RawSessionInfo) => {
    const { id, auth_date, ...other } = data;
    sessions[hash] = {
        uid: id,
        auth_date: new Date(auth_date * 1000),
        ...other,
    };
};

export const getSession = (hash?: string) => {
    return (hash && sessions[hash]) || undefined;
};
