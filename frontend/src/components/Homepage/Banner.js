import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	bannerWrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	root: {
		minHeight: "10vh",
		maxWidth: "80vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.palette.primary.light,
	},
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<div className="bannerWrapper">
			<Container className={classes.root} position="static">
				<Typography component="h6" variant="h6" align="center" gutterBottom>
					Opening Promo: Redeem $20 Gift Card using code: RENTAGAME if you spend
					more than $40. Read
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href="#"> FAQ </a>
					for more details.
				</Typography>
			</Container>
		</div>
	);
};

export default Banner;
