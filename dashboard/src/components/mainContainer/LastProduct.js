
import React, {Component } from 'react';


class LastProduct extends Component {
    constructor() {
        super();
        this.state = {
            lastProduct: '',
            categoria:''
          };
    }
    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */


    componentDidMount(){
        
        fetch("http://localhost:3002/apis/lastProduct")
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            count: 1,
                            lastProduct: data.data[0],
                            categoria:data.data[0].category
                        }
                    )
                    
                
                })
                        
                .catch(error => console.log(error));
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Último producto en la Base de Datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={`http://localhost:3002/${this.state.lastProduct.imagen}`} alt="" />
                            </div>
                            <h6 className="title-sp">Nombre del producto:</h6>
                            <p>{this.state.lastProduct.nombre}</p>
                            <h6 className="title-sp">Categoria del producto:</h6>
                            <p>{this.state.categoria.nombre}</p>
                            <h6 className="title-sp">Descripción del producto:</h6>
                            <p>{this.state.lastProduct.descripcion}</p>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        
    }
}

export default LastProduct;