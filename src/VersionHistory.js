import { BrowserRouter } from "react-router-dom";
import "./App.css"
import "./index.css"
import { AppBar, Button, Fab, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Reply } from "@mui/icons-material";
function history(){
    return(
            <div className="content">
                <AppBar>
                    <h1>Version History</h1>
                    </AppBar>
                <div>
                <div>
                    <TableContainer>
                        <Table stickyHeader aria-label="update log" className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Version</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell>v1</TableCell>
                                    <TableCell>Jan 06 2024</TableCell>
                                    <TableCell>Added remove and add buttons next to each option.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>vBETA</TableCell>
                                    <TableCell>Jan 04 2024</TableCell>
                                    <TableCell>First version of this app, with 4 graph and 2 options to start with.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="button">
                    <Button variant="contained" className="button" aria-label="add">
                    <a className="a" href="/">Back to the main</a>
                </Button>
                </div>
                
                </div>
            </div>
    )
}
export default history