import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import GoIcon from '@material-ui/icons/Remove'
import Button from '@material-ui/core/Button'
import { amber } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import './Navbar.css'

import { Link }from 'react-router-dom'

const useStyles = makeStyles(theme =>({
    root:{
        color: 'white',
        margin: '20px',
        fontSize: '18px'
    },
    idk:{
        margin: '20px',
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar className="nav" style={{ background: '#152235'}}>
                <ToolBar className="navin">
                    <GoIcon style={{color: amber[500]}}/>
                    <Link style={{textDecoration: 'none'}} to="/home">
                        <Button className={classes.root}>
                            Home
                        </Button>
                    </Link>
                    <GoIcon style={{color: amber[500]}}/>
                    <Link style={{textDecoration: 'none'}} to="/aboutme">
                        <Button className={classes.root}>
                            About Me
                        </Button>
                    </Link>
                    <GoIcon style={{color: amber[500]}}/>
                    <Link style={{textDecoration: 'none'}} to="/myprojects">
                        <Button className={classes.root}>
                            My Projects
                        </Button>
                    </Link>
                </ToolBar>
            </AppBar>
        </div>
)
}

export default Navbar

