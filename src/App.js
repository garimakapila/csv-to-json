import { useState } from 'react';
import './App.css';

import CSVInput from './CSVInput/';
import JSONOutput from './JSONOutput/';

function App() {

	let [ csv, setCSV ] = useState("");
	let [ json, setJSON ] = useState("");
	let [ error, setError ] = useState("");

	return (
		<div className="App">
			<div className="title">
				CSV → JSON
			</div>
			<div className="table">
				<div className="table-row">
					<CSVInput 
						value={ csv }
						onChange={ setCSV }
						setExample={ setExample }
						upload={ upload }
					/>
					<JSONOutput
						value={ json }
						onChange={ setJSON }
					/>
				</div>
			</div>
			<div className="error"> { error } </div>
			<div className="buttons">
				<div
					onClick={ convert }
				>
					Convert
				</div>
			</div>
		</div>
	);

	function setExample() {
		setCSV(
			'season,year,count\n' + 
			'spring,2020,2\n' +
			'summer,2020,5\n' + 
			'fall,2020,8\n' + 
			'winter,2020,3\n' + 
			'spring,2021,7\n' +
			'summer,2021,5'
		)
	}

	function upload(e) {
		setError("");
		try {
			var reader = new FileReader();
			reader.onload = function(e) {
				setCSV(reader.result)
			};
			reader.readAsText(e.target.files[0]);
		}
		catch(error) {
			setError("Error. Please paste a valid CSV");
		}
	}

	function convert() {
		setError("");
		try {
			csv = csv.trim().replace(/ /g,'');
			csv = csv.replace(/\t/g,'');
			let lines = csv.split('\n');
			let header = lines.splice(0, 1)[0].split(',');
			let jsonArray = [];
			var i, j;
			for (i = 0; i < lines.length; i++) {
				let line = lines[i].split(',');
				if (line.length === header.length) {
					let object = {};
					for (j = 0; j < header.length; j++) {
						object[header[j]] = line[j];
					}
					jsonArray.push(object);
				}
			}
			setJSON(JSON.stringify(jsonArray, null, 2))
		}
		catch (error) {
			setError("Error. Please paste a valid CSV");
		}
	}
}

export default App;
