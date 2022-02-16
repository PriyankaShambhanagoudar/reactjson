import React from "react";
import {
    Typography, Box, makeStyles, Grid, TextField, Button
} from "@material-ui/core"

import { deepPurple, green } from "@material-ui/core/colors"
import List from "../Student/List";



const userStyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: 'White'
    },
})

const Home = () => {
    const classes = userStyle();

    return (
        <>
            <Box textAlign="center" className={classes.headingColor} mb={2} p={2}>
                <Typography variant="h2" > React crud With API Call</Typography>
            </Box>
            
            <Grid container  justify="center"  spacing={4} >
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Add Student</Typography>
                    </Box> 
                    
                    <form noValidate>
                        <Grid container spacing={2} >                           
                            <Grid item xs={12}  >
                                <TextField  autoComplete="stuname" name="stuname" variant="outlined"  required fullWidth id="stuname" label="Name"/>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField autoComplete="email"  name="email" variant="outlined" required fullWidth id="email" label="Email Address"  />
                            </Grid>                                                     
                        </Grid>
                        <Box m={3}    >
                                <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
                            </Box> 

                    </form>
                </Grid>
                <Grid item md={6} xs={12}>      
                <List/>    
                    </Grid>
            </Grid>
            
        </>
    );
}

export default Home;