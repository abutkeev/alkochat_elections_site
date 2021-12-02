import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const MainPage: FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 2 }}>
            <Typography variant='h1'>main page</Typography>
        </Box>
    );
};

export default MainPage;
