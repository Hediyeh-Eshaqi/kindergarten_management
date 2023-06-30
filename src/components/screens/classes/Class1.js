import React, { Component } from 'react'
import teacher from "../../../assets/images/teacher.png"
import { Link } from 'react-router-dom'
import classimage from "../../../assets/images/class.png" 

export default class Class1 extends Component {
    render() {
        return (
            <div className="col-auto m-1">
                <div class="card text-center mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                            <img width={100} src={classimage}></img>
                        </div>
                        <h6>{this.props.subject} {this.props.year}</h6>
                        <Link to={"/classes/"+this.props.classNumber}><a style={{marginTop:"20px"}} href="#" class="btn btn-light">مدیریت کلاس</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}
