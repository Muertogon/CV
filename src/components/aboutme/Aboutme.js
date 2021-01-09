import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles'
//import { CircularProgressWithLabel } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Image from './reactcv.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import { ThemeProvider } from '@material-ui/core'
import Footer from '../footer/Footer'

import './Aboutme.css'
import { amber } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const theme = createMuiTheme({
	palette: {
		primary:{
			main: '#152235'
		},
		secondary:{
			main: amber[600],
		},
		action:{
			main: '#ffffff'
		},
	},
});

const useStyles = makeStyles(theme =>({
	root:{
		color: 'black',
		fontSize: '20px',
	},
	idk:{
		fontSize: '30',
	},
	lang:{
		fontSize: '25px',
		position: 'absolute',
		left: '4em',
		padding: '1em',
	},
	lang2:{
		position: 'relative',
		fontSize: '35px',
		margin: '8px',
		top: '3.5em',
	},
	progress:{
		width: '67%',

	},
	progress2:{
		display: 'flex',
		fontSize: '20px',
		padding: '10px',
		justifyContent: 'center',
		
	},
	heading: {
		fontSize: theme.typography.pxToRem(22),
		fontWeight: theme.typography.fontWeightRegular,
		
	},
	accordPanel:{
		color: 'white',
		background: '#152235',
	},
	accordInfo:{
		color: 'black',
		background: '#ffc107',
		width: '100%',
	},
	logoLink:{
		color: '#152235',
		fontSize: 50,
	},
	yellow:{
		color: '#152235',
		fontSize: '25',
		right: '5em',
	},
	white:{
		color: '#ffffff',
	},

}))

