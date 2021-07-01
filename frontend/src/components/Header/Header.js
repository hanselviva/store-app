import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";
import Dropdown from "./Dropdown";

// MUI imports
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	AppBar,
	Typography,
	Toolbar,
	Container,
	Badge,
} from "@material-ui/core";
//

const useStyles = makeStyles((theme) => ({
	appBarWrapper: {
		display: "flex",
		justifyContent: "space-around",
		paddingLeft: theme.spacing(3),
	},
	toolBarWrapper: {
		minHeight: theme.spacing(10),
	},
	logoWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	button: {
		margin: theme.spacing(2),
	},
}));

const Header = (props) => {
	const classes = useStyles();

	return (
		<AppBar position="sticky" className={classes.appBarWrapper}>
			<Toolbar className={classes.toolBarWrapper}>
				{/* Dropdown Menu */}
				<Dropdown logout={props.logout} />

				<Container className={classes.logoWrapper}>
					<VideogameAssetIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						RENT A GAME
					</Typography>
				</Container>

				<Badge badgeContent={2} color="secondary">
					<ShoppingCartIcon fontSize="large" />
				</Badge>

				<Button className={classes.button} variant="contained">
					Signup
				</Button>
				<Button className={classes.button} variant="contained">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default connect(
	() => {
		return {};
	},
	{ logout },
)(Header);
