import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import playingGames from "../../assets/video-games.png";
import Typed from "react-typed";
import {
	CssBaseline,
	Grid,
	Button,
	Typography,
	Container,
	Link,
} from "@material-ui/core";
import Store from "../Store/Store";
import Banner from "./Banner";

//
//

const useStyles = makeStyles((theme) => ({
	root: {
		height: "70vh",
	},
	image: {
		backgroundImage: `url(${playingGames})`,
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "contain",
		backgroundPosition: "center",
	},
	//
	ctaRoot: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	ctaDiv: {
		padding: theme.spacing(2, 0, 4),
	},
	ctaButtonsWrapper: {
		marginTop: theme.spacing(4),
	},
	ctaButton: {
		"&:hover": {
			backgroundColor: theme.palette.primary.light,
			color: theme.palette.secondary.dark,
		},
	},
}));

const Homepage = () => {
	const classes = useStyles();

	return (
		<div className="homepageWrapper">
			<CssBaseline />
			<Grid container component="main" className={classes.root}>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					elevation={6}
					className={classes.ctaRoot}
				>
					<div className={classes.ctaDiv}>
						<Container maxWidth="sm">
							<Typography
								component="h2"
								variant="h1"
								align="center"
								color="primary"
								gutterBottom
							>
								<Typed
									strings={["PUT", "FIND"]}
									typeSpeed={80}
									backSpeed={80}
									loop
								/>
							</Typography>
							<Typography
								component="h2"
								variant="h2"
								align="center"
								gutterBottom
							>
								GAMES FOR RENT!
							</Typography>

							<Typography
								variant="h5"
								align="center"
								fontStyle="italic"
								color="textSecondary"
								paragraph
							>
								Don't want to spend a lot of $$ on video games? <br />
								Or you want to make $$ out of the games collecting dust on your
								shelf? <br />
								You've come to the right place!
							</Typography>
							<div className={classes.ctaButtonsWrapper}>
								<Grid container spacing={2} justify="center">
									<Grid item>
										<Link href="/" style={{ textDecoration: "none" }}>
											<Button
												variant="contained"
												color="primary"
												className={classes.ctaButton}
											>
												Find Games for Rent
											</Button>
										</Link>
									</Grid>
									<Grid item>
										<Link href="/" style={{ textDecoration: "none" }}>
											<Button
												variant="contained"
												color="primary"
												className={classes.ctaButton}
											>
												Put Games for Rent
											</Button>
										</Link>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
				</Grid>
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
			</Grid>
			<Banner />
			<Store />
		</div>
	);
};

export default Homepage;
