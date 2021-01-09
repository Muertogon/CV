import React from 'react'
import Footer from '../footer/Footer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

import './Myprojects.css'

const useStyles = makeStyles(theme =>({
    oneDiv:{
        background: '#ffffff',
    },
    text:{
        fontSize: '50px',
        color: '#ffffff',
    },
}))

const Myprojects = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container direction="column" 
                justify="center" 
                alignItems="center" id="noPro">
                <Grid container item xs={12} className={classes.oneDiv} id="oneDiv">
                    <p className={classes.text} id="text">For now, I currently don't have any projects uploaded</p>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}

export default Myprojects
