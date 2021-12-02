import { FunctionComponent } from 'react';
import PageLoadingIndicator from './PageLoadingIndicator';
import ErrorWrapper from './ErrorWrapper';

interface Props {
    loading?: boolean;
    error?: boolean | Error | null;
    onReload?(): void;
}

const LoadingWrapper: FunctionComponent<Props> = ({ children, loading, error, onReload }) => {
    return (
        <ErrorWrapper error={error} onReload={onReload}>
            {loading ? <PageLoadingIndicator open /> : children ? children : null}
        </ErrorWrapper>
    );
};

export default LoadingWrapper;
