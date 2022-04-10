import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import Map from './components/Map';
import TableFormData from './components/TableFormData';
import {faDrawPolygon, faGripLines, faEllipsisH, faTable, faGlobeAfrica} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
  state ={
    pointData:[],
    lineData:[],
    polygonData:[],
    buttonId:null
  }
  showLinesData = async ()=>{
    const response = await fetch("http://collectdata2021.herokuapp.com/lineapi")
    const lineData = await response.json();
    this.setState({lineData:lineData.features})
    }
  showPointsData = async () => {
    const response = await fetch("http://collectdata2021.herokuapp.com/pointapi")
    const pointData = await response.json();
    this.setState({pointData:pointData.features})    
  } 
   
  showPolygonData = async()=>{
        const response = await fetch("http://collectdata2021.herokuapp.com/polygonapi")
        const polygondata = await response.json();
        this.setState({polygonData:polygondata})
    }

    setButton(id) {
      this.setState({ buttonId: id });
  }
 
  render(){
    const linkstyle ={
    color:'white',
    background:'orangered',
    textDecoration:'none',
    fontWeight:'400',
    letterSpacing:1,
    fontSize:16,
  }
  const icons ={
    color:"orangered",
    fontSize:24,
    marginRight:"10%" 
  }
  const iconTwo ={
    marginRight:"8%",
    fontSize:25
  }
    return(
      <div className=''>
        <div className="row">
          <div className="col-2">
               <ul className='list-group list-group-flush'>
                  <li className='list-group-item text-muted mt-5'><h5>Data types</h5></li>
                  <li className='list-group-item' onClick={() => { this.setButton(0); this.showPointsData()}}><FontAwesomeIcon style={icons} icon={faEllipsisH} onClick={this.showPointsData}/>Points</li>
                  <li className='list-group-item' onClick={() => { this.setButton(1); this.showLinesData()}}><FontAwesomeIcon style={icons} icon={faGripLines}  onClick={this.showLinesData}/>Lines</li>
                  <li className='list-group-item' onClick={() => { this.setButton(2); this.showPolygonData()}}><FontAwesomeIcon style={icons} icon={faDrawPolygon} onClick={this.showPolygonData}/>Polygons</li>  
               </ul>
          </div>
          <div className="col-10">
            <Router>
              <div className="App">
                <div className='buttons2'>
                    <button type="button" className='btn  btn-sm'><Link to="/" style={linkstyle}> <FontAwesomeIcon style={iconTwo} icon={faGlobeAfrica}/>display map</Link></button>
                 </div>
                 <div className='buttons'>
                    <button type="button" className='btn  btn-sm'><Link to="/table" style={linkstyle}><FontAwesomeIcon style={iconTwo} icon={faTable}/>display table</Link></button>
                 </div>
                <Routes>
                  <Route exact path='/table' element={< TableFormData pointData={this.state.pointData} lineData={this.state.lineData} polygonData={this.state.polygonData} buttonId={this.state.buttonId}/>}/>
                  <Route exact path='/' element={< Map pointData={this.state.pointData} lineData={this.state.lineData} polygonData={this.state.polygonData} buttonId={this.state.buttonId}/>}/>
                </Routes>
              </div>
           </Router>
          </div>
        </div>
      </div>
    )
  }

}
export default App;





