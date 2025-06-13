import Map from '../components/Leaflet.jsx';

function LeafletMap() {
	return (
		<div>
			<h1>Map Page</h1>
			<p> This is the map page of the site.</p>
			<Map name='default'/>
		</div>
	);
}

export default LeafletMap;