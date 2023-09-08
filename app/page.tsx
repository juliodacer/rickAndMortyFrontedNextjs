"use client"
import axios from 'axios'
import { useEffect, useState } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Character } from '@/interfaces/ICharacter';
import { URL_API } from '@/apiConnet/apiConnect';
import CharacterList from '@/components/CharacterList';
import { Container, Grid } from '@mui/material';
import Navbar from '@/components/Nabvar';

function HomePage() {

  const [characters, setCharacter] = useState<Character[]>([])

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    const res = await axios.get(`${URL_API}`)
    console.log(res)
    setCharacter(res.data?.filter((item: Character) => item.species === 'Human'))
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Container
          fixed
        >
          <Navbar />
          <div style={{ marginTop: '80px' }}>
            {
              <CharacterList characters={characters} />
            }
          </div>
        </Container>
      </Grid>

    </ThemeProvider>
  )
}

export default HomePage