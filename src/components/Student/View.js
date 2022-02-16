import React from "react";
import {
    Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button
} from "@material-ui/core"

import { orange } from "@material-ui/core/colors"

const userStyle = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: 'bold',
        fontSize: '16'
    },
})

const View = () => {
    const classes = userStyle();

    return (
        <>
            <Box textAlign="center" p={2} className={classes.stuListColor} >
                <Typography variant="h4">Student list </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor:"#616161"}}>
                            <TableCell align="center" className={classes.tableHeadCell} >No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell} >Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell} >Email</TableCell>
                            <TableCell align="center"  className={classes.tableHeadCell} >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center"   >1</TableCell>
                            <TableCell align="center"   >Sonam</TableCell>
                            <TableCell align="center"  >Sonam@gmail.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3} textAlign="center">
                <Button variant="contained"  color="primary" >Back to Home</Button>
            </Box>
        </>
    )
}


export default View;