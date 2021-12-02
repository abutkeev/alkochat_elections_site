import { FunctionComponent, useEffect, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

const useStyles = makeStyles({
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '24px 0px',
    },
});

interface Props {
    open: boolean;
}

const PageLoadingIndicator: FunctionComponent<Props> = ({ open }) => {
    const classes = useStyles();
    const [openDelayed, setOpenDelayed] = useState(false);
    useEffect(() => {
        if (!openDelayed) {
            const timerId = setTimeout(() => setOpenDelayed(true), 200);
            return () => clearTimeout(timerId);
        }
    }, [open]);
    return (
        <Collapse in={openDelayed && open} unmountOnExit>
            <Fade in={openDelayed && open}>
                <div className={classes.progressContainer}>
                    <CircularProgress />
                </div>
            </Fade>
        </Collapse>
    );
};

export default PageLoadingIndicator;
