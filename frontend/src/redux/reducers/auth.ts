import { createAction, createReducer } from '@reduxjs/toolkit';

export interface AuthStore {
    first_name: string;
    last_name?: string;
    uid: number;
    photo_url?: string;
    username?: string;
}

export const setAuth = createAction<AuthStore>('auth/set');
export const resetAuth = createAction('auth/reset');

const authReducer = createReducer<AuthStore | null>(null, builder => {
    builder.addCase(setAuth, (_, { payload }) => payload);
    builder.addCase(resetAuth, () => null);
});

export default authReducer;
