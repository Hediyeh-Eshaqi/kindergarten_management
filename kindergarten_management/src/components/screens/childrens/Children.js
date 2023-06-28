import React, { Component } from 'react'
import student from "../../../assets/images/student.png"

export default class Children extends Component {
    render() {
        return (
            <div className="col-auto text-center m-1">
                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header bg-light">کودک</div>
                    <div class="card-body justify-content-center text-black">
                        <img src={student} width={100}></img>
                        <h6 class="card-title pt-5">نام کودک</h6>
                        <h6 className=''>نام خانوادگی کودک: ۱</h6>
                        <h6>سن کودک: ۱۰</h6>
                        <a style={{marginTop:"75px"}} href="#" class="btn btn-light">مشاهده</a>
                    </div>
                </div>
            </div>
        )
    }
}
