function CSVInput(props) {

	let { value, onChange, setExample, upload } = props;

	return (
		<div className="table-cell">
			<div className="buttons">
				<input
					id="upload"
					type="file" 
					accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
					onChange={ upload }
				/>
				<div>
					Upload
				</div>
				<div
					onClick={ setExample }
				>
					Example
				</div>
				<div
					onClick={ () => onChange("") }
				>
					Clear
				</div>
			</div>
			<textarea 
				value={ value }
				onChange={ e => onChange(e.target.value) }
				placeholder="Paste a CSV here"
			/>
		</div>
	);
}

export default CSVInput;
