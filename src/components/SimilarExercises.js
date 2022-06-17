import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '10px', xs: '0px' } }}>
            <Typography variant='h3' mb='50px' ml={5}>
                Exercises That Target The Same Muscle Group
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative', mb: '50px' }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
                    :
                    <Loader />
                }
            </Stack>
            <Typography variant='h3' mb='50px' ml={5}>
                Exercises That Use The Same Equipment
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative', mb: '50px' }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
                    :
                    <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises