import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

 const App = () =>{
    return (
        <Container maxwidth ="lg">
            <AppBar position="Static" color="inherit">
                <Typography variant="h2" align = "center">Memories</Typography>
                <img src = {memories} alt = "memories" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify= "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs= {12} sm ={7}>
                            //posts
                        </Grid>
                        <Grid item xs= {12} sm ={7}>
                            //form
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
 }

 export default App;