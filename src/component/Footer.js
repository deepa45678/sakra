import React, { Component } from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import styled from "styled-components";
import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
// backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// ...theme.typography.body2,
// padding: theme.spacing(1),
// textAlign: 'center',
// color: theme.palette.text.secondary,
// }));

// export default function Footer() {
// return (
// <Box sx={{ flexGrow: 1 }}>
// <Grid container spacing={2}>
// <Grid item xs={12}>
// <Item>Footer</Item>
// </Grid>
// </Grid>
// </Box>
// );
// }



const FooterContainer = styled.div`
 text-align: center;
 position: absolute;
 bottom: 0;
 width: 100% !important;
 height: 60px !important ;
 color:#fff;
 background: #1a76d2;
`;

class Footer extends Component {
 render() {
 return (
 <FooterContainer>
 <Typography variant="title"><br/><br/>
 <marquee>Powered by Grassroots</marquee>
 </Typography>
 </FooterContainer>
 );
 }
}

export default Footer;