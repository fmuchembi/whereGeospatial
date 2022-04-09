import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class TableFormData extends React.Component{
   
    render(){
        return(
            <div>
                {this.props.buttonId === 0 && <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">coordinates</th>
                    </tr>
                    </thead>
                <tbody>{
                        this.props.pointData.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>}
                {this.props.buttonId === 1 && <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">coordinates</th>
                    </tr>
                    </thead>
                <tbody>{
                        this.props.lineData.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>}
            {this.props.buttonId === 2 && <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">coordinates</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.props.polygonData.features.map( item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.geometry.type}</td>
                                <td>{item.properties.name}</td>
                                <td>{item.properties.desc}</td>
                                <td>{item.geometry.coordinates}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>}
            {this.props.buttonId !== 0 && this.props.buttonId !== 1 && this.props.buttonId !== 2 && <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">coordinates</th>
                    </tr>
                    </thead>
                </table>
            </div>}
           </div>
        );
        
    }
}
export default TableFormData;