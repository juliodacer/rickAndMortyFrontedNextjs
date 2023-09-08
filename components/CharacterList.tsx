"use-client"

import { FC } from "react";
import { Character } from '../interfaces/ICharacter';
import CharacterCard from "./CharacterCard";
import { Grid } from "@mui/material";

interface Props {
    characters: Character[]
}

const CharacterList: FC<Props> = ({ characters }) => {
    return (
        <Grid container
            spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {characters?.map((character, index) => (
                <Grid
                    justifyContent="space-around"
                    xs={2} sm={4} md={4} key={index}>
                    <CharacterCard character={character} />
                </Grid>
            ))}

        </Grid>
    )
}
export default CharacterList