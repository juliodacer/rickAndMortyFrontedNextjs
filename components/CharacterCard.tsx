"use-client"
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Character } from '../interfaces/ICharacter';
import { CardMedia, CardContent, Card, CardActionArea } from '@mui/material';

interface Props {
    character: Character
}

const CharacterCard: FC<Props> = ({ character }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345, marginBottom: 7 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.species}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.status}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default CharacterCard