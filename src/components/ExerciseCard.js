import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', fontSize: '14px', backgroundColor: '#ffa9a9', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', fontSize: '14px', backgroundColor: '#fcc757', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml='21px' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' color='#000' fontSize='22px'>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard