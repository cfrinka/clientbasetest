import { Box, Container, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'
import { theme } from '../theme'
import Details from './details'





const Home: NextPage = () => {
    const apiURL = `https://swapi.dev/api/people/`
    const [results, setResults] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(apiURL);
            const result = await data.json()
            setResults(result.results)
        }
        getData()

            .catch(console.error)
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Header />
                <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '20px' }}>
                    {
                        results.map((item, index) => (
                            <Route path='/details' component={Details(index)}
                            >
                                <CharacterCard results={item} />
                            </Route>
                        ))
                    }
                </Box>

            </Container>
        </ThemeProvider >

    )
}


export default Home
