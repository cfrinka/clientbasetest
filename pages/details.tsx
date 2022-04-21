import { ThemeProvider } from "@emotion/react"
import { theme } from '../theme'
import Header from "../components/Header"
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"

export async function getServerSideProps() = (context) => {
    console.log(context.query)

    return {
        props: {
            id: context.query.id
        }
    }
}

const Details = ({ index }) => {
    const index2 = window.location.href
    console.log(index2)
    const apiURL = `https://swapi.dev/api/people/${index}`
    console.log(apiURL)

    const [char, setChar] = useState()

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(apiURL);
            const result = await data.json()
            setChar(result.results)
        }
        getData()

            .catch(console.error)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Image src="/images/avatar.png" alt="avatar" width='90px' height='350px' />
                    <Typography color='primary' style={{ fontSize: '40px', fontWeight: 'bold' }}>
                        {char.name}
                    </Typography>
                    <Button style={{ color: '#000', backgroundColor: '#fff', padding: '10px', maxWidth: '100px', marginTop: '120px' }}>  ← Back </Button>
                </Box>
                <Container style={{ border: '1px solid #fff', borderRadius: '15px', width: '600px', height: '600px', padding: '25px' }}>
                    <Typography style={{ fontWeight: 'bold', color: '#fff', fontSize: '26px' }}>Character Details:</Typography>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box style={{ color: 'red', width: '250px', border: '1px solid red', minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <Typography>Gender:</Typography>
                            <Typography>Hair Color:</Typography>
                            <Typography>Eye Color:</Typography>
                            <Typography>Height:</Typography>
                            <Typography>Mass:</Typography>
                            <Typography>Skin Color:</Typography>
                            <Typography>Birth Year:</Typography>
                            <Typography>Homeworld:</Typography>
                            <Typography>Films:</Typography>
                        </Box>
                        <Box style={{ color: 'green', width: '250px', border: '1px solid green', minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                            <Typography>Character Details</Typography>
                        </Box>
                    </Box>

                </Container>
            </Container>
        </ThemeProvider>
    )
}

export default Details