"use client";
//import Playground from "./components/Playground";
//import ContainerControls from "./components/ContainerControls";
//import ItemControls from "./components/ItemControls";
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import {
	containerOptions,
	itemOptions,
	defaultContainerStyle,
	defaultItemStyle,
	defaultNumberOfItems,
	containerOptionsType,
} from "./defaults/defaults";

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
	const [containerStyle, setContainerStyle] = useState<any>(JSON.parse(JSON.stringify(defaultTestStyle)));
	const [itemStyle, setItemStyle] = useState<any>(JSON.parse(JSON.stringify(defaultTestStyle)));

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
			<main>
				<div className="main-controls">
					<p>CONTAINER SETTINGS</p>
					{Object.keys(containerOptions).map((key) => {
						return (
							<p>
								<span>{key + ": "}</span>
								{containerOptions[key].map((elm: string) => {
									return <button onClick={() => changeStyle(key, elm)}>{elm}</button>;
								})}
							</p>
						);
					})}
				</div>
				<div className="main-flex-window">
					<div className="flexie" style={testStyle}>
						<div className="test-square">1</div>
						<div className="test-square">2</div>
						<div className="test-square">3</div>
						<div className="test-square">4</div>
					</div>
				</div>
				<div className="main-controls">
					<p>ITEM SETTINGS</p>
					{Object.keys(itemOptions).map((key) => {
						return (
							<p>
								<span>{key + ": "}</span>
								{itemOptions[key].map((elm: string) => {
									return <button onClick={() => changeStyle(key, elm)}>{elm}</button>;
								})}
							</p>
						);
					})}

					<p>
						<button onClick={() => setTestStyle(defaultTestStyle)}>DEFAULT</button>

						<button onClick={() => changeStyle("alignItems", "center")}>Align Items Center</button>
						<button onClick={() => console.log(testStyle)}>CONSOLE LOG</button>
					</p>
				</div>
			</main>

			{/*</StyleContext.Provider>*/}
		</>
	);
}
