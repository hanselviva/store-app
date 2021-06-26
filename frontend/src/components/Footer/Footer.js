import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

//
const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
	},
	copyright: {
		padding: theme.spacing(1),
	},
}));

function Copyright() {
	const classes = useStyles();
	return (
		<AppBar position="relative">
			<Typography
				variant="body2"
				color="textSecondary"
				align="center"
				className={classes.copyright}
			>
				{"Copyright © "}
				<Link color="inherit" href="">
					|| Hansel Valentine ||
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</AppBar>
	);
}

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography
				variant="subtitle1"
				align="center"
				color="textSecondary"
				component="p"
			>
				Rent a Game
			</Typography>
			<Copyright />
		</footer>
	);
};

export default Footer;
