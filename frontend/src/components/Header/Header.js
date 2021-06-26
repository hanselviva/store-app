import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions";

// MUI imports
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dropdown from "./Dropdown";
//

const useStyles = makeStyles((theme) => ({
	toolBarWrapper: {
		minHeight: theme.spacing(10),
		marginRight: theme.spacing(16),
	},
	logoWrapper: {
		display: "flex",
		alignItems: "center",
	},
	icon: {
		marginRight: theme.spacing(2),
	},
}));

const Header = (props) => {
	const classes = useStyles();

	return (
		<AppBar position="relative">
			<Toolbar className={classes.toolBarWrapper}>
				<Container className={classes.logoWrapper}>
					<VideogameAssetIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						RENT A GAME
					</Typography>
				</Container>

				{/* Dropdown Menu */}
				<Dropdown logout={props.logout} />
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
