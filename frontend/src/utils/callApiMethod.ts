import { resetAuth } from '../redux/reducers/auth';
import { store } from '../redux/store';

const callApiMethod = async (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) => {
    const headers = data ? { 'Content-Type': 'application/json' } : undefined;
    const body = data ? JSON.stringify(data) : undefined;
    const result = await fetch(`/api/${endpoint}`, { method, headers, body });
    if (!result.ok) {
        throw new Error('Bad api response');
    }
    if (result.status === 403) {
        store.dispatch(resetAuth());
    }
    return { code: result.status, data: await result.json() };
};

export default callApiMethod;