const Aboutme = () => {
	const classes = useStyles()
	return (
		<div>
		<Grid container spacing={4} justify="center" id="yellowtree">
			<Grid className={classes.root} item md={4}>
				<Paper elevation={0} className="left" style={{height:600, width:'90%', padding:25, background:'c1c1c1'}}>
					<Typography variant="h4" id="a" className={classes.idk}> Danil Kurevin</Typography>
					<Typography variant="h5" id="b" className={classes.idk} style={{color: amber[500]}}> Entry level Web Developer</Typography>
					
					<Typography id="c"className={classes.root}>I'm just a regular 19 years old programmer,
					who was always interested in programming and difficult to understand topics. I quickly learn
					new things and easily deal with pressure without any problems.
					My hobbies include: Weight lifting, bike riding and playing the guitar</Typography>
					<Typography>
							<a href="https://www.linkedin.com/in/danil-kurevin-7a7681201/">
								<LinkedInIcon className={classes.logoLink} id="firstLink"/>
							</a>
							<a href="https://www.facebook.com/Danilkurevin/">
								<FacebookIcon className={classes.logoLink} id="secondLink"/>
							</a>
							<a href="https://github.com/Muertogon">
								<GitHubIcon className={classes.logoLink} id="thirdLink"/>
							</a>
					</Typography>
				</Paper>
			</Grid>
			<Grid item md={4}>
				<Paper className="middle" elevation={3} style={{height:600, width:'95%', padding:25}}>
					<img className="avatar"src={Image} alt=""/>
				</Paper>
			</Grid>
			<Grid item md={4}>
				<ThemeProvider theme={theme}>
					<Paper elevation={0} className="right" style={{height:600, width:'100%', padding:25}}>
						<List>
						<Typography variant="h3" className={classes.lang2} id="language">Languages</Typography>
						<ListItem >
							<Typography className={classes.lang} id="litva">Lithuanian
							<Typography>
									<Typography className={classes.yellow}>(70%)</Typography>
									</Typography> 
									</Typography>
							<div className={classes.progress} id="one">
									<LinearProgress variant="determinate" value={70} id="litvaPro" color="secondary"/>
							</div>
						</ListItem>
						<ListItem >
							<Typography className={classes.lang} id="england">English
							<Typography className={classes.yellow}>(86%)</Typography>
							</Typography>
							<div className={classes.progress} id="two">
									<LinearProgress variant="determinate" value={86} id="englandPro" color="secondary"/>
							</div>
						</ListItem>
						<ListItem >
							<Typography className={classes.lang} id="russia">Russian
							<Typography className={classes.yellow}>(96%)</Typography>
							</Typography>
							<div className={classes.progress} id="three">
									<LinearProgress variant="determinate" value={96} id="russiaPro" color="secondary"/>
							</div>
						</ListItem> 
						</List>
					</Paper>
				</ThemeProvider>
			</Grid>
			<Grid item xs={12}>
			<Accordion className={classes.accordInfo} id="firstSkills">
				<AccordionSummary
				expandIcon={<ExpandMoreIcon color="primary"/>}
				aria-controls="panel1a-content"
				id="panel1a-header"
				className={classes.accordPanel}>
				<Typography className={classes.heading}>SKILLS</Typography>
				</AccordionSummary>
				<ThemeProvider theme={theme}>
					<AccordionDetails>
						<ThemeProvider theme={theme}>
							<Typography className={classes.progress2}>
								<Grid className={classes.progress2} id="stuff">
									<div className="skillsTab">
										JAVA
										<LinearProgress variant="determinate" value={20} color="primary"/>
										C++
										<LinearProgress variant="determinate" value={70} color="primary"/>
										JavaScript
										<LinearProgress variant="determinate" value={80} color="primary"/>
										React
										<LinearProgress variant="determinate" value={90} color="primary"/>
									</div >
									<div className="skillsTab">
										Python
										<LinearProgress variant="determinate" value={50} color="primary"/>
										PHP
										<LinearProgress variant="determinate" value={0} color="primary"/>
										HTML
										<LinearProgress variant="determinate" value={100} color="primary"/>
										MySQL
										<LinearProgress variant="determinate" value={0} color="primary"/>
									</div>
									<div className="skillsTab">
										CSS
										<LinearProgress variant="determinate" value={90} color="primary"/>
										Bootstrap
										<LinearProgress variant="determinate" value={80} color="primary"/>
										SCSS
										<LinearProgress variant="determinate" value={100} color="primary"/> 
									</div>
								</Grid>
							</Typography>
						</ThemeProvider>
					</AccordionDetails>
					</ThemeProvider>
			</Accordion>
			<Accordion className={classes.accordInfo} id="secondSkills">
				<AccordionSummary
				expandIcon={<ExpandMoreIcon color="primary"/>}
				aria-controls="panel1a-content"
				id="panel1a-header"
				className={classes.accordPanel}>
				<Typography className={classes.heading}>SKILLS IN OTHER TECHNOLOGIES</Typography>
				</AccordionSummary>
				<ThemeProvider theme={theme}>
					<AccordionDetails>
						<Grid className={classes.progress2} id="stuff2">
							<div className="skillsTab">
								WORD
								<LinearProgress variant="determinate" value={100} color="primary"/>
							</div>
							<div className="skillsTab">
								EXCEL
								<LinearProgress variant="determinate" value={90} color="primary"/>
							</div>
							<div className="skillsTab">
							POWERPOINT 
								<LinearProgress variant="determinate" value={100} color="primary"/>
							</div>
							<div className="skillsTab">
								LINUX
								<LinearProgress variant="determinate" value={60} color="primary"/> 
							</div>
							<div className="skillsTab">
								WINDOWS
								<LinearProgress variant="determinate" value={100} color="primary"/>
							</div>
							<div className="skillsTab">
								PHOTOSHOP
								<LinearProgress variant="determinate" value={40} color="primary"/>
							</div>
						</Grid>
					</AccordionDetails>
					</ThemeProvider>
			</Accordion>
			</Grid>
		</Grid>
		<Footer/>
	</div>
)
}

export default Aboutme
