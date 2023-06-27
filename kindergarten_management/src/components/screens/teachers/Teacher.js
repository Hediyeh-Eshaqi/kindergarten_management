import React, { Component } from 'react'
import teacher from "../../../assets/images/teacher.png"
export default class Teacher extends Component {
    render() {
        return (
            <div className="col-auto text-center">
                <div class="card  mb-3 h-100" style={{ width: "18rem" }}>
                    <div class="card-header">معلم</div>
                    <div class="card-body justify-content-center text-black">
                        <img width={100} src={teacher}></img>
                        <h6 class="card-title pt-2">نام معلم</h6>
                        <h6 className=''>نام خانوادگی معلم: ۱</h6>
                        <h6> زمینه کاری: ۱۰</h6>
                        <h6>سن : ۲۶</h6>
                        <a style={{marginTop:"10px"}} href="#" class="btn btn-light">مشاهده</a>
                    </div>
                </div>
            </div>
        )
    }
}
