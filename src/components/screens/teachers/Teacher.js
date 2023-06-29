import React, { Component } from 'react'
import teacher from "../../../assets/images/teacher.png"
export default class Teacher extends Component {
    render() {
        return (
            <div className="col-auto">
                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header text-center">{this.props.familyName}</div>
                    <div class="card-body justify-content-center text-black">
                        <div className='text-center'>
                            <img width={100} src={teacher}></img>
                        </div>
                        <div>درجه: {this.props.degree}</div>
                        <div>شماره موبایل: {this.props.phoneNumber}</div>
                        <div>آدرس: {this.props.address}</div>
                        <div> شماره کارمندی: {this.props.SSN}</div>
                        <div>جنسیت: {this.props.gender}</div>
                        <div>نوع کارمندی: {this.props.contract_type}</div>
                        <div>شماره قرارداد: {this.props.contract_number}</div>
                        <div>حقوق: {this.props.contract_salary} تومان</div>
                    </div>
                </div>
            </div>
        )
    }
}
