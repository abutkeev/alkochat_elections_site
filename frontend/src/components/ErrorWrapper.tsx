import { FunctionComponent } from 'react';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

interface Props {
    error?: boolean | Error | null;
    onReload?(): void;
}

const ErrorWrapper: FunctionComponent<Props> = ({ children, error, onReload }) => {
    return (
        <>
            {error ? (
                <Alert
                    severity='error'
                    variant='outlined'
                    action={
                        <Button variant='contained' color='primary' onClick={() => (onReload ? onReload : document.location.reload())}>
                            Перезагрузить страницу
                        </Button>
                    }
                >
                    {typeof error === 'boolean' ? 'Произошла ошибка' : `<b>Ошибка</b>: ${error.message}`}
                </Alert>
            ) : (
                children
            )}
        </>
    );
};

export default ErrorWrapper;
