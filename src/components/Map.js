import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker,Popup, Polyline, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//import marker from '../assets/images/star-solid.svg';


class Map extends React.Component{
    state = {
        background:null
    }
    setBackground(id) {
        this.setState({ background: id });
    }
    render(){
        const style = {
            height: '98vh',
            width: '100%',
            backgroundSize:'cover',
        }
        const star = 'https://th.bing.com/th/id/R.f3de8ea5dccde14634b2ef54b72551bf?rik=wah7i3e7uYA65g&pid=ImgRaw&r=0'
        const myIcon = new L.Icon({
        iconUrl: star,
        iconRetinaUrl: star,
        popupAnchor: [-0, -0],
        iconSize:[10,10],
        background: 'orange',
    });
      const styles= {
        fillColor:'orange',
        weight: 0.5,
        opacity: 1,
        color:'orange',
        dashArray: 1,
        fillOpacity: 0.7
    }
    const img ={
        height:'100%',
        width:"100px",
        marginTop:"5%"
    }
    const tiles ={
        color:'orange'
    }
    const limeOptions = { color: 'orange', weight:2, }
    const position = [-3.919907, 29.751335]
        return(
            <div className='map'>
                {this.state.background ===1 &&   <MapContainer center={position} scrollWheelZoom={true}  zoom={3} style={style}>
                    <TileLayer style ={tiles}
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    {this.props.buttonId === 0 && <div className="container">
                    {this.props.pointData.map( place => {
                        const point = [place.geometry.coordinates[1], place.geometry.coordinates[0]];
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    <div className="popupdiv">
                                    <div>Name: {place.properties.name}</div>
                                    <div>{place.properties.desc}</div>
                                    <div><img src={place.properties.picture1} style={img} alt={place.properties.name}/></div>
                                    <div><img src={place.properties.picture2} style={img} alt={place.properties.name}/></div>  
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })} </div>}
                    {this.props.buttonId === 1 && <div className="container">
                    {this.props.lineData.map((lines) => {
                     return <Polyline key={lines.id} positions={lines.geometry.coordinates} pathOptions={limeOptions} />
                        })}
                    </div>}
                    {this.props.buttonId === 2 && <div className="container">
                      <GeoJSON data={this.props.polygonData} style={styles}/>
                    </div>}
                    <div className='toggle'>
                    <li className='switch' onClick={()=>{this.setBackground(1)}}>Openstreetmap </li>
                </div>
                <div className='toggle2'>
                    <li className='switch' onClick={()=>{this.setBackground(2)}}>USGS_USImageryTopo</li>
                </div>
                </MapContainer> }
                {this.state.background ===2 &&   <MapContainer center={position} zoom={3} scrollWheelZoom={true}  style={style}>
                    <TileLayer style ={tiles}
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url='https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}'
                    />
                    {this.props.buttonId === 0 && <div className="container">
                    {this.props.pointData.map( place => {
                        const point = [place.geometry.coordinates[1], place.geometry.coordinates[0]];
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    <div className="popupdiv">
                                    <div>Name: {place.properties.name}</div>
                                    <div>{place.properties.desc}</div>
                                    <div><img src={place.properties.picture1} style={img} alt={place.properties.name}/></div>
                                    <div><img src={place.properties.picture2} style={img} alt={place.properties.name}/></div>  
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })} </div>}
                    {this.props.buttonId === 1 && <div className="container">
                    {this.props.lineData.map((lines) => {
                     return <Polyline key={lines.id} positions={lines.geometry.coordinates} pathOptions={limeOptions} />
                        })}
                    </div>}
                    {this.props.buttonId === 2 && <div className="container">
                      <GeoJSON data={this.props.polygonData} style={styles}/>
                    </div>}
                    <div className='toggle'>
                    <li className='switch' onClick={()=>{this.setBackground(1)}}>Openstreetmap </li>
                </div>
                <div className='toggle2'>
                    <li className='switch' onClick={()=>{this.setBackground(2)}}>USGS_USImageryTopo</li>
                </div>
                </MapContainer> }
                {this.state.background !==2 &&  this.state.background !==1 &&  <MapContainer center={position} zoom={3} scrollWheelZoom={true}  style={style}>
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    />
                    {this.props.buttonId === 0 && <div className="container">
                    {this.props.pointData.map( place => {
                        const point = [place.geometry.coordinates[1], place.geometry.coordinates[0]];
                        return (
                            <Marker position={point} key={place.id} icon={myIcon} >
                                <Popup>
                                    <div className="popupdiv">
                                    <div>Name: {place.properties.name}</div>
                                    <div>{place.properties.desc}</div>
                                    <div><img src={place.properties.picture1} style={img} alt={place.properties.name}/></div>
                                    <div><img src={place.properties.picture2} style={img} alt={place.properties.name}/></div>  
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })} </div>}
                    {this.props.buttonId === 1 && <div className="container">
                    {this.props.lineData.map((lines) => {
                     return <Polyline key={lines.id} positions={lines.geometry.coordinates} pathOptions={limeOptions} />
                        })}
                    </div>}
                    {this.props.buttonId === 2 && <div className="container">
                      <GeoJSON data={this.props.polygonData} style={styles}/>
                    </div>}
                <div className='toggle'>
                    <li className='switch' onClick={()=>{this.setBackground(1)}}>Openstreetmap </li>
                </div>
                <div className='toggle2'>
                    <li className='switch' onClick={()=>{this.setBackground(2)}}>USGS_USImageryTopo</li>
                </div>
                </MapContainer> } 
            </div>
        )
    }
}

export default Map;