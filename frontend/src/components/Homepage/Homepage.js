import React from "react";
import { CssBaseline, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
}));

const Homepage = () => {
	const classes = useStyles();
	return (
		<div className="homepageWrapper">
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				></Grid>
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
			</Grid>
		</div>
	);
};

export default Homepage;
