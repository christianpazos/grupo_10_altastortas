import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
function NavBar () {
    return(
        <React.Fragment>
            s
            <Router>
                <Switch>
                    <ul className="navbar-nav color-pp  sidebar sidebar-dark accordion" id="accordionSidebar">
                        
                        <Link to="http://localhost:3000/" >
                            <a   className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3000/" >
                            
                            <div className="sidebar-brand-icon">
                                <i><img className="img-profile " src="images/LOGO TRANSPARENTE G10.png" width="60" alt="" /></i>
                            </div>
                            <div className="sidebar-brand-text mx-3" >Altas Tortas</div>
                            </a>
                        </Link>
                        

            
                    
                        <hr className="sidebar-divider"/>
            
                        <div className="sidebar-heading">Principal</div>

                        <li className="nav-item active">
                        <a className="nav-link" link="/">
                            <i className="fas fa-columns"></i>
                            <span>Dashboard</span></a>
                        </li><br/>
            
                    
                        <hr className="sidebar-divider"/>
            
                    
                        <div className="sidebar-heading">Links</div>
            
                        
                        <li className="nav-item">
                        <a className="nav-link collapsed" link="/">
                            <i className="fab fa-chrome"></i>
                            <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} link="http://localhost:3002" target="_blank" rel="noopener noreferrer">Pag Altas Tortas</a></span>
                        </a>
                        </li>
            
                    
                        <li className="nav-item">
                        <a className="nav-link" link="http://localhost:3002/users/login">
                            <i className="fas fa-sign-in-alt"></i>
                            <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} link="http://localhost:3002/users/login" target="_blank" rel="noopener noreferrer">Login Altas Tortas</a></span></a>
                        </li>

                        <hr className="sidebar-divider"/>

                        <div className="sidebar-heading">Acciones</div>
            
                    
                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tablas</span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-balance-scale"></i>
                            <span>Métricas</span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-database"></i>
                            <span>Base de datos</span></a>
                        </li>

                        <hr className="sidebar-divider"/>

                        <div className="sidebar-heading">Contacto</div>

                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-id-card"></i>
                            <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} link="images/formulario.png" target="_blank" rel="noopener noreferrer">Contacto Fabrica</a></span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-store"></i>
                            <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} link="images/formulario.png" target="_blank" rel="noopener noreferrer">Contacto Locales</a></span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" link="/">
                            <i className="fas fa-code"></i>
                            <span>
                                <a style={{ color: 'inherit', textDecoration: 'inherit'}} link="images/formulario.png" target="_blank" rel="noopener noreferrer">Contacto Desarrolladores</a></span></a>
                        </li>
            
                    
                        <hr className="sidebar-divider d-none d-md-block"/>
                    </ul>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default NavBar;