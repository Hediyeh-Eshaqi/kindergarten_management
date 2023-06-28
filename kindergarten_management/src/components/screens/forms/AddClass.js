import React, { Component } from 'react'
import AddClassForm from './AddClassForm'
import addClass from "../../../assets/images/addClass.png"

export default class AddClass extends Component {
    render() {
        return (
            <div>
                <div className='row'>


                    <div className="col-12 col-sm-6 d-flex align-items-center">
                        <img className='img-fluid' style={{ zIndex: "10000", position: "relative" }} src={addClass}></img>
                    </div>
                    <div className="col-12 col-sm-6">
                        <AddClassForm/>
                    </div>
                </div>
                <svg style={{position:"fixed", bottom:"0px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,53.3C384,32,480,64,576,112C672,160,768,224,864,218.7C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        )
    }
}
