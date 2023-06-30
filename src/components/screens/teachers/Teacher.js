import React, { Component } from 'react'
import teacher from "../../../assets/images/teacher.png"
import { Link } from 'react-router-dom'
export default class Teacher extends Component {
    render() {
        return (
            <div className="col-auto m-1">
                <div class="card text-center mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header text-center">{this.props.name} {this.props.familyName}</div>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                            <img width={100} src={teacher}></img>
                        </div>
                        <h6 class="pt-5">درجه کارمند: {this.props.degree}</h6>
                        <h6>جنسیت کارمند: {this.props.gender}</h6>
                        <h6>نوع کارمند: {this.props.contract_type=="a"?"ساعتی":"قراردادی"}</h6>
                        <Link to={"/teachers/"+this.props.SSN}><a style={{marginTop:"20px"}} href="#" class="btn btn-light">مشاهده کارمند</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}
