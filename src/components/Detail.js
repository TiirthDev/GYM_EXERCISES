import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography textTransform="capitalize" fontWeight='bold' variant='h4'>
                    {name}
                </Typography>
                <Typography variant="h6" textTransform="capitalize">
                    Exercises Keep You Strong. {name} is one of the best exercises to target your {target}.
                    It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap='24px' alignItems='center'>
                        <Button sx={{ backgroundColor: '#fff2db', borderRadius: '50%', height: '100px', width: '100px' }}>
                            <img sx={{ height: '100px', width: '100px' }} src={item.icon} alt={item.name} />
                        </Button>
                        <Typography variant='h5' textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail