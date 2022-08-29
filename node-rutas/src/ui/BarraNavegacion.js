import React from 'react'
import { Link } from 'react-router-dom'



function BarraNavegacion() {
    return (
        <div class="container-fluid">
            <div class="row text-danger">
                <h2> MIS SERIES PREFERIDAS</h2>
            </div>
            <div class="row">
                <div class="col text-info">
                    <h3>STAR TREK</h3>
                    <Link to="/klingon"> Klingon</Link>
                    <br />
                    <Link to="/Federacion"> Federacion</Link>
                </div>
                <div class="col text-info">
                    <h3>STAR WARS</h3>
                    <Link to="/rebeldes"> Rebeldes</Link>
                    <br />
                    <Link to="/imperio"> Imperio</Link>
                    <br />
                </div>
                <br/>
                <br/>
                <br/>
                <p>==============================================================</p>
            </div>
        </div>)
}

export default BarraNavegacion