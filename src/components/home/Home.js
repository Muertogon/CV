import React from 'react'
import Footer from '../footer/Footer'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import './Home.css'

const useStyles = makeStyles(theme =>({
    firstDiv:{
        background: '#ffffff',
    },
    secDiv:{
        background: '#ffffff',
    },
    text:{
        fontSize: '40px',
        color: '#ffffff',
    },
}))


const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center" id="avtist">
                <Grid container item xs={12} className={classes.firstDiv} id="firstDiv">
                    <hr className="line"></hr>
                    <p className={classes.text}>DANIL KUREVIN</p>
                </Grid>
                
                <Grid container item xs={12} className={classes.secDiv} id="secDiv">
                    <p className={classes.text}>CREATIVE WEB DEVELOPER</p>
                    <hr className="line"></hr>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}

export default Home
