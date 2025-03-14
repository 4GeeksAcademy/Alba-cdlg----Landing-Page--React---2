import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>   
			<Jumbotron/>
			<div className="container">
				<div className="row">					
				</div>
			</div>         

		</div>
	);
};

export default Home;