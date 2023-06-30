import React, { Component } from 'react'
import student from "../../../assets/images/student.png"
import { Link } from 'react-router-dom'
export default class Children extends Component {
    render() {
        return (
            <div className="col-auto m-1">
                <div class="card text-center  mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header text-center bg-light">{this.props.name} {this.props.familyName}</div>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                        <img src={student} width={100}></img>
                        </div>
                        <h6 class="pt-5">تاریخ تولد: {this.props.birthDate}</h6>
                        <h6>سن کودک: {this.props.age}</h6>
                        <h6>سرگرمی کودک: {this.props.hobbies}</h6>
                        <Link to={"/childrens/"+this.props.childID}><a style={{marginTop:"20px"}} href="#" class="btn btn-light">مشاهده کودک</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}
