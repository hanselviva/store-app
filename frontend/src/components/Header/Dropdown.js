import React from "react";
import { Link, useHistory } from "react-router-dom";

//
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
	MenuList,
	MenuItem,
	Popper,
	Paper,
	Grow,
	ClickAwayListener,
	Button,
} from "@material-ui/core";

//

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	menuItem: {
		color: theme.palette.primary.dark,
		"&:hover": {
			backgroundColor: theme.palette.primary.light,
			color: theme.palette.primary.dark,
		},
	},
}));

export default function Dropdown(props) {
	const classes = useStyles();

	const history = useHistory();
	const handleLogout = (event) => {
		event.preventDefault();
	};

	//=========== MUI STYLING STARTS HERE
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};
	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}
	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);
	// ========== END OF MUI STYLING

	return (
		<div className={classes.root}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? "menu-list-grow" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					variant="outlined"
				>
					<MenuIcon />
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										<MenuItem
											className={classes.menuItem}
											component={Link}
											to="/"
										>
											About
										</MenuItem>

										<MenuItem
											className={classes.menuItem}
											component={Link}
											to="/"
										>
											Contact
										</MenuItem>

										<MenuItem
											className={classes.menuItem}
											component={Link}
											to="/"
										>
											View Code
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}