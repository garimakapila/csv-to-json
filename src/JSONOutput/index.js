function JSONOutput(props) {

	let { value, onChange } = props;

	return (
		<div className="table-cell">
			<div className="buttons">
				<div
					onClick={ () => onChange("") }
				>
					Clear
				</div>
			</div>
			<textarea 
				value={ value }
				onChange={ e => onChange(e.target.value) }
			/>
		</div>
	);
}

export default JSONOutput;
