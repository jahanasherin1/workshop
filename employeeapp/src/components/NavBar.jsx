import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h1 style={{flexGrow:1}}>Employee App</h1>&nbsp;&nbsp;
                <Link to="/Add" style={{textDecoration:'none'}}>
                <Button variant ="contained">Add</Button> </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/View">
                <Button variant ="contained">View</Button> </Link>&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar