import { Box, Typography } from '@mui/material'
import Image from 'next/image'

function Header() {
    return (
        <Box sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image src="/images/logo.png" alt="star wars logo" width='230px' height='100px' />
            <Typography variant='h5' color="primary" fontWeight='bold' style={{ color: 'primary', marginTop: '20px' }} >
                🛸 STAR WARS CHARACTERS
            </Typography>
            <Typography style={{ fontStyle: 'italic', color: 'secondary', marginBottom: '40px' }}>
                A list of all Star Wars characters
            </Typography>
        </Box>
    )
}

export default Header