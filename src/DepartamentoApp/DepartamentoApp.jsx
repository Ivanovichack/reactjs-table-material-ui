import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import DepartamentoTabla from '../Components/DepartamentoTabla/DepartamentoTabla'


class DepartamentoApp extends Component{
    
    constructor(props){
        super(props)
        this.state = { departamentos: [] }
    }

    componentWillMount(){
        fetch('http://localhost:8888/api/departamentos')
        .then((response) => {
            return response.json()
        })
        .then((departamentos) => {
            this.setState ({ departamentos: departamentos})
        }) 
    }

    render(){
        
        if(this.state.departamentos.length > 0){
            return(
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start">
                                System
                            </IconButton>
                            
                        </Toolbar>
                    </AppBar>
                    <DepartamentoTabla listado={this.state.departamentos} />
                </div>
            )
        } else {
            return <p className="">Cargando departamentos...</p>
        }
    }
}

export default DepartamentoApp;