//export type ContainerStyle = {
//	display: string,
//	width: string,
//	height: string,
//	flexFlow: string,
//	justifyContent: string,
//	alignItems: string,
//	alignContent: string,
//	gap: number
//}

export type ContainerStyle = {
	display: "flex" | "inline-flex" | "block",
	width: string,
	height: string,
	flexFlow: string,
	justifyContent: string,
	alignItems: string,
	alignContent: string,
	gap: number
}

export const defaultContainerStyle = {
	display: "flex",
	width: "auto",
	height: "auto",
	flexFlow: "row nowrap",
	justifyContent: "start",
	alignItems: "start",
	alignContent: "start",
	gap: 0
};

export const defaultItemStyle = { width: "auto", height: "auto" };

export const defaultNumberOfItems = 5;

const containerOptions = {
	flex: ["flex", "inline-flex", "block"],
	flexDirection: ["row", "row-reverse", "column", "column-reverse"],
	flexWrap: ["nowrap", "wrap", "wrap-reverse"],
	justifyContent: ["start", "center", "end", "space-between", "space-around", "space-evenly", "stretch"],
	alignItems: ["start", "center", "end", "stretch"],
	alignContent: ["", "", "", "", "", ""],
	width: ["auto", "max-content", "min-content", "fit-content", "0", "100%"],
	height: ["auto", "max-content", "min-content", "fit-content", "0", "100%"],
	gap: ["0"],
};

const itemOptions = {
	width: ["auto", "max-content", "min-content", "fit-content", "0", "100%"],
	height: ["auto", "max-content", "min-content", "fit-content", "0", "100%"],
	flexGrow: ["0", "1", "2"],
	flexShrink: ["0", "1", "2"],
	flexBasis: ["auto", "0", "0%", "content", "max-content", "min-content", "fit-content", "stretch"],
};