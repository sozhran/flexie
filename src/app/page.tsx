import Playground from "./components/Playground";
import ContainerControls from "./components/ContainerControls";
import ItemControls from "./components/ItemControls";
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { defaultContainerStyle, defaultItemStyle, defaultNumberOfItems } from "./defaults/defaults";

export default function Home() {
	const [containerStyle, setContainerStyle] = useState<Object>(defaultContainerStyle);
	const [itemStyle, setItemStyle] = useState<Object>(defaultItemStyle);
	const [itemNumber, setItemNumber] = useState<number>(defaultNumberOfItems);

	const UserContext = createContext({});

	return (
		<UserContext.Provider value={containerStyle}>
			<main>
				<ContainerControls />
				<Playground />
				<ItemControls />
			</main>
		</UserContext.Provider>
	);
}
