import { Stack, Typography } from '@mui/material'
import React from 'react'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'
            sx={
                bodyPart === item ? {
                    borderTop: '4px solid #FF2625',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '250px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                } : {
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '250px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1500, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px' }} />
            <Typography fontSize='24px' color="#3a1212" fontWeight='bold' textTransform='capitalize'>{item}</Typography>
        </Stack >
    )
}

export default BodyPart