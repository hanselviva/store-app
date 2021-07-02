import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";
import Dropdown from "./Dropdown";
import { useHistory } from "react-router-dom";

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
		cursor: "pointer",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	button: {
		backgroundColor: theme.palette.primary.light,
		margin: theme.spacing(2),
	},
}));

const Header = (props) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<AppBar position="sticky" className={classes.appBarWrapper}>
			<Toolbar className={classes.toolBarWrapper}>
				{/* Dropdown Menu */}
				<Dropdown logout={props.logout} />

				<Container
					className={classes.logoWrapper}
					onClick={() => {
						return history.push("/");
					}}
				>
					<VideogameAssetIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						RENT-A-GAME
					</Typography>
				</Container>

				<Badge
					badgeContent={props.cart.length}
					color="secondary"
					onClick={() => {
						history.push("/cart");
					}}
				>
					<ShoppingCartIcon fontSize="large" style={{ cursor: "pointer" }} />
				</Badge>

				<Button
					className={classes.button}
					variant="contained"
					onClick={() => {
						return history.push("/signup");
					}}
				>
					Signup
				</Button>
				<Button
					className={classes.button}
					variant="contained"
					onClick={() => {
						return history.push("/login");
					}}
				>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	cart: state.cart,
});

export default connect(mapStateToProps, { logout })(Header);
