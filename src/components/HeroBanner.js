import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '170px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography sx={{ mt: '-160px' }} color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '38px', xs: '30px' } }} mb="10px" mt="10px">
            Sweat, Smile <br />
            And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <a href="#exercises" style={{ marginTop: '15px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.3', ml: '100px', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box >
);

export default HeroBanner;
