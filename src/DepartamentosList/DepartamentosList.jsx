import React, { Component } from 'react';
import DepartamentosRow from '../DepartamentosRow/DepartamentosRow'

class DepartamentosList extends Component {
    render() {
        return(
            <div className="container">
                <ul className="media-list">
                {
                    this.props.listado.map((departamento) => {
                        return <DepartamentosRow 
                            key={departamento.department_id}
                            name={departamento.department_name}
                            localizacion={departamento.location_d}
                            manager={departamento.manager_d}
                        />         
                    })
                }
                </ul>
            </div>
        );
    }
}

export default DepartamentosList;