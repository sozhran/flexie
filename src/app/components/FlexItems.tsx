export type flexItemProps = {
	number: number;
	style: Object;
};

export default function FlexItems(props: flexItemProps) {
	for (let i = 0; i < props.number; i++) {
		return <div key={`item-${i}`} className="flex-item" style={props.style}></div>;
	}
}
