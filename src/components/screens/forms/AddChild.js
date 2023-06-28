import React, { Component } from 'react'
import mainpagepic from "../../../assets/images/mainpagePic.webp"
import AddChildForm from './AddChildForm'
 

export default class AddChild extends Component {
    render() {
        return (
            <div>
                <svg style={{ position: "absolute" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,250.7C672,256,768,192,864,144C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="d-sm-none col-12 col-sm-6 d-flex align-items-center">
                            <img className='img-fluid' style={{ zIndex: "10000", position: "relative" }} src={mainpagepic}></img>
                        </div>
                        <div className="col-12 col-sm-6">
                            <AddChildForm />
                        </div>
                        <div className="d-none d-sm-flex col-12 col-sm-6 d-flex align-items-center">
                            <img className='img-fluid' style={{ zIndex: "10000", position: "relative" }} src={mainpagepic}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
