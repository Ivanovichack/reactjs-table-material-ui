import React, { Component } from 'react';

class DepartamentosRow extends Component{
    render(){
        return(
            <li className="media">
                <div className="media-body">
                    <h4>{this.props.name}</h4>
                    <p>
                        {this.props.localizacion} &nbsp;
                        <span className="label label-info"> 
                            {this.props.manager}
                        </span>
                    </p>
                </div>
            </li>
        );
    }
}
export default DepartamentosRow;