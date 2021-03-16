import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DepartamentoRow from '../DepartamentoRow/DepartamentoRow'

class DepartamentoTable extends Component{
    render(){
        return(
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Manager</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
                
                {
                    this.props.listado.map((departamento) => {
                        return <DepartamentoRow 
                            key={departamento.department_id}
                            id={departamento.department_id}
                            name={departamento.department_name}
                            localizacion={departamento.location_d}
                            manager={departamento.manager_d}
                        />
                    })
                }
                </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default DepartamentoTable;