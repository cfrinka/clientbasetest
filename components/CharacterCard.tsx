import { CardContent, Typography, Card } from '@mui/material'
import Image from 'next/image'

function CharacterCard({ results }) {
    return (
        <Card sx={{ minWidth: 540, minHeight: 200, display: 'flex', padding: '20px', borderRadius: '10px', backgroundColor: '#CFD4D8' }}>
            <Image src="/images/avatar.png" alt="avatar" width='140px' height='110px' />
            <CardContent sx={{ maxWidth: '60%', display: 'flex', flexDirection: 'column', alignItems: 'space-around', justifyContent: 'center' }}>
                <Typography variant='h5' component='p' fontWeight='bold'>
                    {results.name}
                </Typography>
                <Typography color='secondary'>
                    Homeworld:
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterCard