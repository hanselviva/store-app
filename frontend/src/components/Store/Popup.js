import React, { useState } from "react";

import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Popup = () => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog
			open={open}
			onClose={() => {}}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => {}} color="primary" autoFocus>
					Rent this game
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Popup;
