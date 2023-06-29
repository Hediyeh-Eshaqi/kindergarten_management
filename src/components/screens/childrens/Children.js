import React, { Component } from 'react'
import student from "../../../assets/images/student.png"

export default class Children extends Component {
    render() {
        return (
            <div className="col-auto m-1">
                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header text-center bg-light">{this.props.name} {this.props.familyName}</div>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                        <img src={student} width={100}></img>
                        </div>
                        <div class="">تاریخ تولد: {this.props.birthDate}</div>
                        <div className=''>سن: {this.props.age}</div>
                        <div>سرگرمی : {this.props.hobbies}</div>
                        <div>سرپرست: {this.props.parents}</div>
                        <div>کلاس ها: {this.props.classes}</div>
                    </div>
                </div>
            </div>
        )
    }
}
