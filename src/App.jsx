import React, { useState } from "react";
import "./App.scss";
import TableOfContents from "./TableOfContents";
import WelcomePage from "./WelcomePage";
import TournamentBracket from "./TournamentBracket";
import BracketBuilder from "./BracketBuilder";

const pages = [
	{
		title: "Home Page",
		component: <WelcomePage />,
	},
	{
		title: "Build a Bracket",
		component: <TournamentBracket />,
	},
	// Add more pages as needed
];

function App() {
	const [page, setPage] = useState(pages[0].component);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return (
		<div className='App'>
			<div className='TitleBar'>
				<h1>PatrickCapovilla.com</h1>
			</div>
			<div className='Main'>
				<div className='LeftPanel'>
					<TableOfContents pages={pages} onPageChange={handlePageChange} />
				</div>

				<div className='RightPanel'>{page}</div>
			</div>
		</div>
	);
}

export default App;
