import React from "react";
import { connect } from "react-redux";

const GameDetails = (props) => {
	// const { items } = props;

	return (
		<div className="gameWrapper">
			More Info About the game can be viewed here
		</div>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	fetchError: state.fetchError,
	items: state.items,
	cart: state.cart,
});

export default connect(mapStateToProps, {})(GameDetails);
