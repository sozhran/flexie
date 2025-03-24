"use client";
//import Playground from "./components/Playground";
//import ContainerControls from "./components/ContainerControls";
//import ItemControls from "./components/ItemControls";
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { defaultContainerStyle, defaultItemStyle, defaultNumberOfItems } from "./defaults/defaults";

//const [containerStyle, setContainerStyle] = useState<Object>(defaultContainerStyle);
//const [itemStyle, setItemStyle] = useState<Object>(defaultItemStyle);
//const [itemNumber, setItemNumber] = useState<number>(defaultNumberOfItems);

//const StyleContext = createContext(containerStyle);

export type defaultStyle = {
	display: string;
	width: string;
	height: string;
	justifyContent: string;
	alignItenms: string;
};

const defaultTestStyle: defaultStyle = {
	display: "flex",
	width: "100%",
	height: "100%",
	justifyContent: "start",
	alignItenms: "start",
};

export default function Home() {
	const [numberOfItems, setNumberOfItems] = useState<number>(5);
	const [testStyle, setTestStyle] = useState<any>(JSON.parse(JSON.stringify(defaultTestStyle)));

	const changeStyle = (parameter: string, value: string) => {
		const xxx = { ...testStyle };

		if (!parameter || !Object.keys(xxx).includes(parameter)) {
			return;
		}

		xxx[parameter] = value;

		setTestStyle(xxx);
		console.log(testStyle);
	};

	return (
		<>
			{/*<StyleContext.Provider value={containerStyle}>*/}
			<main className="main-flex-window">
				<div className="flexie" style={testStyle}>
					<div className="test-square">1</div>
					<div className="test-square">2</div>
					<div className="test-square">3</div>
					<div className="test-square">4</div>
					{/*<ContainerControls />*/}
					{/*<Playground />*/}
					{/*<ItemControls />*/}
				</div>
			</main>
			<p>
				JUSTIFY-CONTENT: <button onClick={() => changeStyle("justifyContent", "start")}>start</button>
				<button onClick={() => changeStyle("justifyContent", "center")}>center</button>
				<button onClick={() => changeStyle("justifyContent", "end")}>end</button>
				<button onClick={() => changeStyle("justifyContent", "space-between")}>space-between</button>
				<button onClick={() => changeStyle("justifyContent", "space-around")}>space-around</button>
				<button onClick={() => changeStyle("justifyContent", "space-evenly")}>space-evenly</button>
				<button onClick={() => changeStyle("justifyContent", "stretch")}>stretch</button>
			</p>
			<p>
				ALIGN-ITEMS: <button onClick={() => changeStyle("alignItems", "start")}>start</button>
				<button onClick={() => changeStyle("alignItems", "center")}>center</button>
				<button onClick={() => changeStyle("alignItems", "end")}>end</button>
				<button onClick={() => changeStyle("alignItems", "space-between")}>space-between</button>
				<button onClick={() => changeStyle("alignItems", "space-around")}>space-around</button>
				<button onClick={() => changeStyle("alignItems", "space-evenly")}>space-evenly</button>
				<button onClick={() => changeStyle("alignItems", "stretch")}>stretch</button>
			</p>
			<p>
				WIDTH: <button onClick={() => changeStyle("alignItems", "start")}>start</button>
				<button onClick={() => changeStyle("alignItems", "center")}>center</button>
				<button onClick={() => changeStyle("alignItems", "end")}>end</button>
				<button onClick={() => changeStyle("alignItems", "space-between")}>space-between</button>
				<button onClick={() => changeStyle("alignItems", "space-around")}>space-around</button>
				<button onClick={() => changeStyle("alignItems", "space-evenly")}>space-evenly</button>
				<button onClick={() => changeStyle("alignItems", "stretch")}>stretch</button>
			</p>
			<p>
				HEIGHT: <button onClick={() => changeStyle("alignItems", "start")}>start</button>
				<button onClick={() => changeStyle("alignItems", "center")}>center</button>
				<button onClick={() => changeStyle("alignItems", "end")}>end</button>
				<button onClick={() => changeStyle("alignItems", "space-between")}>space-between</button>
				<button onClick={() => changeStyle("alignItems", "space-around")}>space-around</button>
				<button onClick={() => changeStyle("alignItems", "space-evenly")}>space-evenly</button>
				<button onClick={() => changeStyle("alignItems", "stretch")}>stretch</button>
			</p>
			<p>
				<button onClick={() => setTestStyle(defaultTestStyle)}>DEFAULT</button>

				<button onClick={() => changeStyle("alignItems", "center")}>Align Items Center</button>
				<button onClick={() => console.log(testStyle)}>CONSOLE LOG</button>
			</p>
			{/*</StyleContext.Provider>*/}
		</>
	);
}
